import { useState } from "react";
import OrderBookLayout from "../OrderBookLayout/OrderBookLayout";

export function OrderBookTab() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabsData = [
    {
      label: "Sổ lệnh thường",
      content:<OrderBookLayout/>,
    },
    {
      label: "Quản lý mua định kỳ",
      content:
        "Ngô Phương Thủy haha hihi hoho",
    },
  ];
  return (
    <div className="w-full  ">
      <div className=" border-b border-hr">
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`py-3 border-b-4  transition-colors duration-300 text-text_tab hover:text-color_yellow hover:border-color_yellow rounded-t-lg  px-3 ${
                idx === activeTabIndex
                  ? "border-color_yellow"
                  : "border-transparent " //sử dụng để định nghĩa một đường viền có màu trong suốt
              }`}
              onClick={() => setActiveTabIndex(idx)}>
              {tab.label}
            </button>
          );
        })}
        
      </div>
      <div >
        <>{tabsData[activeTabIndex].content}</>
      </div>
    
    </div>
  );
}

