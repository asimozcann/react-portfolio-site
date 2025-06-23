const Modal = ({ message, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg max-w-sm mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="modal-title" className="text-lg font-semibold mb-4">
          Mesaj
        </h2>
        <p className="text-base">{message}</p>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-[#2B975D] text-white rounded hover:bg-[#2b975dd9]"
          aria-label="Modalı kapat"
        >
          Kapat
        </button>
      </div>
    </div>
  );
};

export default Modal;
