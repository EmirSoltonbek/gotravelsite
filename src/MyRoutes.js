import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import TripListPage from "./pages/TripListPage";
import EditProductPage from "./pages/EditProductPage";
import TripDetailsPage from "./pages/TripDetailsPage";
import CartPage from "./pages/CartPage";
import CreditCard from "./components/CreditCard/CreditCard";
import PaymentCheck from "./components/PaymentCheck/PaymentCheck";
import AboutUsPage from "./pages/AboutUsPage";
import ContactsPage from "./pages/ContactsPage";
import Like from "./components/like/Like";

const MyRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/add", element: <AddProductPage />, id: 2 },
    { link: "/card", element: <TripListPage />, id: 3 },
    { link: "*", element: <NotFoundPage />, id: 4 },
    { link: "/edit/:id", element: <EditProductPage />, id: 5 },
    { link: "/details/:id", element: <TripDetailsPage />, id: 6 },
    { link: "/cart", element: <CartPage />, id: 7 },
    { link: "/creditCard", element: <CreditCard />, id: 8 },
    { link: "/paymentCheck", element: <PaymentCheck />, id: 9 },
    { link: "/about", element: <AboutUsPage />, id: 10 },
    { link: "/contacts", element: <ContactsPage />, id: 11 },
    { link: "/likes", element: <Like />, id: 12 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MyRoutes;
