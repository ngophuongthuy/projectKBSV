import Header from "./components/Header";
import { useAppSelector } from "@hooks/useStore";
import {OrderBookTab} from './components/Tab/OrderBookTab'
import Sidebar from "./components/Sidebar";
import "react-toastify/dist/ReactToastify.css";



function App(): JSX.Element {
  const { theme } = useAppSelector((state) => state);
  
  return (
    <div
      className=" text-secondary overflow-y-auto max-h-screen  w-screen bg-bg_black"
      data-theme={theme.id}
    >
    <div ><Header/></div>
    <div className="flex">
    <div className="order-last m-2 bg-bg_sidebar_table w-full rounded-md"> 
        <OrderBookTab/>
    </div>
    <div><Sidebar/></div>
  </div>
  </div>
  );
}

export default App;

