import { useEffect, useState } from "react";
import OrderBookTable from "../Table/OrderBookTable";
import axios from "axios";
import { TableData } from "src/types/TableData";
import React from "react";
import tableServices from "@services/tableServices";


export default function OrderBookLable () {
  const [isChecked, setIsChecked] = useState(false);
  const [tableData, setTableData] = React.useState<Array<TableData>>([]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: TableData[] = await tableServices.fetchTableData();
        setTableData(data.map(item => ({ ...item, isChecked: false })));
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div >
      <div className="text-left">
        <div className="grid grid-cols-4 text-white text-sm py-3 ml-3">
          <div className="col-span-1">Tổng giá trị mua khớp: </div>
          <div className="col-span-1">Tổng giá trị mua chờ khớp: </div>
          <div className="col-span-1">Tổng giá trị bán khớp: </div>
          <div className="col-span-1">Tổng giá trị bán chờ khớp: </div>
        </div>
      </div>
      <hr className="pt-2 border-hr"/>
      <div className="flex relative h-40px mb-2">
        <div className="grid grid-cols-12 text-white text-center items-center w-full text-xs ">
          <div className="grid col-span-4 grid-cols-7 border-x-2 border-bg_sidebar_table">
            <div className="col-span-1 text-left ml-4 w-3 h-3 ">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              // className="w-3 h-3 border border-border_checkbox rounded"
            />
            </div>
            <div className="col-span-1 text-left">Mã</div>
            <div className="col-span-1">M/B</div>
            <div className="col-span-2">Loại lệnh</div>
            <div className="col-span-1">Giá đặt</div>
            <div className="col-span-1">KL đặt</div>
          </div>
          <div className="grid col-span-4 grid-cols-6">
            <div className="col-span-1">Giá khớp</div>
            <div className="col-span-1">KL khớp</div>
            <div className="col-span-1">Còn lại</div>
            <div className="col-span-1">Đã hủy</div>
            <div className="col-span-2">Trạng thái</div>
          </div>
          <div className="grid col-span-4 grid-cols-4">
            <div className="col-span-1">%Lãi/Lỗ</div>
            <div className="col-span-1">Thời gian</div>
            <div className="col-span-1">Thường/ĐK</div>
            <div className="col-span-1">Kênh GD</div>
          </div>
        </div>
      </div>
      <OrderBookTable isChecked={isChecked} onCheckboxChange={handleCheckboxChange} />
     
    </div>
  );
};



