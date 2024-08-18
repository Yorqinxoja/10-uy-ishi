import { useTranslation } from "react-i18next";
import { BsMedium } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import header from "../../assets/header.svg";
import React from "react";

const Header = () => {
  const [t, i18n] = useTranslation();
  return (
    <>
      <div className="flex  justify-between items-center p-6 ">
        <div>
          <h1 className=" h1 m-w-[291px] h-[63px text-[#D05270] text-[52px] font-bold leading-[63px] ">
            {t("t8")}{" "}
          </h1>
          <br />
          <strong className="font-bold text-[#424242 ]  w-[282px] h-[63px] text-[52px] text-[#424242]">
            {t("t9")}{" "}
          </strong>
          <br />
          <br />
          <p className=" w-[632px] h-[63px]  font-normal text-[#424242] text-[18px] text-[#424242]">
            {t("t10")}
          </p>
          <br />
          <br />
          <div className="flex gap-[20px]">
            <a href="">
            <div className="flex gap-[20px] items-center text-[#424242] bg-[#47ACDF] w-[201px] h-[42px] my-[40px] px-[10px] justify-center transition-[2s] hover:bg-[#5A47AB] transition-[2s]">
              <ImTwitter className="w-[20px] h-[32px] text-[#FFFFFF]" />
              <a>
                <p className="w-[55px] h-[15px]  text-[#FFFFFF] text-[12px] mx-[-60px]">
                  TWITTER
                </p>
              </a>
            </div>
            </a>
            <a href="">
            <div className="flex gap-[20px] items-center text-[#424242] bg-[#1275B1] w-[201px] h-[42px] my-[40px] px-[10px] justify-center transition-[2s] hover:bg-[#5A47AB] transition-[2s]">
              <FaLinkedinIn className="w-[20px] h-[32px] text-[#FFFFFF] " />
              <a href="">
                <p className="w-[55px] h-[15px]  text-[#FFFFFF] text-[12px] mx-[-60px]">
                LINKEDIN
                </p>
              </a>
            </div>
            </a>
            <a href="">
            <div className="flex gap-[20px] items-center text-[#424242] bg-[#000000] w-[201px] h-[42px] my-[40px] px-[10px] justify-center transition-[2s] hover:bg-[#5A47AB] transition-[2s]">
              <BsMedium className="w-[20px] h-[32px] text-[#FFFFFF]" />
              <a href="">
                <p className="w-[55px] h-[15px]  text-[#FFFFFF] text-[12px] mx-[-60px]">
                 MEDIUM
                </p>
              </a>
            </div>
            </a>
          </div>
        </div>
        <div>
          <img src={header} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
