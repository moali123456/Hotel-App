import { Link, Outlet } from "react-router-dom";
import MainLoader from "../../../shared/loaders/main-loader";
import FireLoader from "../../../../utils/loader/fire-loader";
import AdminPageTitle from "../../../../utils/page-titles/admin-page-title";
import "./admin-layout.scss";

const AdminLayout = () => {
  AdminPageTitle();
  FireLoader();
  return (
    <div id="admin_layout">
      <MainLoader />

      <Link className="py-2 inline-flex px-7 text-white bg-red-900 my-6" to="/">home</Link>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
