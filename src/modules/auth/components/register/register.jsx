import { useTranslation } from "react-i18next";
import AuthHeader from "../../shared/auth-header/auth-header";
import PageBanner from "../../shared/page-banner/page-banner";
import SectionTitle from "../../shared/section-title/section-title";
import { Link } from "react-router-dom";
import FireLoader from "../../../../utils/loader/fire-loader";
import RegisterForm from "./register-form";
import "./register.scss";

const Register = () => {
  const { t } = useTranslation();
  FireLoader();

  return (
    <div id="register_page" className="auth_content_bx">
      <div className="data_bx">
        <AuthHeader />

        <div className="content_bx">
          <div className="mb-[30px]">
            <SectionTitle
              title={t("sign_up")}
              subTitle={
                <>
                  {t("signUp_subtitle1")} <br /> {t("you_can")}
                  <Link to="/auth/login" className="color">
                    {t("login_here")}
                  </Link>
                </>
              }
            />
          </div>
          
          <RegisterForm />
        </div>

        <span></span>
      </div>

      <PageBanner
        className="register_bg"
        bannerTitle={t("register_banner_title")}
        bannerSubTitle={t("register_banner_subtitle")}
      />
    </div>
  );
};

export default Register;
