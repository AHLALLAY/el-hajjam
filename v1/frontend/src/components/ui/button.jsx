import { Children } from "react";

function Button({Children, type="button", onClick, className}){
    defaultStyle = "bg-blue-300 text-slate-800 rounded"
    if(className === "") className=defaultStyle;
    return (
        <button type={type} onClick={onClick} className={className}>
            {Children}
        </button>
    );
}

export default Button;