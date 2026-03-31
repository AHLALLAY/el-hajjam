import { useState } from "react";
import Button from "../../ui/button";
import fetchEndPoint from "../../../services/apiHandler";

function HairdresserCard({ data, onUpdate }) {
  const [error, setError] = useState("");
  const handleStatusChange = async (id, status) => {
    try {
      await fetchEndPoint(`/users/hairdressers/${id}`, "PATCH", { status: status });
      onUpdate();
      setError("");
    } catch (err) {
      setError(err?.message ?? "Erreur pendant la mise à jour");
    }
  };

  if (!data || data.length === 0)
    return (
      <p className="text-slate-400 text-center py-8 rounded-xl bg-white/20 border border-white/20">
        Vous n'avez pas encore de coiffeurs
      </p>
    );
  return (
    <div className="flex flex-col space-y-8">
      {error && <span className="text-red-400">{error}</span>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((hairdresser) => (
          <div
            key={hairdresser._id}
            className="rounded-xl border border-white/20 bg-white/20 p-5 shadow-lg"
          >
            <div className="flex justify-between items-start gap-2 mb-4">
              <h2 className="text-lg font-semibold text-yellow-600 truncate">
                {hairdresser.firstName} {hairdresser.lastName}
              </h2>
              <span
                className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  hairdresser.status === "actif"
                    ? "bg-green-600/20 text-green-400"
                    : "bg-amber-600/20 text-amber-400"
                }`}
              >
                {hairdresser.status}
              </span>
            </div>
            <div className="space-y-1.5 text-sm text-slate-300 mb-4">
              <p className="flex items-center gap-2 truncate">
                {hairdresser.email}
              </p>
              <p className="flex items-center gap-2">
                {hairdresser.phone || "—"}
              </p>
              <p className="flex items-center gap-2 truncate">
                {hairdresser.address || "—"}
              </p>
            </div>
            <div className="pt-2 border-t border-slate-600">
              {hairdresser.status === "actif" && (
                <Button
                  className="bg-amber-600 hover:bg-amber-700 text-white w-full"
                  onClick={() => {
                    handleStatusChange(hairdresser._id, "suspendu");
                  }}
                >
                  Suspendre
                </Button>
              )}
              {hairdresser.status === "suspendu" && (
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white w-full"
                  onClick={() => {
                    handleStatusChange(hairdresser._id, "actif");
                  }}
                >
                  Activer
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HairdresserCard;
