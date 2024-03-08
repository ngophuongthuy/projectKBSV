import FilterDropdown from "./Dropdown/FilterDropdown";
import Footer from "../Footer";
import OrderBookLable from "./TableLayout/Lable/OrderBookLable";

export default function OrderBookLayout() {
  return (
    <div className="flex flex-col h-screen">
      <div className="ml-4">
        <FilterDropdown />
      </div>
      <hr className=" border-hr" />
      <div className="">
        <OrderBookLable />
      </div>
    </div>
  );
}
