import { Dropdown } from "@components/common";
import { LIST_LANGUAGES, LIST_THEME } from "@constants/common";
import { useAppDispatch, useAppSelector } from "@hooks/useStore";
import { storeCommonChangeTheme } from "@store/slices/commonSlice";
import { ICommon } from "@types";
import { useTranslation } from "react-i18next";

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

  const handleChangeTheme = (option: ICommon.IOption) => {
    const newTheme = LIST_THEME.find((themeItem) => themeItem.id === option.id);
    if (newTheme) dispatch(storeCommonChangeTheme(newTheme));
  };

  const handleChangeLang = (option: ICommon.IOption) => {
    const newLang = LIST_LANGUAGES.find((langE) => langE.id === option.id);
    if (newLang) i18n.changeLanguage(newLang.id);
  };

  return (
    <div className="  p-1 flex justify-between  items-center bg-bg_sidebar_table ">
      <div className="flex">
        <img src="/imageHeader/KB.png" alt="" className="mb-1  ml-5" />
        <button className="ml-8 rounded-full bg-gradient-to-tr from-zinc-600 to-zinc-800 px-3 text-text_filter2 text-sm">
          Tin mới
        </button>
      </div>

      <div className="flex items-center">
        <div className="border-x px-5 border-border_header h-10 flex items-center justify-center">
          <img
            src="./imageHeader/search-normal.png"
            alt=""
            className="w-5 h-5  "
          />
        </div>
        <div>
          <img src="./imageHeader/lock.png" alt="" className="w-5 h-5 ml-5" />
        </div>
        <div>
          <img
            src="./imageHeader/notification.png"
            alt=""
            className="w-5 h-5 ml-5"
          />
        </div>
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

        <div className="border-l px-5 border-border_header flex items-center text-text_header">
          <img src="./imageHeader/Avt.png" alt="" className="w-10 h-10 mr-2" />
          <div>
            <h3 className=" text-xs ">Nguyễn Văn A</h3>
            <span className="text-xs">091C123456SA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
