import Dropdown from "./Dropdown/Dropdown";
import Lable from "./Layout/Lable/LableLayout";

export default function PurchasingManagementLayout() {
  return (
    <div>
      <div>
        <Dropdown />
        <hr className=" border-hr" />
      </div>
      <div>
        <Lable />
      </div>
    </div>
  );
}
