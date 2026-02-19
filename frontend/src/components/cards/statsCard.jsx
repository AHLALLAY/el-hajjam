function StatsCard({ title, className='', data}) {
    const defaultStyle = `border-2 border-yellow-700 p-4 bg-white/30 w-48 h-48 ${className}`;
    return (
        <div className={defaultStyle}>
            <h2 className="border-b-2 border-yellow-600 text-yellow-500 font-bold">{title}</h2>
            <div className="flex justify-between">
                <p>{data.key}</p>
                <p className="font-bold text-8xl">{data.value}</p>
            </div>
        </div>
    );
}

export default StatsCard;