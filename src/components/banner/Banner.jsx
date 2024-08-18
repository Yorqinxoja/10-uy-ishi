import { useTranslation } from "react-i18next";
import React from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import derel from "../../assets/derel.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  const [t, i18n] = useTranslation();
  return (
    <div className="h-[700px]">
      <ul className="flex  mx-[-100px] my-[50px]">
        <li className="text flex mx-[140px] gap-10 ">
          <a href="#" className="text-link text-[#424242] text-[18px] font-[700] hover:text-[#D05270]">
            {" "}
            {t("t14")}
          </a>
          <a href="#" className="text-link text-[#424242] text-[18px] font-[700] hover:text-[#D05270]">
            {" "}
            {t("t15")}
          </a>
          <a href="#" className="text-link text-[#424242] text-[18px] font-[700] hover:text-[#D05270]">
            {" "}
            {t("t16")}
          </a>
          <a href="#" className="text-link text-[#424242] text-[18px] font-[700] hover:text-[#D05270]">
            {" "}
            {t("t17")}
          </a>
          <a href="#" className="text-link text-[#424242] text-[18px] font-[700] hover:text-[#D05270]">
            {" "}
            {t("t18")}
          </a>
          <a href="#" className="text-link text-[#424242] text-[18px] font-[700] hover:text-[#D05270]">
            {" "}
            {t("t19")}
          </a>
          <a href="#" className="text-link text-[#424242] text-[18px] font-[700] hover:text-[#D05270]">
            {" "}
            {t("t20")}
          </a>
        </li>
      </ul>
      <div class="flex gap-[100px] p-[50px] my-[-50px] ">
        <div class="w-[700px] h-[400px] relative">
            <img src={img1} alt="" class="w-full h-full object-cover" />
          <br />
          <strong class="block mb-2 text-gray-500">{t("c1")}</strong>
          <h2 class="text-xl font-semibold mb-2  text-[#D05270]">{t("c2")}</h2>
          <p class="text-gray-700 mb-4">{t("c3")}</p>
          <a
            href="/single"
            class=" text-link text-[18px] font-[500] text-[#D05270] hover:underline transition-colors duration-300"
          >
            {t("c4")}
          </a>
        </div>
        <div class="w-[700px] h-[400px] relative">
            <img src={img2} alt="" class="w-full h-full object-cover" />
          <br />
          <strong class="block mb-2 text-gray-500">{t("c1")}</strong>
          <h2 class="text-xl font-semibold mb-2  text-[#D05270]">{t("c2")}</h2>
          <p class="text-gray-700 mb-4">{t("c3")}</p>
          <a
            href="/single"
            class=" text-link text-[18px] font-[500] text-[#D05270] hover:underline transition-colors duration-300"
          >
            {t("c4")}
          </a>
        </div>
      </div>
      <div className="flex gap-[100px] p-[50px] my-[190px]">
        <div class="w-[700px] h-[400px] relative">
            <img src={img1} alt="" class="w-full h-full object-cover" />
          <br />
          <strong class="block mb-2 text-gray-500">{t("c1")}</strong>
          <h2 class="text-xl font-semibold mb-2 text-[#D05270]">{t("c2")}</h2>
          <p class="text-gray-700 mb-4"> {t("c3")}</p>
          <a
            href="/single"
            class=" text-link text-[18px] font-[500] text-[#D05270] hover:underline transition-colors duration-300"
          >
            {t("c4")}
          </a>
        </div>
        <div class="w-[700px] h-[400px] relative">
            <img src={img2} alt="" class="w-full h-full object-cover" />
          <br />
          <strong class="block mb-2 text-gray-500">{t("c1")}</strong>
          <h2 class="text-xl font-semibold mb-2  text-[#D05270]">{t("c2")}</h2>
          <p class="text-gray-700 mb-4 ">{t("c3")}</p>
          <a
            href="/single"
            class=" text-link text-[18px] font-[500] text-[#D05270] hover:underline transition-colors duration-300"
          >
            {t("c4")}
          </a>
        </div>
      </div>
      <div className="flex gap-[100px] p-[50px] my-[190px]">
        <div class="w-[700px] h-[400px] relative">
            <img src={img1} alt="" class="w-full h-full object-cover" />
          <br />
          <strong class="block mb-2 text-gray-500 ">{t("c1")}</strong>
          <h2 class="text-xl font-semibold mb-2  text-[#D05270]">{t("c2")}</h2>
          <p class="text-gray-700 mb-4">{t("c3")}</p>
          <a
            href="/single"
            class=" text-link text-[18px] font-[500] text-[#D05270] hover:underline transition-colors duration-300"
          >
            {t("c4")}
          </a>
        </div>
        <div class="w-[700px] h-[400px] relative">
            <img src={img2} alt="" class="w-full h-full object-cover" />
          <br />
          <strong class="block mb-2 text-gray-500">{t("c1")}</strong>

          <h2 class="text-xl font-semibold mb-2 text-[#D05270]">{t("c2")}</h2>
          <p class="text-gray-700 mb-4">{t("c3")}</p>
          <a
            href="/single"
            class=" text-link text-[18px] font-[500] text-[#D05270] hover:underline transition-colors duration-300"
          >
            {t("c4")}
          </a>
        </div>
      </div>
      <img className="w-[450px] my-[500px] p-[30px] " src={derel} alt="" />
    </div>
  );
};

export default Banner;
