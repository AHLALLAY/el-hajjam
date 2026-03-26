import { useState, useEffect } from "react";
import OperationTable from "../../components/tables/operationTable";
import Layout from "../../layouts/layout";
import fetchEndPoint from "../../services/apiHandler";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";

function Operation() {
  const [serviceId, setServiceId] = useState("");
  const [amountReceived, setAmountReceived] = useState(0);

  const [myOperations, setMyOperations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [services, setServices] = useState([]);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const loadMyOperations = async () => {
    if (!currentUser?.id) return;
    const res = await fetchEndPoint(
      `/operations/hairdresser/${currentUser.id}`,
      "GET"
    );
    setMyOperations(res.data ?? []);
  };

  const loadServices = async () => {
    try {
      setError("");
      setLoading(true);
      const res = await fetchEndPoint("/services", "GET");
      setServices(res.data ?? []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addOperation = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      await fetchEndPoint(
        `/operations/hairdresser/${currentUser.id}`,
        "POST",
        {
          serviceId,
          amountReceived,
          hairdresserId: currentUser.id,
        }
      );
      setServiceId("");
      setAmountReceived(0);
      setError("");
      setShowModal(false);
      loadMyOperations();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMyOperations();
    loadServices();
  }, []);

  return (
    <Layout role="coiffeur">
      <div className="p-4 flex justify-between items-center mt-6 mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-yellow-600">
          Opérations
        </h1>
        <Button
          className="bg-yellow-600 hover:bg-yellow-700 text-white"
          onClick={() => setShowModal(true)}
        >
          Nouvelle opération
        </Button>
      </div>
      {error && (
        <p className="mb-4 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
      <div className="overflow-hidden rounded-lg border border-yellow-700/50">
        <OperationTable data={myOperations} />
      </div>
      <div
        className={
          showModal
            ? "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            : "hidden"
        }
      >
        <form
          onSubmit={addOperation}
          className="border border-slate-600 p-6 rounded-xl bg-slate-800 shadow-2xl shadow-black/20 max-w-lg w-full"
        >
          <div className="flex justify-between items-center mb-6 px-2 text-yellow-600 font-bold">
            <h1 className="text-xl">Nouvelle Opération</h1>
            <button
              type="button"
              className="w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-yellow-700/30 text-yellow-700 transition-colors"
              onClick={() => {
                setShowModal(false);
              }}
            >
              &times;
            </button>
          </div>
          {error && (
            <span className="block text-sm text-red-400 mb-3">{error}</span>
          )}
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between gap-4">
              <div className="space-y-1.5 flex-1">
                <label
                  htmlFor="service-select"
                  className="block text-sm font-medium text-slate-300"
                >
                  Service <span className="text-red-500">*</span>
                </label>
                <select
                  id="service-select"
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all duration-200"
                >
                  <option value="">Choisir...</option>
                  {services.map((service) => (
                    <option key={service._id} value={service._id}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1 min-w-0">
                <Input
                  label={"Montant reçu"}
                  type="number"
                  id="amountReceived"
                  onChange={(e) => setAmountReceived(e.target.value)}
                  value={amountReceived}
                  placeholder="Montant reçu"
                  required={true}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-3 mt-6">
            <Button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-700 text-white w-full"
            >
              {loading ? "En cours ..." : "Ajouter"}
            </Button>
            <Button
              type="button"
              className="text-yellow-600 hover:bg-yellow-700 w-full"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Annuler
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Operation;
