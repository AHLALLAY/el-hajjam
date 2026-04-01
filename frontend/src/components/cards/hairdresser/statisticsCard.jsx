import { useState, useEffect } from "react";
import fetchEndPoint from "../../../services/apiHandler";

function StatisticsCard() {
  const [operationCount, setOperationCount] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loadDashboardStatistics = async () => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (!currentUser?.id) return;
    try {
      setLoading(true);
      const res = await fetchEndPoint(`/operations/${currentUser.id}`);
      setOperationCount(res.data?.length ?? 0);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardStatistics();
  }, []);

  const cardBase =
    "rounded-xl border border-yellow-600/40 bg-white/20 p-5 shadow-md transition-shadow hover:shadow-lg hover:border-yellow-500/50";

  return (
    <>
      {/* total des opérations */}
      <div className={cardBase}>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-yellow-400">
          Opérations
        </h2>
        {loading ? (
          <p className="mt-2 text-2xl font-bold text-yellow-300">...</p>
        ) : error ? (
          <p className="mt-2 text-sm text-red-400">{error}</p>
        ) : (
          <p className="mt-2 text-3xl font-bold text-yellow-300">
            {operationCount}
          </p>
        )}
      </div>
    </>
  );
}

export default StatisticsCard;
