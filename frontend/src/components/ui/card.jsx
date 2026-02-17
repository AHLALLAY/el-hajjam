function Card({ title, className='' }) {
    const defaultStyle = `border-2 border-yellow-700 px-2 py-4 ${className}`;
    return (
        <div className={defaultStyle}>
            <h2 className="flex justify-center items-center">{title}</h2>
            <div className="flex justify-between">
                <p>test</p>
                <p>test</p>
            </div>
        </div>
    );
}

export default Card;