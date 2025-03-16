const Button = ({ children, onClick, style, disabled, type }) => {
  return (
    <>
      <button
        type={type || "button"}
        disabled={disabled ? true : false}
        onClick={onClick}
        className={`rounded-2xl text-[18px] btn btn-primary text-center   ${style}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
