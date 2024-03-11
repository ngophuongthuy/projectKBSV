export default function Dropdown() {
  return (
    <div className="flex p-4">
      <div className="flex border border-bg_border_filter rounded bg-bg_filter">
        <div className="flex px-3 py-2 text-sm">
          <div className="text-text_border1">Mã chứng khoán: </div>
          <div className="">
            <select className="text-text_border2 bg-bg_filter font-talwin border ">
              <option className="">Tất cả</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex ml-3 border border-bg_border_filter rounded bg-bg_filter">
        <div className="flex px-3 py-2 text-sm">
          <div className="text-text_border1">Từ ngày: </div>
          <div className="">
            <select className="text-text_border2 bg-bg_filter font-talwin">
              <option className=""></option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex ml-3 border border-bg_border_filter rounded bg-bg_filter">
        <div className="flex px-3 py-2 text-sm">
          <div className="text-text_border1">Đến ngày </div>
          <div className="">
            <select className="text-text_border2 bg-bg_filter font-talwin">
              <option className=""></option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex ml-3 border border-bg_border_filter rounded bg-bg_filter">
        <div className="flex px-3 py-2 text-sm">
          <div className="text-text_border1">Tần suất </div>
          <div className="">
            <select className="text-text_border2 bg-bg_filter font-talwin">
              <option className="">Tất cả</option>
            </select>
          </div>
        </div>
      </div>
      <div className="ml-auto">
        <button className=" bg-bg_filter border border-bg_filter2 text-text_filter2 font-semibold text-sm py-2 px-3 rounded mr-5">
          Hủy lệnh đã chọn
        </button>
      </div>
    </div>
  );
}
