import { createContext } from "react";

export const ContactLinkContext = createContext();

export const ContactLinkProvider = ({ children }) => {
  const contactLinks = [
    {
      icon: <i className="fa-brands fa-github text-[#2B975D]"></i>,
      link: "https://github.com/asimozcann",
    },
    {
      icon: <i className="fa-brands fa-linkedin-in text-[#2B975D] "></i>,
      link: "https://github.com/asimozcann",
    },
    {
      icon: <i className="fa-brands fa-instagram text-[#2B975D] "></i>,
      link: "https://www.instagram.com/_asimozcan/",
    },
  ];
  return (
    <ContactLinkContext.Provider value={contactLinks}>
      {children}
    </ContactLinkContext.Provider>
  );
};
