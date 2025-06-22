import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import RootLayout from "./Pages/Root";
const HomePage = React.lazy(() => import("./Pages/Home"));
const ProjectsPage = React.lazy(() => import("./Pages/Projects"));
const AboutPage = React.lazy(() => import("./Pages/About"));
const ContactPage = React.lazy(() => import("./Pages/Contact"));
import { ContactLinkProvider } from "./components/context/ContactLinkContext";
import ScrollToTop from "./components/UI/ScrollToTop";
const ErrorPage = React.lazy(() => import("./Pages/Error"));
import { ThemeContextProvider } from "./components/context/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <ContactLinkProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </ContactLinkProvider>
    </ThemeContextProvider>
  );
}

export default App;
