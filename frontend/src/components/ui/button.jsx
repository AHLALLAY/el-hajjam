function Button({ children, type = "button", onClick, className = "" }) {
    const baseStructure = "rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

    const finalClasses = `${baseStructure} ${className}`;

    return (
        <button
            type={type}
            onClick={onClick}
            className={finalClasses}
        >
            {children}
        </button>
    );
}

export default Button;