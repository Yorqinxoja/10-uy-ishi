import { useTranslation } from "react-i18next";
import me from "../../assets/me.svg";
import sad from "../../assets/sad zeppelins.svg";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  const [t, i18n] = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <>
      <div className="p-6 flex justify-between items-center bg-[#FFFFFF] shadow-md ">
        <div className="flex gap gap-4 items-center m-w-[220px] h-[36px text-[#424242] text-3xl font-bold leading-[36px] text-[#424242] justify-between ">
          <Link to={""}>
            {" "}
            <h1 className="text-3xl m-w-[220px] h-[36px text-[#424242]">
              {" "}
              <img src={sad} alt="" />
            </h1>
          </Link>
          <img className=" w-[90px] " src={me} alt="" />
        </div>
        <div className="flex gap-[40px]">
          <select
            defaultValue={i18n.language}
            onChange={handleChange}
            className="select-custom text-[18px] font-[400] hover:text-[#5A47AB] cursor-[pointer]"
          >
            <option value="uz">UZ</option>
            <option value="en">EN</option>
            <option value="ru">РУ</option>
          </select>
          <ul className="flex gap-10">
            <li className="flex gap-10 text-[14px] font-[500]">
              <NavLink to="/portfolio" className="nav-link hover:text-[#5A47AB]">
                {t("t1")}
              </NavLink>
              <NavLink to="/blog" className="nav-link hover:text-[#5A47AB]">
                {t("t2")}
              </NavLink>
              <NavLink to="/cv" className="nav-link hover:text-[#5A47AB]">
                {t("t3")}
              </NavLink>
              <NavLink to="/store" className="nav-link hover:text-[#5A47AB]">
                {t("t4")}
              </NavLink>
              <NavLink to="/freelance" className="nav-link hover:text-[#5A47AB]">
                {t("t5")}
              </NavLink>
              <NavLink to="/about" className="nav-link hover:text-[#5A47AB]">
                {t("t6")}
              </NavLink>
              <NavLink to="/contact" className="nav-link hover:text-[#5A47AB]">
                {t("t7")}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
