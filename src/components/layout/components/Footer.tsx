export default function Footer() {
  const buttons = [
    { title: "Tài sản", imgSrc: "./imageFooter/empty-wallet.png" },
    { title: "Danh mục", imgSrc: "./imageFooter/receipt-edit.png" },
    { title: "Sổ lệnh", imgSrc: "./imageFooter/note-2.png" }
  ];

  return (
    <div>
      <div className="flex justify-between  px-6">
        {/* Phần trái */}
        <div className="flex flex-item ">
          <div>
            <button className="text-text_buttom px-4 py-1 border-2 border-color_yellow text-sm font-bold rounded bg-yellow-500">
              Đặt lệnh
            </button>
          </div>
          <div className="relative ml-3">
            <select className="hover:text-color_yellow text-sm py-1 pr-20 text-text_footer_sidebar border-2 border-bg_buttom rounded bg-bg_buttom">
              <option className="">091C123456SA</option>
            </select>
          </div>
        </div>
        {/* Phần phải */}
        <div className="flex  items-center pr-20 ">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="hover:text-color_yellow flex items-center mr-2 text-sm px-3 py-1 text-text_footer_sidebar border-2 border-bg_buttom rounded-full bg-bg_buttom "
            >
              <img src={button.imgSrc} alt="" className="w-4 h-4 mr-1" />
              <span>{button.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
