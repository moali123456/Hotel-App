import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Images from "../../../../assets/Images/Images";
import LanguageSwitch from "../../../shared/language-switch/language-switch";
import "./auth-header.scss";

const AuthHeader = () => {
  const { i18n } = useTranslation();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <div className={`auth_header ${scroll ? "scrolled" : ""}`}>
      <div className="logo_bx">
        <img src={Images.colorLogo} alt="pic" />
      </div>

      <div className="language_bx">
        <div className="choose_lang">
          {/* {i18n.language === "en" && <LanguageSwitch languageText="عربي" />}
            {i18n.language === "ar" && <LanguageSwitch languageText="english" />} */}
          {i18n.language === "en" && <LanguageSwitch />}
          {i18n.language === "ar" && <LanguageSwitch />}
        </div>
      </div>
    </div>
  );
};

export default AuthHeader;
