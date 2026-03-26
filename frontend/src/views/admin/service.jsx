import { useEffect, useState } from "react";
import fetchEndPoint from "../../services/apiHandler";
import Layout from "../../layouts/layout";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";
import ServiceTable from "../../components/tables/serviceTable";

function Service() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [services, setServices] = useState([]);

  const loadServices = async () => {
    try {
      const res = await fetchEndPoint("/services", "GET");
      setServices(res.data ?? []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const addService = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetchEndPoint("/services", "POST", { name, price });
      setName("");
      setPrice(0);
      setShowModal(false);
      loadServices();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadServices();
  }, []);

  return (
    <Layout role="admin">
      <div className="p-4 flex justify-between items-center mt-6 mb-10">
        <h1 className="text-2xl font-bold text-yellow-600">Services</h1>
        <Button
          className="bg-yellow-600 hover:bg-yellow-700 text-white"
          onClick={() => setShowModal(true)}
        >
          Nouveau service
        </Button>
      </div>
      <div className="overflow-hidden rounded-lg border border-yellow-700/50">
        <ServiceTable data={services} />
      </div>
      <div
        className={
          showModal
            ? "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            : "hidden"
        }
      >
        <form
          onSubmit={addService}
          className="border border-slate-600 p-6 rounded-xl bg-slate-800 shadow-2xl shadow-black/20 max-w-lg w-full"
        >
          <div className="flex justify-between items-center mb-6 px-2 text-yellow-600 font-bold">
            <h1 className="text-xl">Nouveau service</h1>
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
          <div className="flex justify-between gap-2">
            <Input
              label={"Service"}
              type="text"
              id="service"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="nom du service"
              required={true}
            />
            <Input
              label={"Prix"}
              type="text"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              placeholder="prix du service"
              required={true}
            />
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
              className="text-yellow-600 hover:bg-yellow-600/30 hover:text-white/60 w-full"
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

export default Service;
