import React, { useContext } from 'react';
import { useTheme } from './Theme'; 
import Tel from "../assets/iPhone13Pro.png"
import location from "../assets/iconLocation.svg"
import ChangeLanguage from './ChangeLanguage';
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { theme, toggleTheme } = useTheme(); 
  const { t, i18n } = useTranslation();
  return (
    <div className={theme === 'light' ? 'bg-blue-50 text-gray-900 ' : 'bg-gray-900 text-white '}>
      
      <nav className="w-full flex justify-between items-center py-4 px-8">
        <div className="text-2xl font-bold">YOUR LOGO</div>
        <div className="flex space-x-6">
          <a href="#assets" className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>{t("header1")}</a>
          <a href="#creators" className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>{t("header2")}</a>
          <a href="#careers" className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>{t("header3")}</a>
          <a href="#pro" className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>{t("header4")}</a>
        </div>
        
        <div className="flex space-x-4 gap-3">
          <ChangeLanguage />
          <button onClick={toggleTheme} className="bg-gray-800 text-white px-4 py-2 rounded-full">
            {theme === 'light' ? t('darkMode') : t('lightMode')}
          </button>
        </div>
      </nav>

     
      <div className="flex flex-col lg:flex-row items-center justify-between w-[1388px] h-[777px] mx-auto m-6 bg-[url(C:\Users\Noutbukcom\Desktop\7-oy-2-dars-uy-ishi-fn_27\src\assets\bg.svg)] bg-cover bg-center rounded-[50px]">
        
        <div className="flex-1 p-8 lg:p-12 text-center lg:text-left">
          <h2 className={theme === 'light' ? 'text-blue-600' : 'text-blue-400 uppercase text-sm font-bold mb-4'}>
            {t("heroTitle")}
          </h2>
          <h1 className={theme === 'light' ? 'text-4xl lg:text-5xl font-extrabold leading-tight mb-6' : 'text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-[#A1A9FF]'}>
            {t("heroSubtitle")}
          </h1>
          <div className='flex content-center gap-8'>
            <img src={location} alt="" />
            <p className="mb-8 mt-2 w-[460px] text-xl">
              We noticed the high level of insecurity in the world, and we thought of how technology could be used to combat these insecurities.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold">{t("waitlistTitle")}</h3>
            <p>{t("waitlistDescription")}</p>
           
            <div className="flex space-x-2 ">
              <div className={theme === 'light' ? 'flex bg-white justify-between w-[527px] p-0.5 rounded-full' : 'flex bg-black justify-between w-[527px] p-0.5 rounded-full'}>
                <input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className={theme === 'light' ? 'px-4 py-2 ' : 'px-4 py-2 bg-transparent text-white rounded-full focus:outline-none'}
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full">{t("joinButton")}</button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="flex-1 flex justify-center items-center p-8">
          <div className="relative flex justify-center">
           
            <img
              src={Tel}
              alt="Phone 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;