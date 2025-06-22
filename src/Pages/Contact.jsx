import { Fragment, Suspense } from "react";
import Contact from "../components/Contact/Contact";
import Seo from "../components/Seo";
const ContactPage = () => {
  return (
    <Fragment>
      <Seo
        title="İletişim | Asım Özcan"
        description="Benimle iletişime geçmek için formu doldurabilir veya doğrudan e-posta/telefon yoluyla ulaşabilirsiniz."
        url="https://react-portfolio-site-asimozcan.vercel.app/contact"
        image="/images/social-share.png"
      />
      <Suspense fallback={<div>Yükleniyor...</div>}>
        <Contact />
      </Suspense>
    </Fragment>
  );
};

export default ContactPage;
