import { useState, useEffect } from "react";
import fetchEndPoint from "../../../services/apiHandler";

function StatisticsCard() {
  const [hairdresserCount, setHairdresserCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);
  const [hairdressersError, setHairdressersError] = useState("");
  const [servicesError, setServicesError] = useState("");
  const [loading, setLoading] = useState(false);

  const loadHairdressers = async () => {
    try {
      setHairdressersError("");
      setLoading(true);
      const hairdressersRes = await fetchEndPoint("/users/hairdressers");
      setHairdresserCount(hairdressersRes.data?.length ?? 0);
    } catch (err) {
      setHairdressersError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const loadServices = async () => {
    try {
      setServicesError("");
      setLoading(true);
      const servicesRes = await fetchEndPoint("/services");
      setServiceCount(servicesRes.data?.length ?? 0);
    } catch (err) {
      setServicesError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHairdressers();
    loadServices();
  }, []);

  const cardBase =
    "rounded-xl border border-yellow-600/40 bg-white/20 p-5 shadow-md transition-shadow hover:shadow-lg hover:border-yellow-500/50";

  return (
    <>
      {/* total des coiffeurs */}
      <div className={cardBase}>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-yellow-400">
          Coiffeurs
        </h2>
        {loading ? (
          <p className="mt-2 text-2xl font-bold text-yellow-300">...</p>
        ) : hairdressersError ? (
          <p className="mt-2 text-sm text-red-400">{hairdressersError}</p>
        ) : (
          <p className="mt-2 text-3xl font-bold text-yellow-300">
            {hairdresserCount}
          </p>
        )}
      </div>

      {/* total des services */}
      <div className={cardBase}>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-yellow-400">
          Services
        </h2>
        {loading ? (
          <p className="mt-2 text-2xl font-bold text-yellow-300">...</p>
        ) : servicesError ? (
          <p className="mt-2 text-sm text-red-400">{servicesError}</p>
        ) : (
          <p className="mt-2 text-3xl font-bold text-yellow-300">
            {serviceCount}
          </p>
        )}
      </div>
    </>
  );
}

export default StatisticsCard;
