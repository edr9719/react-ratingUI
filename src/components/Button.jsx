function SubmitButton({ children, className, disabled, onClick }) {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      autoFocus
    >
      {children}
    </button>
  );
}

export default SubmitButton;
