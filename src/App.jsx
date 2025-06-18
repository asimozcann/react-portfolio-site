import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./Pages/Root";
import HomePage from "./Pages/Home";
import ProjectsPage from "./Pages/Projects";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import { ContactLinkProvider } from "./components/context/ContactLinkContext";
import ScrollToTop from "./components/UI/ScrollToTop";
import ErrorPage from "./Pages/Error";
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
