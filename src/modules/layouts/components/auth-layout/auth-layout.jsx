import { Outlet } from "react-router-dom";
import AuthPageTitle from "../../../../utils/page-titles/auth-page-title";
import MainLoader from "../../../shared/loaders/main-loader";
import FireLoader from "../../../../utils/loader/fire-loader";
import "./auth-layout.scss";

const AuthLayout = () => {
  AuthPageTitle();
  FireLoader();

  return (
    <div id="auth_layout">
      <MainLoader />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
