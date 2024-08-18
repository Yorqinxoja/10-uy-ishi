import { useTranslation } from "react-i18next";
import React from "react";
import img1 from "../../assets/img1.png";
import derel from "../../assets/derel.svg";

const Single = () => {
  const [t, i18n] = useTranslation();
  return (
    <div className="h-[700px]">
      <img className="w-[1100px] my-[100px]" src={img1} alt="" />
      <div className="m-w-[1100px] my-[100px] mx-[170px]">
        <h1 className=" text-[#3A0CA3] text-[42px] font-bold ">{t("s1")}</h1>
        <br />
        <br />
        <br />
        <p className="text-[#424242] text-[24px] w-[1100px] ">{t("s2")}</p>
        <br />
        <br />
        <p className="text-[#424242] text-[24px] w-[1100px] ">{t("s3")}</p>
        <br />
        <br />
        <p className="text-[#424242] text-[24px] w-[1100px] ">{t("s3")}</p>
      </div>
      <div className="w-[1100px]">
        <h2 className=" text-[#3A0CA3] text-[36px] font-bold ">{t("s4")}</h2>
        <br />
        <br />
        <br />
        <p className="text-[#424242] text-[24px] w-[1100px] ">{t("s2")}</p>
        <br />
        <br />
        <p className="text-[#424242] text-[24px] w-[1100px] ">{t("s3")}</p>
        <br />
        <br />
        <p className="text-[#424242] text-[24px] w-[1100px] ">{t("s3")}</p>
      </div>
      <div className="w-[1100px] my-[100px]">
        <h2 className=" text-[#3A0CA3] text-[24px] font-bold ">{t("s5")}</h2>
        <br />
        <br />
        <br />
        <p className="text-[#424242] text-[24px] w-[1100px] ">{t("s2")}</p>
        <br />
        <br />
        <p className="text-[#424242] text-[24px] w-[1100px] ">{t("s3")}</p>
        <br />
        <br />
        <p className="text-[#424242] text-[24px] w-[1100px] ">{t("s3")}</p>
      </div>

      <img className="w-[450px] my-[200px] p-[30px] " src={derel} alt="" />
    </div>
  );
};

export default Single;
