import i18n from "i18next";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { ROOMS_FAVOURITES } from "./constants/END_POINTS";
// import { BASE_HEADERS } from "./constants/app-constants";
// import axios from "axios";
// import { setFavoritesData } from "./redux/favoritesSlice";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// Protected Routes
import AuthProtectedRoute from "./modules/shared/protected-route/auth-protected-route";
import AdminProtectedRoute from "./modules/shared/protected-route/admin-protected-route";
import LandingProtectedRoute from "./modules/shared/protected-route/landing-protected-route";
// Layouts
import LandingPageLayout from "./modules/layouts/components/landing-page-layout/landing-page-layout";
import AuthLayout from "./modules/layouts/components/auth-layout/auth-layout";
import AdminLayout from "./modules/layouts/components/admin-layout/admin-layout";
// Auth Pages
import Login from "./modules/auth/components/login/login";
import Register from "./modules/auth/components/register/register";
import ForgotPassword from "./modules/auth/components/forgot-password/forgot-password";
import ResetPassword from "./modules/auth/components/reset-password/reset-password";
import AuthNotFound from "./modules/auth/components/auth-not-found/auth-not-found";
// Landing Pages
import HomePage from "./modules/landing-page/components/home-page/home-page";
import RoomDetails from "./modules/landing-page/components/room-details/room-details";
import AdDetails from "./modules/landing-page/components/ad-details/ad-details";
import ExplorePage from "./modules/landing-page/components/explore-page/explore-page";
import FavoritesPage from "./modules/landing-page/components/favorites-page/favorites-page";
import Payment from "./modules/landing-page/components/payment/payment";
import MyBooking from "./modules/landing-page/components/my-booking/my-booking";
import LandingNotFound from "./modules/landing-page/components/landing-not-found/landing-not-found";
// Admin Pages
import DashboardPage from "./modules/admin/components/dashboard-page/dashboard-page";
import AdminNotFound from "./modules/admin/components/admin-not-found/admin-not-found";

//toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  document.documentElement.lang = i18n.language;
  // const dispatch = useDispatch();
  // const isLogged = useSelector((state) => state.auth.isLogged);

  // useEffect(() => {
  //   const fetchFavorites = async () => {
  //     try {
  //       const response = await axios.get(ROOMS_FAVOURITES.getAllFav, BASE_HEADERS);
  //       dispatch(setFavoritesData(response.data?.data?.favoriteRooms[0]?.rooms || []));
  //     } catch (error) {
  //       console.error("Error fetching favorites:", error);
  //     }
  //   };
  
  //   if (isLogged) {
  //     fetchFavorites();
  //   }
  // }, [isLogged, dispatch]);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <LandingPageLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "home", element: <HomePage /> },
        { path: "room-details/:id", element: <RoomDetails /> },
        { path: "ad-details/:id", element: <AdDetails /> },
        { path: "explore-rooms", element: <ExplorePage /> },
        { path: "*", element: <LandingNotFound /> },
      ],
    },
    {
      path: "/",
      element: (
        <LandingProtectedRoute>
          <LandingPageLayout />
        </LandingProtectedRoute>
      ),
      children: [
        { path: "favorites", element: <FavoritesPage /> },
        { path: "payment", element: <Payment /> },
        { path: "my-booking", element: <MyBooking /> },
        { path: "*", element: <LandingNotFound /> },
      ],
    },
    {
      path: "/auth",
      element: (
        <AuthProtectedRoute>
          <AuthLayout />
        </AuthProtectedRoute>
      ),
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "forgot-pass", element: <ForgotPassword /> },
        { path: "reset-pass", element: <ResetPassword /> },
        { path: "*", element: <AuthNotFound /> },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <AdminProtectedRoute>
          <AdminLayout />
        </AdminProtectedRoute>
      ),
      children: [
        { index: true, element: <DashboardPage /> },
        { path: "home", element: <DashboardPage /> },
        { path: "*", element: <AdminNotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer />
    </>
  );
};

export default App;
