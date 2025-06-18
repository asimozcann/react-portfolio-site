const Wrapper = ({ children, className }) => {
  return (
    <div className={`w-full max-w-[1200px]  mx-auto md:p-2 p-4 ${className} `}>
      {children}
    </div>
  );
};

export default Wrapper;
