

export const InputForm = ({
  type = "text",
  placeholder = "placeholder",
  value = "",
  onChange = null,
  onKeyPress = null,
  label = null,
  min = null,
  max = null,
  step = null,
}) => {
  const isLabel = label !== null;
  return (
    <>
      {!isLabel && (
        <div className="mx-2">
          <input
            type={type}
            min={min}
            max={max}
            step={step}
            placeholder={placeholder}
            className="w-full mx-2 block rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-900"
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
        </div>
      )}
      {isLabel && (
        <div className="mx-2">
          <label className="font-extrabold">{label}</label>
          <input
            type={type}
            min={min}
            max={max}
            step={step}
            placeholder={placeholder}
            className="w-full block rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-900"
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
        </div>
      )}
    </>
  );
};
