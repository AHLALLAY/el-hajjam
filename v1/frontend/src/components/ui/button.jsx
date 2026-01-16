
function Button({ children, type = "button", onClick, className }) {
    const defaultStyle = "bg-blue-300 text-slate-800 rounded"
    const classes = className ? className : defaultStyle;
    return (
        <button type={type} onClick={onClick} className={classes}>
            {children}
        </button>
    );
}

export default Button;