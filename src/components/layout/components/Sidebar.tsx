export default function Sidebar() {
  const sidebarItems = [
    { title: "Bảng giá", image: "/imageSidebar/Price_list.png" },
    { title: "Giao dịch của tôi", image: "/imageSidebar/My_interface.png" },
    { title: "Giao dịch", image: "/imageSidebar/Stock_trading.png" },
    { title: "Giao dịch tiền", image: "/imageSidebar/Money.png" },
    { title: "Quản lý tài khoản", image: "/imageSidebar/Personalcard.png" },
    {
      title: "Công cụ phân tích",
      image: "/imageSidebar/Market_statistics.png"
    },
    { title: "Prime", image: "/imageSidebar/Prime.png" },
    { title: "Tiện ích", image: "/imageSidebar/Setting.png" }
  ];

  return (
    <div className="text-center h-screen  ">
      <aside className="w-20 bg-bg_sidebar_table text-text_footer_sidebar text-xs ">
        <ul className="py-3">
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className="px-3 py-3 flex flex-col items-center hover:text-color_yellow"
            >
              <img src={item.image} alt="" className="mb-3" />
              {item.title}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
