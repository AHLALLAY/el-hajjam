function Button({ children, type = "button", onClick, className = "" }) {
    const baseStructure = "px-6 py-2 rounded-md font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
    
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