export default function Lable() {
  return (
    <div className=" text-white">
      <div className="grid grid-cols-12  ">
        <div className="grid col-span-1 grid-cols-2 ">
          <div className="col-span-1 "></div>
          <div className=" col-span-1">Mã</div>
        </div>
        <div className="grid col-span-3 grid-cols-3 ">
          <div className="col-span-1 ">Giá trị</div>
          <div className="col-span-1 ">Khối lượng</div>
          <div className="col-span-1 "> Lặp lại</div>
        </div>
        <div className="grid col-span-3 grid-cols-3">
          <div className="col-span-3 ">Thời gian hiệu lực</div>
        </div>
      </div>
    </div>
  );
}
