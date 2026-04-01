import { useState } from "react";
import Layout from "../../layouts/layout";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";
import fetchEndPoint from "../../services/apiHandler";
import HolidayTable from "../../components/tables/holidayTable";
import { useEffect } from "react";

function Holiday() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [myHoliday, setMyHoliday] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const addHoliday = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await fetchEndPoint("/holidays", "POST", { startDate, endDate });
      setStartDate("");
      setEndDate("");
      setShowModal(false);
      loadMyHoliday();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadMyHoliday = async () => {
    try {
      setLoading(true);
      const hairdresserId = JSON.parse(localStorage.getItem("user"));
      const holidays = await fetchEndPoint(`/holidays/${hairdresserId.id}`, "GET");
      setMyHoliday(holidays.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMyHoliday();
  }, [])

  return (
    <Layout role="coiffeur">
      <div className="p-4 flex justify-between items-center mt-6 mb-10">
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
        <HolidayTable data={myHoliday} role={"coiffeur"} />
      </div>
      <div
        className={
          showModal
            ? "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            : "hidden"
        }
      >
        <form
          onSubmit={addHoliday}
          className="border border-white/20 p-6 rounded-xl bg-white/20 shadow-2xl shadow-black/20 max-w-lg w-full"
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

export default Holiday;
