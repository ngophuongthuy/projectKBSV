import { Dropdown } from "@components/common";
import { LIST_LANGUAGES, LIST_THEME } from "@constants/common";
import { useAppDispatch, useAppSelector } from "@hooks/useStore";
import { storeCommonChangeTheme } from "@store/slices/commonSlice";
import { ICommon } from "@types";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";

const optionsTheme: ICommon.IOption[] = LIST_THEME.map((eTheme) => {
  return { id: eTheme.id, label: eTheme.name, value: eTheme.id };
});

const optionsLang: ICommon.IOption[] = LIST_LANGUAGES.map((eLang) => {
  return { id: eLang.id, label: eLang.name, value: eLang.id };
});

export default function Header() {
  const { t, i18n } = useTranslation();
  const { theme } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  // const handleChangeTheme = (option: ICommon.IOption) => {
  //   const newTheme = LIST_THEME.find((themeItem) => themeItem.id === option.id);
  //   if (newTheme) dispatch(storeCommonChangeTheme(newTheme));
  // };

  // const handleChangeLang = (option: ICommon.IOption) => {
  //   const newLang = LIST_LANGUAGES.find((langE) => langE.id === option.id);
  //   if (newLang) i18n.changeLanguage(newLang.id);
  // };

  return (
    <div className="p-2 bg-bg_sidebar_table">
      <div className="grid grid-cols-12">
        <div className="grid col-span-2 ">
          <img src="/imageHeader/KB.png" alt="" className="p-2 ml-2 " />
        </div>
        <div className="grid col-span-1 ">
          <button className="rounded-full mx-6 m-1 bg-gradient-to-tr from-zinc-600 to-zinc-800 text-text_filter2 text-sm">
            Tin mới
          </button>
        </div>
        <div className="grid col-span-5 ">
          <Marquee className="text-text_header2 text-xs ">
            Ưu đãi đậm sâu cùng cơ hội vi vu trời Âu dành cho 02 người và nhiều
            voucher du lịch hấp dẫn
          </Marquee>
        </div>

        <div className="grid col-span-2">
          <div className="flex items-center">
            <div className="border-x px-5 border-border_header h-10 flex items-center justify-center">
              <img
                src="./imageHeader/search-normal.png"
                alt=""
                className="w-5 h-5  "
              />
            </div>
            <div>
              <img
                src="./imageHeader/lock.png"
                alt=""
                className="w-5 h-5 ml-5"
              />
            </div>
            <div className=" ml-2 relative w-6 h-6">
              <img
                className="w-full h-full"
                src="./imageHeader/notification.png"
              />
              <div className="text-center text-text_notification absolute bg-notification top-0 right-0 rounded-full w-3 h-3 flex justify-center items-center text-xs">
                9
              </div>
            </div>
            {/* <div>
              <img
                src="./imageHeader/notification.png"
                alt=""
                className="w-5 h-5 ml-5"
              />
            </div> */}
            <div>
              <img
                src="./imageHeader/setting-2.png"
                alt=""
                className="w-5 h-5 ml-5"
              />
            </div>
            <div>
              <img
                src="./imageHeader/message-question.png"
                alt=""
                className="w-5 h-5 mx-5"
              />
            </div>
          </div>
        </div>
        <div className="grid col-span-2 ">
          <div className="border-l px-5 border-border_header flex items-center text-text_header">
            <img
              src="./imageHeader/Avt.png"
              alt=""
              className="w-10 h-10 mr-2"
            />
            <div>
              <h3 className=" text-xs ">Ngo Phuong Thuy</h3>
              <span className="text-xs">091C123456SA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
