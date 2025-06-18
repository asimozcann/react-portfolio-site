import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center z-10 "
      style={{ backgroundImage: `url('/images/error-bg.jpg')` }}
    >
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
  );
};

export default ErrorPage;
