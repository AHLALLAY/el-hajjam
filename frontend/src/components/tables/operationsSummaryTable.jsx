import { useEffect, useState } from "react";
import fetchEndPoint from "../../services/apiHandler";

function OperationsSummaryTable() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [operationsSummary, setOperationsSummary] = useState([]);

  const loadOperationsSummary = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetchEndPoint("/operations/summary", "GET");
      setOperationsSummary(res.data ?? []);
    } catch (err) {
      setError(err?.message ?? String(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOperationsSummary();
  }, []);

  if (loading) {
    return (
      <div className="py-8 text-center text-slate-300">Chargement...</div>
    );
  }

  if (error) {
    return (
      <p className="py-4 text-sm text-red-400" role="alert">
        {error}
      </p>
    );
  }

  if (!operationsSummary.length) {
    return (
      <p className="text-slate-300 text-center py-8">
        Aucun résumé pour le moment.
      </p>
    );
  }

  return (
    <table className="w-full min-w-[32rem] text-left text-sm">
      <thead>
        <tr className="border-b border-yellow-700/50 bg-yellow-900/30">
          <th className="px-4 py-3 font-semibold text-yellow-200">Coiffeur</th>
          <th className="px-4 py-3 font-semibold text-yellow-200">
            Total d'opérations
          </th>
          <th className="px-4 py-3 font-semibold text-yellow-200">
            Total montant reçu
          </th>
          <th className="px-4 py-3 font-semibold text-yellow-200">
            Total pourboire
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-slate-600">
        {operationsSummary.map((item) => (
          <tr
            key={item?.id ?? `${item?.hairdresser?.firstName}-${item?.hairdresser?.lastName}`}
            className="bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
          >
            <td className="px-4 py-3 text-slate-200">
              {item?.hairdresser?.firstName} {item?.hairdresser?.lastName}
            </td>
            <td className="px-4 py-3 text-slate-200">{item?.totalOperations}</td>
            <td className="px-4 py-3 text-slate-200">{item?.totalAmountReceived}</td>
            <td className="px-4 py-3 text-slate-200">{item?.totalTip}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OperationsSummaryTable;
