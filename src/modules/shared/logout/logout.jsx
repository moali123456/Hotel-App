import { logout } from "../../../redux/authSlice";
import { useDispatch } from "react-redux";

const LogOut = ({ logoutContent }) => {
  const dispatch = useDispatch();

  const logoutBtn = () => {
    dispatch(logout());
  };

  return (
    <>
      <span className="logout_btn cursor-pointer" onClick={logoutBtn}>
        {logoutContent?.photo} {logoutContent?.text}
      </span>
    </>
  );
};

export default LogOut;
