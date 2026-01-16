function Input({ type = "text", label, id, className = "", onChange, value, placeholder, required = true,
}) {

    const inputBaseStyle = "w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all duration-200";

    const finalInputStyle = `${inputBaseStyle} ${className}`;

    const inputElement = (
        <input
            type={type}
            id={id}
            className={finalInputStyle}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            required={required}
        />
    );

    return label ? (
        <div className="space-y-1.5 w-full">
            <label htmlFor={id} className="block text-sm font-medium text-slate-300">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            {inputElement}
        </div>
    ) : (
        inputElement
    );
}

export default Input;