import React from "react";
import axios from "axios";
import CancelOrderDialog from "./Dialog/CancelOrderDialog";
import { TableData } from "src/types/TableData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface OrderBookTableProps {
  isChecked: boolean;
  onCheckboxChange: () => void;
}

export default function OrderBookTable({
  // isChecked,
  onCheckboxChange
}: OrderBookTableProps) {
  const [tableData, setTableData] = React.useState<Array<TableData>>([]);
  const [hovered, setHovered] = React.useState<number | null>(null);
  const [cancelDialog, setCancelDialog] = React.useState<boolean>(false);
  const [selectedOrder, setSelectedOrder] = React.useState<TableData | null>(
    null
  );

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://64f7dd31824680fd217ee404.mockapi.io/api/Table"
        );
        setTableData(
          response.data.map((item: TableData) => ({
            ...item,
            isChecked: false
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleOpenCancelDialog = () => {
    setCancelDialog(true);
  };

  const handleCloseCancelDialog = () => {
    setCancelDialog(false);
  };
  const handleCancelOrder = () => {
    if (selectedOrder) {
      const updatedData = tableData.filter(
        (item) =>
          !(
            item.Ma === selectedOrder.Ma &&
            item.Loailenh === selectedOrder.Loailenh
          )
      );
      setTableData(updatedData);
    }
    handleCloseCancelDialog();
    // alert('Qúy khách đã hủy lệnh thành công');
    toast.success("Quý khách đã hủy lệnh thành công.");
  };

  const handleCheckboxChange = (index: number) => {
    onCheckboxChange();
    setSelectedOrder(tableData[index]);
    setTableData((prevState) => {
      const newData = [...prevState];
      newData[index] = {
        ...newData[index],
        isChecked: !newData[index].isChecked
      };
      return newData;
    });
  };
  function formatTime(time: string) {
    const date = new Date(time);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div>
      {tableData.map((item: TableData, index: number) => (
        <div
          key={index}
          className={`grid grid-cols-12 text-text_table_laber text-center items-center w-full text-xs relative  py-2
            ${
              index % 2 === 0
                ? "bg-bg_table border-y border border-bg_sidebar_table "
                : "border-y border border-bg_sidebar_table "
            }
            ${item.isChecked ? "bg-yellow-800" : ""}`}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="grid col-span-4 grid-cols-7 ">
            <div className="col-span-1 text-left ml-4 w-3 h-3">
              <input
                type="checkbox"
                // className='absolute w-3 h-3 opacity-0 '
                checked={item.isChecked}
                onChange={() => handleCheckboxChange(index)}
              />
              {/* <div className={`  w-3 h-3 border border-border_checkbox rounded ${item.isChecked ? 'bg-black' : ''}`}></div> */}
            </div>
            <div className="col-span-1 text-left">{item.Ma}</div>
            <div className="col-span-1">{item.MB}</div>
            <div className="col-span-2">{item.Loailenh}</div>
            <div className="col-span-1">{item.Giadat}</div>
            <div className="col-span-1">{item.KLdat}</div>
          </div>
          <div className="grid col-span-4 grid-cols-6">
            <div className="col-span-1">{item.Giakhop}</div>
            <div className="col-span-1">{item.KLkhop}</div>
            <div className="col-span-1">{item.Conlai}</div>
            <div className="col-span-1">{item.Dahuy}</div>
            <div className="col-span-2">{item.Trangthai}</div>
          </div>
          <div className="grid col-span-4 grid-cols-4">
            <div className="col-span-1">{item.Lailo}</div>
            <div className="col-span-1">{formatTime(item.Thoigian)}</div>
            <div className="col-span-1">{item.ThuongDK}</div>
            <div className="col-span-1">{item.KenhGD}</div>
            <div className="col-span-4 relative flex justify-end items-center">
              {hovered === index && (
                <div className="absolute inset-0 flex justify-end items-center mr-4">
                  <button
                    className="bg-color_yellow  text-text_buttom font-bold py-2 px-2 mb-4 rounded mr-3"
                    onClick={handleOpenCancelDialog}
                  >
                    <img
                      src="/imageTable/trash.png"
                      alt=""
                      className="inline-block  mr-1"
                    />{" "}
                    Hủy lệnh
                  </button>
                  <button className="bg-color_yellow  text-text_buttom font-bold py-2 px-2 mb-4 rounded">
                    <img
                      src="/imageTable/edit-2.png"
                      alt=""
                      className="inline-block mr-1"
                    />{" "}
                    Sửa lệnh
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      <CancelOrderDialog
        open={cancelDialog}
        onClose={handleCloseCancelDialog}
        selectedOrder={selectedOrder}
        onCancelOrder={handleCancelOrder}
      />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName=" w-96 mx-auto"
      />
      <hr className=" mb-4 border-hr" />
    </div>
  );
}
