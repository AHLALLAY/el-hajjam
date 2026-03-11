function OperationCard({ data, className = '' }) {
    const list = Array.isArray(data) ? data : [];
    return (
        <div className={className}>
            <table className="w-full border border-yellow-600/60 rounded-lg overflow-hidden">
                <thead className="bg-slate-700/80 text-yellow-500">
                    <tr>
                        <th className="text-left p-3">Service</th>
                        <th className="text-left p-3">Coiffeur</th>
                        <th className="text-left p-3">Montant</th>
                    </tr>
                </thead>
                <tbody className="text-slate-300">
                    {list.length === 0 ? (
                        <tr>
                            <td colSpan={3} className="p-4 text-center">Aucune opération</td>
                        </tr>
                    ) : (
                        list.map((operation, index) => (
                            <tr key={operation.id ?? operation._id ?? index} className="border-t border-yellow-600/40">
                                <td className="p-3">{operation.serviceId ?? '-'}</td>
                                <td className="p-3">{operation.hairdresserId ?? '-'}</td>
                                <td className="p-3">{operation.amountReceived ?? '-'}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default OperationCard;
