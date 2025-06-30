import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/tailwind.css";
import Loading from "./components/Loading";

// Lazy layouts
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));

// Lazy auth pages
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

// Lazy main pages
const Homepage = React.lazy(() => import("./pages/Homepage"));
const Herosection = React.lazy(() => import("./pages/Herosection"));
const FeatureSection = React.lazy(() => import("./pages/FeatureSection"));
const ArticleList = React.lazy(() => import("./pages/ArticelList")); // typo di file masih "Articel"
const JobList = React.lazy(() => import("./pages/JobList"));
const ReviewList = React.lazy(() => import("./pages/ReviewList"));
const TicketListSearchFilter = React.lazy(() => import("./pages/TicketListSearchFilter"));
const FasilitasList = React.lazy(() => import("./pages/FasilitasList"));
const PricingPage = React.lazy(() => import("./pages/PricingPage"));
const TeamPage = React.lazy(() => import("./pages/TeamPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const MediaPage = React.lazy(() => import("./pages/MediaPage"));
const CommentList = React.lazy(() => import("./pages/Comments"));
const TicketForm = React.lazy(() => import("./pages/TiketForm"));
const FormPembayaranFasilitas = React.lazy(() => import("./pages/FormPembayaranFasilitas"));

// Lazy components as pages
const ArticleDetail = React.lazy(() => import("./components/ArticleDetail"));
const TicketDetail = React.lazy(() => import("./components/TicketDetail"));
const FAQPage = React.lazy(() => import("./components/FAQPage"));
const ContactUs = React.lazy(() => import("./components/ContactUs"));
const JobDetail = React.lazy(() => import("./components/JobDetail"));
const FasilitasDetail = React.lazy(() => import("./components/FasilitasDetail"));

// Error pages
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Error400 = React.lazy(() => import("./pages/Error400"));
const Error401 = React.lazy(() => import("./pages/Error401"));
const Error403 = React.lazy(() => import("./pages/Error403"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Main Layout Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/fasilitas" element={<FasilitasList />} />
          <Route path="/fasilitas/:id" element={<FasilitasDetail />} />
          <Route path="/pembayaran-fasilitas/:id" element={<FormPembayaranFasilitas />} />

          <Route path="/article" element={<ArticleList />} />
          <Route path="/article/:id" element={<ArticleDetail />} />

          <Route path="/job" element={<JobList />} />
          <Route path="/jobs/:id" element={<JobDetail />} />

          <Route path="/review" element={<ReviewList />} />
          <Route path="/tiket" element={<TicketListSearchFilter />} />
          <Route path="/tiket/:id" element={<TicketDetail />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/comment" element={<CommentList />} />

          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/order" element={<TicketForm />} />

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
