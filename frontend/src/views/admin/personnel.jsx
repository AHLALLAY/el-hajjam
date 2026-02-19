import StuffCard from '../../components/cards/stuffCard';


function Stuff() {
    return (
        <div className='flex flex-col space-y-4'>
            <h1 className="text-yellow-600 font-semibold text-3xl p-4 w-full">Personnel</h1>
            <div className="flex justify-between">
                <StuffCard
                    title={"operations"}
                    data={{ 'key': 0 }}
                />
            </div>
        </div>
    );
}

export default Stuff;