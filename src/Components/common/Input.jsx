const Input = ({
  className,
  label,
  type = "text",
  icon = null,
  placeholder,
}) => {
  return (
    <div className={`${className} relative`}>
      <label
        htmlFor="search-input"
        className={`absolute bg-white duration-300 left-4 -top-2.5 text-sm`}
      >
        {label}
      </label>
      <input
        id="search-inpu"
        className="p-4 border border-gray-400 focus:shadow-md shadow-primary rounded-md outline-none focus:border-primary w-full"
        type={type}
        placeholder={placeholder}
      />
      {icon && icon}
    </div>
  );
};

export default Input;
