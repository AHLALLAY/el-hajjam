function Input({ type = "text", label, id, className="", onChange, value, placeholder }) {
    return label ?
        <div className="space-y-2">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} className={className} onChange={onChange} value={value} placeholder={placeholder} />
        </div> :
        <input type={type} id={id} className={className} onChange={onChange} value={value} placeholder={placeholder} />;
}

export default Input;