const Button = ({ label, onClick, type = "primary" }) => {
    return (
      <button
        className={`w-full px-6 py-2 rounded-lg ${
          type === "primary" ? "bg-blue-500 text-white" : "border border-gray-500 text-gray-300"
        } hover:opacity-80 transition`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  };
  
  export default Button;
  