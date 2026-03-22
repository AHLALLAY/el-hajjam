import { useState } from "react";
import Layout from "../../layouts/layout";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";

function Holeday() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Layout role="coiffeur">
      <div className="p-4 flex justify-between items-center mt-6 mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-yellow-600">
          Congés
        </h1>
        <Button
          className="bg-yellow-600 hover:bg-yellow-700 text-white"
          onClick={() => setShowModal(true)}
        >
          Nouvelle demande
        </Button>
      </div>
      {error && (
        <p className="mb-4 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
      <div className="overflow-hidden rounded-lg border border-yellow-700/50">
        <p className="text-slate-400 text-center py-8">
          Fonctionnalité à venir…
        </p>
      </div>
      <div
        className={
          showModal
            ? "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            : "hidden"
        }
      >
        <form
          className="border border-slate-600 p-6 rounded-xl bg-slate-800 shadow-2xl shadow-black/20 max-w-lg w-full"
        >
          <div className="flex justify-between items-center mb-6 px-2 text-yellow-600 font-bold">
            <h2 className="text-xl">Nouvelle demande de congé</h2>
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
            <Input
              label={"Du"}
              type="date"
              id="startDate"
              onChange={(e) => setStartDate(e.target.value)}
              value={startDate}
              placeholder="La date de début"
              required={true}
            />
            <Input
              label={"Jusqu'au"}
              type="date"
              id="endDate"
              onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
              placeholder="La date de fin"
              required={true}
            />
          </div>
          <div className="flex flex-col space-y-3 mt-6">
            <Button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-700 text-white w-full"
            >
              {loading ? "En cours…" : "Demander"}
            </Button>
            <Button
              type="button"
              className="w-full border border-yellow-600 text-yellow-600 hover:bg-yellow-700/20 bg-transparent"
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

export default Holeday;
