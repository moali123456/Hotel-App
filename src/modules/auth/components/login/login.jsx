import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AuthHeader from "../../shared/auth-header/auth-header";
import PageBanner from "../../shared/page-banner/page-banner";
import SectionTitle from "../../shared/section-title/section-title";
import LoginForm from "./login-form";
import FireLoader from "../../../../utils/loader/fire-loader";
import "./login.scss";

const Login = () => {
  const { t } = useTranslation();
  FireLoader();

  return (
    <div id="login_page" className="auth_content_bx">
      <div className="data_bx">
        <AuthHeader />

        <div className="content_bx">
          <div className="mb-[30px]">
            <SectionTitle
              title={t("sign_in")}
              subTitle={
                <>
                  {t("signIn_subtitle1")} <br /> {t("you_can")}
                  <Link to="/auth/register" className="color">
                    {t("register_here")}
                  </Link>
                </>
              }
            />
          </div>

          <div className=""><LoginForm /></div>
        </div>

        <span></span>
      </div>
      <PageBanner
        className="login_bg"
        bannerTitle={t("login_banner_title")}
        bannerSubTitle={t("login_banner_subtitle")}
      />
    </div>
  );
};

export default Login;
