function OperationTable({ data }) {

  if (!data || data.length === 0) {
    return (
      <p className="text-slate-300 text-center py-8">
        Aucune opération pour le moment.
      </p>
    );
  }
  return (
    <table className="w-full min-w-[32rem] text-left text-sm">
      <thead>
        <tr className="border-b border-yellow-700/50 bg-yellow-900/30">
          <th className="px-4 py-3 font-semibold text-yellow-200">date</th>
          <th className="px-4 py-3 font-semibold text-yellow-200">Service</th>
          <th className="px-4 py-3 font-semibold text-yellow-200">
            Montant reçu
          </th>
          <th className="px-4 py-3 font-semibold text-yellow-200">Coiffeur</th>
          <th className="px-4 py-3 font-semibold text-yellow-200">prix</th>
          <th className="px-4 py-3 font-semibold text-yellow-200">Pourboire</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-600">
        {data.map((operation) => (
          <tr
            key={operation?._id ?? operation?.id}
            className="bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
          >
            <td className="px-4 py-3 text-slate-200">
              {new Date(operation.createdAt).toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </td>
            <td className="px-4 py-3 text-slate-200">
              {operation.service.name}
            </td>
            <td className={`px-4 py-3 ${operation.amountReceived < operation.price ? "text-red-400" : "text-slate-200"}`}>
              {operation.amountReceived}
            </td>
            <td className="px-4 py-3 text-slate-200">
              {operation.hairdresser.firstName}{" "}
              {operation.hairdresser.lastName}
            </td>
            <td className="px-4 py-3 text-slate-200">{operation.price}</td>
            <td className="px-4 py-3 text-slate-200">{operation.tip}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default OperationTable;
