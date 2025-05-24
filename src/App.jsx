import React, { Suspense } from "react";
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";

// Lazy-loaded pages
const Herosection = React.lazy(() => import("./pages/Herosection"));
const FeatureSection = React.lazy(() => import("./pages/FeatureSection"));
const ArticleList = React.lazy(() => import("./pages/ArticelList")); // cek typo 'Articel' kalau mau benerin
const JobList = React.lazy(() => import("./pages/JobList"));
const ReviewList = React.lazy(() => import("./pages/ReviewList"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Error400 = React.lazy(() => import("./pages/Error400"));
const Error401 = React.lazy(() => import("./pages/Error401"));
const Error403 = React.lazy(() => import("./pages/Error403"));

// Lazy-loaded layouts
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

// Lazy-loaded auth pages
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
import Loading from "./components/Loading"; // pastikan path-nya benar
import ArticleDetail from "./components/ArticleDetail";
import TicketListSearchFilter from "./pages/TicketListSearchFilter";
import TicketDetail from "./components/TicketDetail";
import FAQPage from "./components/FAQPage";
import ContactUs from "./components/ContactUs";

// Opsional: Loading component

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Main layout routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Herosection />} />
          <Route path="/fasilitas" element={<FeatureSection />} />
          <Route path="/article" element={<ArticleList />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/job" element={<JobList />} />
          <Route path="/review" element={<ReviewList />} />
          <Route path="/error400" element={<Error400 />} />
          <Route path="/error401" element={<Error401 />} />
          <Route path="/error403" element={<Error403 />} />
          <Route path="/tiket" element={<TicketListSearchFilter/>} />
          <Route path="/tiket/:id" element={<TicketDetail/>} />
          <Route path="/faq" element={<FAQPage/>} />
        <Route path="/contact" element={<ContactUs/>} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Auth layout routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
