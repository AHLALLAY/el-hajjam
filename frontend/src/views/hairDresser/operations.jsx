import { useState } from "react";
import Button from "../../components/ui/button";
import fetchEndPoint from "../../services/apiHandler";
import { useEffect } from "react";
import Input from "../../components/ui/input";
import HairdresserLayout from "../../layouts/hairdresserLayout";
import OperationTable from "../../components/tables/operationTable";

function Operations() {
  const [serviceId, setServiceId] = useState("");
  const [amountReceived, setAmountReceived] = useState("");
  const [hairdresserId, setHairdresserId] = useState("");
  const [services, setServices] = useState([]);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [modalStat, setModalStat] = useState(false);
  const [operation, setOperation] = useState([]);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const userId = user?.id ?? user?._id;

  const showModal = () => {
    setError("");
    setModalStat(true);
  };
  const hideModal = () => {
    setModalStat(false);
    operationList();
  };

  const addOperation = async (e) => {
    e.preventDefault();
    const data = { serviceId, amountReceived, hairdresserId: userId };
    setLoading(true);
    setError("");
    try {
      await fetchEndPoint(`/operation/me/${userId}`, "POST", data, token);
      setLoading(false);
      setServiceId("");
      setAmountReceived("");
      hideModal();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const operationList = async () => {
    if (!userId) {
      setError("Session invalide, veuillez vous reconnecter.");
      return;
    }
    try {
      setLoading(true);
      setError("");
      const response = await fetchEndPoint(
        `/operation/me/${userId}`,
        "GET",
        null,
        token,
      );
      console.log(response.data);
      setOperation(response.data ?? response);
      setServiceId("");
      setAmountReceived("");
      setHairdresserId("");
      setLoading(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const serviceList = async () => {
    try {
      const response = await fetchEndPoint(
        "/service/services",
        "GET",
        null,
        token,
      );
      console.log(response.data);
      setServices(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    operationList();
    serviceList();
  }, []);
  return (
    <HairdresserLayout>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between">
          <h1 className="text-yellow-600 font-semibold text-3xl p-4">
            Opérations
          </h1>
          <Button
            type="button"
            className="bg-yellow-600 hover:bg-yellow-700 text-white"
            onClick={showModal}
          >
            Nouvelle Opération
          </Button>
        </div>
        {error && <span className="text-red-400">{error}</span>}
        <div>
          {loading ? "Chargement ..." : ""}
          <OperationTable data={operation} />
        </div>
      </div>
      <div
        className={
          modalStat
            ? "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-200"
            : "hidden"
        }
        onClick={hideModal}
      >
        <form
          onSubmit={addOperation}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md rounded-2xl border border-slate-600 bg-slate-800 p-6 shadow-xl shadow-black/30"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">
              Nouvelle opération
            </h2>
            <button
              type="button"
              onClick={hideModal}
              className="rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              aria-label="Fermer"
            >
              <span className="text-xl leading-none">×</span>
            </button>
          </div>

          {error && (
            <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-400">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col">
              <label
                htmlFor="service"
                className="mb-1 text-sm font-medium text-slate-300"
              >
                Service <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                required
                className="w-full rounded-md border border-slate-600 bg-slate-700 px-3 py-2 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="">Choisi ...</option>
                {services.map((ser) => (
                  <option key={ser._id} value={ser._id}>
                    {ser.name}
                  </option>
                ))}
              </select>
            </div>
            <Input
              label="Montant"
              type="text"
              id="amountRecieved"
              onChange={(e) => setAmountReceived(e.target.value)}
              value={amountReceived}
              placeholder="Montant reçu"
              required={true}
            />
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <Button
              type="submit"
              className="w-full bg-yellow-600 text-white hover:bg-yellow-700"
            >
              {loading ? "En cours..." : "Ajouter"}
            </Button>
            <Button
              type="button"
              onClick={hideModal}
              className="w-full border border-slate-500 text-slate-300 hover:border-slate-400 hover:bg-slate-600"
            >
              Annuler
            </Button>
          </div>
        </form>
      </div>
    </HairdresserLayout>
  );
}

export default Operations;
