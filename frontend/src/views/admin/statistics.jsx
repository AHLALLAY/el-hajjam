import StatsCard from '../../components/cards/statsCard';

function Statistics() {
    return (
        <div className='flex flex-col space-y-4'>
            <h1 className="text-yellow-600 font-semibold text-3xl p-4 w-full">Statistics</h1>
            <div className="flex justify-between">
                <StatsCard
                    title={"operations"}
                    data={{ 'key': 0 }}
                />
            </div>
        </div>
    );
}

export default Statistics;