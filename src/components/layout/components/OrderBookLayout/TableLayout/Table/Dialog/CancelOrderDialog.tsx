import React, { useState, useRef, useEffect } from "react";
import { Dialog } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { TableData } from "src/types/TableData";
import { Eye, EyeSlash } from "iconsax-react";
import { Toaster } from "react-hot-toast";
import { toast } from "react-toastify";

interface CancelOrderDialogProps {
  open: boolean;
  onClose: () => void;
  selectedOrder: TableData | null;
  onCancelOrder: () => void;
}

const CancelOrderDialog: React.FC<CancelOrderDialogProps> = ({
  open,
  onClose,
  selectedOrder,
  onCancelOrder
}) => {
  // const [taskData, setTaskData] = useState<TableData>();

  const Data = [
    { label: "Tiểu khoản", value: selectedOrder?.Tieukhoan },
    { label: "Lệnh", value: selectedOrder?.MB },
    { label: "Mã chứng khoán", value: selectedOrder?.Ma },
    { label: "Loại lệnh", value: selectedOrder?.Loailenh },
    { label: "Giá đặt (x1000)", value: selectedOrder?.Giadat },
    { label: "Khối lượng", value: selectedOrder?.KL },
    { label: "Giá trị (VNĐ)", value: selectedOrder?.Giatri }
  ];
  const length = 6; // độ dài mã otp
  const [pin, setPin] = useState<string[]>(Array.from({ length }, () => ""));

  // Refs cho các ô nhập
  const inputRefs = useRef<Array<HTMLInputElement | null>>(
    Array.from({ length }, () => null)
  );

  const handleChangePin = (index: number, value: string) => {
    if (!isNaN(Number(value)) && value.length <= 1) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      // Di chuyển tới ô kế tiếp
      if (index < length - 1 && value !== "") {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleConfirm = () => {
    const PinOTP = "123456"; // mã pin
    const enteredPin = pin.join(""); // chuyển mảng thàng chuỗi
    if (enteredPin === PinOTP) {
      onCancelOrder();
    } else {
      toast.error("OTP không đúng! Vui lòng nhập lại.");
    }
  };
  // nhấn xóa otp
  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0 && !e.currentTarget.value) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    if (!open) {
      setPin(Array.from({ length }, () => ""));
    }
  }, [open]);

  // const [OTP, setOTP] = useState(true);
  const [showOTP, setShowOTP] = useState(false);

  // Hàm để chuyển đổi trạng thái hiển thị/ẩn của OTP
  const handleClickShowPassword = () => {
    setShowOTP((prevState) => !prevState);
  };
  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div>
        <Dialog open={open} onClose={onClose}>
          <div className="max-h-screen bg-bg_dialog2  ">
            <div className=" bg-bg_dialog text-text_buttom_otp font-semibold text-sm flex justify-between items-center p-3 px-5">
              <h4>Xác nhận hủy lệnh</h4>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={onClose}
                className="text-text_buttom_otp size-3 cursor-pointer"
              />
            </div>
            <div className="px-5 pt-4 bg-bg_dialog2 text-xs  ">
              {Data.map((input, index) => (
                <div key={index} className="mb-4 flex  justify-between">
                  <label className="flex  text-text_laber ">
                    {input.label}
                  </label>
                  <input
                    className="bg-bg_dialog2  text-text_laber flex text-right  "
                    type="text"
                    value={input.value?.toString() || ""}
                    readOnly //không cho sửa nội dung
                  />
                </div>
              ))}
            </div>
            <hr className=" border-hr_dialog" />
            <div className="bg-bg_dialog2 px-5 pt-3">
              <div className="flex justify-between ">
                <div className="flex">
                  <div className="flex text-text text-sm font-medium">
                    <div>
                      <h5 className="mr-1">Nhập mã KB OTP</h5>
                    </div>
                    <div className="flex mt-1">
                      {showOTP ? (
                        <EyeSlash
                          size="15"
                          color="#D8D8D8"
                          onClick={handleClickShowPassword}
                        />
                      ) : (
                        <Eye
                          size="15"
                          color="#D8D8D8"
                          onClick={handleClickShowPassword}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex text-text text-sm font-medium">
                    <h5>Lưu KB OTP</h5>
                    <input
                      type=""
                      className="w-4 h-4 ml-1 mt-1 rounded-full border-2 border-checkbox_otp bg-bg_dialog2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-bg_dialog2 flex flex-col items-center px-5 py-3 ">
              <div className=" flex justify-between text-text_buttom_otp space-x-5 mx-auto w-full max-w-screen bg-bg_dialog rounded-xl px-20 py-10 ">
                {[...Array(length)].map((_, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type={showOTP ? "password" : "tel"}
                    maxLength={1} // Giới hạn của mỗi ô input là 1
                    className=" w-12 h-12 flex text-center rounded-md border-2 border-otp_input  bg-otp_input  hover:border-gray-400"
                    value={pin[index] || ""}
                    onChange={(e) => handleChangePin(index, e.target.value)}
                    onKeyDown={(e) => handleBackspace(e, index)}
                  />
                ))}
              </div>
            </div>
            <div className="mx-auto w-full text-center bg-bg_dialog2">
              <span className="text-text_laber text-xs">
                Quý khách vui lòng mở ứng dụng đã đăng ký KB OTP để lấy mã xác
                thực
              </span>
            </div>
            <div className="flex justify-center text-center bg-bg_dialog2 p-4">
              <button
                onClick={onClose}
                className="w-full bg-bg_dialog2  border border-color_yellow text-color_yellow font-semibold text-sm py-2 px-4 rounded mr-2"
              >
                Hủy
              </button>
              <button
                onClick={handleConfirm}
                className=" w-full bg-bg_buttom_acp hover:bg-color_yellow  hover:text-text_buttom text-text_buttom_otp font-semibold text-sm py-2 px-4 rounded"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
};
export default CancelOrderDialog;
