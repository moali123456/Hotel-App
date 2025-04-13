import i18n from "i18next";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// Protected Routes
import AuthProtectedRoute from "./modules/shared/protected-route/auth-protected-route";
import AdminProtectedRoute from "./modules/shared/protected-route/admin-protected-route";
import LandingProtectedRoute from "./modules/shared/protected-route/landing-protected-route";
import PublicProtectedRoute from "./modules/shared/protected-route/public-protected-route";
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
import RoomsAdminPage from "./modules/admin/components/rooms-page/rooms-page";
import AddRoom from "./modules/admin/components/add-room/add-room";
import UpdateRoom from "./modules/admin/components/update-room/update-room";
import FacilitiesPage from "./modules/admin/components/facilities-page/facilities-page";
import AdminNotFound from "./modules/admin/components/admin-not-found/admin-not-found";

//toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  document.documentElement.lang = i18n.language;
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <PublicProtectedRoute>
          <LandingPageLayout />
        </PublicProtectedRoute>
      ),
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
        { path: "admin-rooms", element: <RoomsAdminPage /> },
        { path: "add-room", element: <AddRoom /> },
        { path: "update-room/:id", element: <UpdateRoom /> },
        { path: "facilities", element: <FacilitiesPage /> },
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
