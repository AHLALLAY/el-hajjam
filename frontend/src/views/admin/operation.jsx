import { useEffect, useMemo, useState } from "react";
import OperationTable from "../../components/tables/operationTable";
import Button from "../../components/ui/button";
import Layout from "../../layouts/layout";
import fetchEndPoint from "../../services/apiHandler";

function Operation() {
  const [operations, setOperations] = useState([]);
  const [hairdressers, setHairdressers] = useState([]);
  const [services, setServices] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedHairdresserId, setSelectedHairdresserId] = useState("");
  const [selectedServiceId, setSelectedServiceId] = useState("");

  const loadOperations = async () => {
    try {
      setLoading(true);
      const res = await fetchEndPoint("/operations", "GET");
      setOperations(res.data ?? []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadHairdressers = async () => {
    try {
      const res = await fetchEndPoint("/users/hairdressers");
      setHairdressers(res.data ?? []);
    } catch (err) {
      setError(err.message);
    }
  };

  const loadServices = async () => {
    try {
      const res = await fetchEndPoint("/services");
      setServices(res.data ?? []);
    } catch (err) {
      setError(err.message);
    }
  };

  const initFilter = () => {
    setSelectedHairdresserId("");
    setSelectedServiceId("");
  };

  const displayedOperations = useMemo(() => {
    return operations.filter((op) => {
      const matchHairdresser =
        !selectedHairdresserId || op.hairdresserId === selectedHairdresserId;

      const matchService =
        !selectedServiceId || op.serviceId === selectedServiceId;

      return matchHairdresser && matchService;
    });
  }, [operations, selectedHairdresserId, selectedServiceId]);

  useEffect(() => {
    loadOperations();
    loadHairdressers();
    loadServices();
  }, []);
  return (
    <Layout role="admin">
      <div className="p-4 flex justify-start mt-6 mb-6">
        <h1 className="text-2xl font-bold text-yellow-600">Opérations</h1>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {/* filter */}
      <div className="flex justify-between w-full">
        <div className="flex space-x-2">
          <div className="flex gap-2 items-center ml-2 mb-6 max-w-xs">
            <label className="block text-sm font-medium text-slate-300">
              Coiffeur
            </label>
            <select
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all duration-200"
              value={selectedHairdresserId}
              onChange={(e) => setSelectedHairdresserId(e.target.value)}
            >
              <option value="">Tous</option>
              {hairdressers.map((h) => (
                <option key={h._id} value={h._id}>
                  {h.firstName} {h.lastName}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-2 items-center ml-2 mb-6 max-w-xs">
            <label className="block text-sm font-medium text-slate-300">
              Service
            </label>
            <select
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all duration-200"
              value={selectedServiceId}
              onChange={(e) => setSelectedServiceId(e.target.value)}
            >
              <option value="">Tous</option>
              {services.map((s) => (
                <option key={s._id} value={s._id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Button
          className="bg-yellow-600 hover:bg-yellow-700 text-white h-12"
          onClick={initFilter}
        >
          Initialiser
        </Button>
      </div>
      {/* tableau de données */}
      <div className="overflow-hidden rounded-lg border border-yellow-700/50">
        <OperationTable data={displayedOperations} />
      </div>
    </Layout>
  );
}

export default Operation;
