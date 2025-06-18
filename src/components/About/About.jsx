import Wrapper from "../UI/Wrapper";

const About = () => {
  const skills = [
    {
      title: "Tasarım",
      width: "97",
    },
    {
      title: "HTML5",
      width: "98",
    },
    {
      title: "CSS3",
      width: "98",
    },
    {
      title: "JS",
      width: " 92",
    },
    {
      title: "React",
      width: "89",
    },
  ];
  return (
    <Wrapper className="mt-14">
      <section>
        <div className="flex md:flex-row flex-col mt-10 gap-8">
          <div>
            <h1 className="md:text-5xl text-4xl text-center  mb-5">
              <span className=" text-[#2B975D]">Ben</span> Kimim
            </h1>
            <p className="md:text-lg text-base leading-relaxed md:pt-10 md:text-justify text-center ">
              29 yaşında, Bilgisayar Programcılığı mezunu ve Front-End
              geliştirici adayıyım. <br /> HTML ve CSS’de sağlam bir altyapıya
              sahibim, JavaScript bilgim ise iyi düzeyde. <br /> Şu anda React
              öğreniyorum ve bu alandaki yetkinliğimi her gün proje geliştirerek
              ve güncel kaynakları takip ederek artırıyorum. <br /> Kod yazmayı,
              kullanıcı dostu arayüzler tasarlamayı ve deneyimi iyileştirmeyi
              tutkuyla yapıyorum. Projelerimi geliştirirken ihtiyaç duyduğumda GitHub Copilot, ChatGPT gibi yapay zeka destekli araçlardan faydalanıyorum. Bu sayede araştırma sürecini hızlandırıyor, daha verimli ve temiz kodlar yazmaya odaklanıyorum.
            </p>
            <ul className="flex my-10 text-lg leading-10 flex-col gap-5">
              {skills.map((skill, id) => {
                return (
                  <li key={id}>
                    <span>{skill.title}</span>

                    <div className="h-[3.5px] relative bg-gray-600 rounded-lg">
                      <div
                        style={{ width: `${skill.width}%` }}
                        className={`relative bg-[#2B975D] h-[3.5px]  rounded-lg after:top-[-50%] after:absolute after:h-[7px] after:w-[10px] after:left-[100%] after:bg-[#2B975D]`}
                      ></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <img
              className="w-full max-w-[1800px]"
              src="/images/about.jpg"
              alt=""
            />
          </div>
        </div>
        <h1 className="md:text-5xl text-4xl text-center text-[#2B975D] my-16">
          Servislerim
        </h1>
        <div className="grid md:grid-cols-2 justify-between items-center gap-7 leading-relaxed">
          <div>
            <h1 className="md:text-3xl text-2xl text-[#2B975D]">
              Web Sitesi Tasarımı ve Geliştirme
            </h1>
            <p className=" md:text-lg text-base ">
              Modern, hızlı ve mobil uyumlu web siteleri tasarlayıp
              geliştiriyorum. HTML, CSS, JavaScript ve React ile kullanıcı dostu
              arayüzler oluşturuyorum.
            </p>
          </div>
          <div>
            <h1 className="md:text-3xl text-2xl text-[#2B975D]">
              Responsive (Mobil Uyumlu) Tasarım
            </h1>
            <p className=" md:text-lg text-base ">
              Tüm cihazlarda sorunsuz çalışan, estetik ve kullanıcı deneyimi
              odaklı tasarımlar yapıyorum. Mobil öncelikli yaklaşımla her
              çözünürlüğe uygun arayüz geliştiriyorum.
            </p>
          </div>
          <div>
            <h1 className="md:text-3xl text-2xl text-[#2B975D]">
              React ile SPA (Tek Sayfa Uygulama) Geliştirme
            </h1>
            <p className=" md:text-lg text-base ">
              React kullanarak hızlı, dinamik ve yeniden kullanılabilir
              bileşenlerle web uygulamaları geliştiriyorum.
            </p>
          </div>
          <div>
            <h1 className="md:text-3xl text-2xl text-[#2B975D]">
              API Entegrasyonu
            </h1>
            <p className=" md:text-lg text-base ">
              REST API’lerle veri bağlantıları kurarak, dinamik ve gerçek
              zamanlı içerikler sağlayan projeler geliştiriyorum.
            </p>
          </div>
          <div>
            <h1 className="md:text-3xl text-2xl text-[#2B975D]">
              UI/UX İyileştirme
            </h1>
            <p className=" md:text-lg text-base ">
              Mevcut web sitelerinizin kullanıcı arayüzlerini modernleştiriyor
              ve kullanıcı deneyimini geliştirecek düzenlemeler yapıyorum.
            </p>
          </div>
          <div>
            <h1 className="md:text-3xl text-2xl text-[#2B975D]">
              Performans Optimizasyonu
            </h1>
            <p className=" md:text-lg text-base ">
              Web sitelerinizin hızını artırmak, SEO uyumluluğunu güçlendirmek
              ve kullanıcı deneyimini iyileştirmek için optimizasyon çalışmaları
              yapıyorum.
            </p>
          </div>
        </div>
        <div className="md:text-center my-10">
          <h1 className="md:text-3xl text-2xl text-[#2B975D]">
            Freelance Proje Desteği
          </h1>
          <p className="md:text-balance   md:text-lg text-base md:mx-auto md:w-[50%]">
            İhtiyacınıza özel Front-End geliştirme desteği sağlıyorum. Bireysel
            veya kurumsal projelere uzaktan destek verebilirim.
          </p>
        </div>
      </section>
    </Wrapper>
  );
};

export default About;
