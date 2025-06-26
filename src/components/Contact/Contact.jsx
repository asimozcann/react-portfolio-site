import { useState } from "react";
import Wrapper from "../UI/Wrapper";
import Modal from "../UI/Modal";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/myzjnngk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setModalMessage("Teşekkürler, mesajınız gönderildi.");
        setModalOpen(true);
        reset();
      } else {
        setModalMessage("Bir hata oluştu, lütfen tekrar deneyin.");
        setModalOpen(true);
      }
    } catch {
      setModalMessage("Bir hata oluştu, lütfen tekrar deneyin.");
      setModalOpen(true);
    }
  };

  return (
    <Wrapper className="mt-14">
      <section className="mt-10 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="md:text-5xl text-4xl text-center text-[#2B975D]">
            Bana Ulaşın
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col dark:text-black text-lg my-10 gap-10"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="" />
            <input type="text" name="_honey" style={{ display: "none" }} />

            <input
              type="text"
              {...register("name", {
                required: "İsim zorunludur",
                minLength: { value: 3, message: "En az 3 karakter olmalı" },
              })}
              placeholder="Adın"
              className={`p-2 dark:border-[#2B975D] dark:border-2 outline-none border-b-2 ${
                errors.name ? "border-red-500" : ""
              } `}
            />
            <p className="text-red-500">{errors.name?.message}</p>
            <input
              className={`p-2 dark:border-[#2B975D] dark:border-2 outline-none border-b-2 ${
                errors.email ? "border-red-500" : ""
              } `}
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email zorunludur",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Geçerli bir email adresi girin",
                },
              })}
            />
            <p className="text-red-500">{errors.email?.message}</p>
            <textarea
              className={`p-2 dark:border-[#2B975D] dark:border-2 resize-none outline-none border-b-2 ${
                errors.message ? "border-red-500" : ""
              } `}
              placeholder="Mesajın"
              rows="4"
              {...register("message", {
                required: "Mesaj zorunludur",
                minLength: { value: 10, message: "En az 10 karakter olmalı" },
              })}
            />
            <p className="text-red-500">{errors.message?.message}</p>
            <button
              className="mr-auto bg-[#2B975D] p-2 rounded-md text-white hover:bg-[#2b975dd9] transition duration-300"
              type="submit"
            >
              Gönder
            </button>
          </form>

          <div className="pt-10 md:text-left text-center">
            <h1 className="md:text-5xl text-4xl text-[#2B975D]">
              İletişim Bilgileri
            </h1>
            <ul className="mt-10 flex md:text-xl flex-col gap-5">
              <li>
                <i className="fa-solid fa-phone mr-2"></i>+90 537 216 4986
              </li>
              <li>
                <i className="fa-solid fa-envelope mr-2"></i>
                asim_ozcan@outlook.com
              </li>
              <li>
                <i className="fa-solid fa-location-dot mr-2"></i>Kayıhan Mah.
                2050 Sok. No:2 Pamukkale/Denizli
              </li>
            </ul>
          </div>
        </div>

        <div>
          <img
            className="mx-auto w-full"
            src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D"
            alt="İletişim Görseli"
            loading="lazy"
          />
        </div>
      </section>

      {modalOpen && (
        <Modal message={modalMessage} onClose={() => setModalOpen(false)} />
      )}
    </Wrapper>
  );
};

export default Contact;
