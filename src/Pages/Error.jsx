import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { Suspense } from "react";
const ErrorPage = () => {
  return (
    <Suspense
      fallback={<div className="text-center text-gray-800">Yükleniyor...</div>}
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-10 "
        style={{ backgroundImage: `url('/images/error-bg.jpg')` }}
      >
        <Seo
          title="404 | Sayfa Bulunamadı | Asım Özcan"
          description="Üzgünüz, aradığınız sayfa bulunamadı. Ana sayfaya dönerek projelerime göz atabilirsiniz."
          url="https://react-portfolio-site-asimozcan.vercel.app/404"
          image="/images/social-share.png"
        />
        <div className="min-h-screen flex flex-col items-center justify-center  text-gray-800 px-4">
          <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-2">Sayfa Bulunamadı</h2>
          <p className="text-center mb-6">
            Aradığınız sayfa mevcut değil ya da kaldırılmış olabilir.
          </p>
          <Link
            to="/"
            className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </Suspense>
  );
};

export default ErrorPage;
