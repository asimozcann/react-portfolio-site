import { useContext } from "react";
import { ContactLinkContext } from "../context/ContactLinkContext";
import Wrapper from "../UI/Wrapper";

const Footer = () => {
  const contactLinks = useContext(ContactLinkContext);
  return (
    <footer className="bg-[#E6E6E4]  opacity-75 py-2">
      <Wrapper className="relative flex xl:flex-row flex-col justify-between items-center gap-1 ">
        <div>
          <h1 className=" text-center text-lg text-[#2B975D]">
            Asım Özcan{" "}
            <span className="font-sans text-black text-base">
              Tarafından Tasarlandı ve Geliştirildi
            </span>
          </h1>
        </div>
        <div>
          <h1 className=" text-[#2B975D]">
            <span className="font-sans text-black ">
              Copyright © {new Date().getFullYear()}
            </span>{" "}
            AÖ
          </h1>
        </div>
        <div></div>
        <div>
          <ul className="flex items-center justify-center gap-10">
            {contactLinks.map((item, id) => (
              <li key={id} className="">
                <a
                  className=" flex items-center justify-center  rounded-full "
                  href={item.link}
                  target="_blank"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
