const InputField = ({
  label,
  value,
  onChange,
  type = "text",
  error,
  required = false,
  placeholder = "",
}) => {
  const isTextarea = type === "textarea";
  const Component = isTextarea ? "textarea" : "input";
  
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-300">
        {label}
        {required && <span className="text-blue-400 ml-1">*</span>}
      </label>
      
      <Component
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full px-4 py-3 bg-gray-900 border rounded-xl outline-none transition-all duration-200
          ${error ? 'border-red-500' : 'border-gray-700 focus:border-blue-500'}
          ${isTextarea ? 'h-24 resize-none' : ''}
          text-white placeholder-gray-500
          focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20
        `}
      />
      
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default InputField;