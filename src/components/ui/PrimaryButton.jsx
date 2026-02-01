function PrimaryButton({ children, className = "", ...props }) {
  return (
    <button
      className={`
        bg-primary
        text-white
        px-6 py-3
        rounded-lg
        font-semibold
        shadow-lg
        hover:bg-green-600
        hover:scale-105
        transition
        duration-300
        transform
        focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
