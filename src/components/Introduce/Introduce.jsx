import { useContext } from "react";
import Wrapper from "../UI/Wrapper";
import { ContactLinkContext } from "../context/ContactLinkContext";

const Introduce = () => {
  const contactLinks = useContext(ContactLinkContext);
  return (
    <Wrapper>
      <section className=" my-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:text-left text-center">
          <div>
            <h1 className="md:text-5xl  text-4xl text-center text-[#2B975D] ">
              Kendimi Tanıtayım
            </h1>
            <p className="md:leading-[3] leading-10 md:text-lg text-sm md:pt-10 pt-5">
              Ben bir React Front-End Developer’ım. Modern web teknolojilerine
              tutkuyla bağlıyım. <br /> Özellikle{" "}
              <b className="text-[#2B975D] ">React.js, Next.js ve Node.js</b>{" "}
              ile kullanıcı odaklı arayüzler geliştiriyorum. <br /> Yeni şeyler
              öğrenmeyi, üretmeyi ve teknolojiyi yaratıcı şekilde kullanmayı
              seviyorum.
            </p>
          </div>
          <div className="md:pr-20 md:pt-0 pt-10  ">
            <img
              className="w-full md:max-w-[180px] max-w-[150px]"
              src="/images/avatar.png"
              alt="Avatar"
              loading="lazy"
            />
          </div>
        </div>
        <div className="text-center mt-16 leading-[4]">
          <h1 className="md:text-5xl text-4xl ">Beni Bulun</h1>
          <span className="md:text-xl ">Benimle iletişime geçin</span>
          <ul className="flex items-center justify-center gap-8">
            {contactLinks.map((item,id) => (
              <li key={id} className="text-lg">
                <a
                  className="bg-white flex items-center justify-center p-3 rounded-full dark:border-[#2B975D] hover:drop-shadow-[0_0px_10px_rgba(34,197,94,0.5)] transition duration-500"
                  href={item.link}
                  target="_blank"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Wrapper>
  );
};

export default Introduce;
