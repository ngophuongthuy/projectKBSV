import Header from "./components/Header";
import { useAppSelector } from "@hooks/useStore";
import { OrderBookTab } from "./components/Tab/OrderBookTab";
import Sidebar from "./components/Sidebar";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App(): JSX.Element {
  const { theme } = useAppSelector((state) => state);

  return (
    <>
      <div className="min-h-full bg-bg_black ">
        <Header />
        <div className="flex ">
          <Sidebar />
          <div className="w-screen  ">
            <div className="">
              <div className=" m-2 h-[calc(100vh_-_65px)] bg-bg_sidebar_table rounded-md  ">
                <OrderBookTab />
              </div>
              <div className="absolute bottom-3  min-w-full  ">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
