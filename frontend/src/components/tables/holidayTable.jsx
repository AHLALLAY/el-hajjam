import { useState } from "react";
import fetchEndPoint from "../../services/apiHandler";
import Button from "../ui/button";

function HolidayTable({ data, onHolidayUpdated, role = "admin" }) {
    const [error, setError] = useState("");

    const handleAcceptHoliday = async (id) => {
        try {
            setError("");
            await fetchEndPoint(`/holidays/${id}`, "PATCH", { status: "validée" });
            onHolidayUpdated?.();
        } catch (err) {
            setError(err?.message ?? "Erreur pendant l'acceptation du congé");
        }
    };
    const handleRejectHoliday = async (id) => {
        try {
            setError("");
            await fetchEndPoint(`/holidays/${id}`, "PATCH", { status: "refusée" });
            onHolidayUpdated?.();
        } catch (err) {
            setError(err?.message ?? "Erreur pendant le refus du congé");
        }
    };

    if (!data || data.length === 0) {
        return (
            <p className="text-slate-300 text-center py-8">
                Aucun congé pour le moment.
            </p>
        );
    }

    const isAdmin = role === "admin";

    return (
        <div className="w-full">
            {error && (
                <p className="text-red-600 bg-red-50 border border-red-200 rounded-lg p-3 mb-4" role="alert">
                    {error}
                </p>
            )}
            <table className="w-full min-w-[32rem] text-left text-sm">
                <thead>
                    <tr className="border-b border-yellow-700/50 bg-yellow-900/30">
                        {isAdmin && (
                            <th className="px-4 py-3 font-semibold text-yellow-200">Coiffeur</th>
                        )}
                        <th className="px-4 py-3 font-semibold text-yellow-200">Du</th>
                        <th className="px-4 py-3 font-semibold text-yellow-200">Jusqu&apos;au</th>
                        <th className="px-4 py-3 font-semibold text-yellow-200">Statut</th>
                        {isAdmin && (
                            <th className="px-4 py-3 font-semibold text-yellow-200">Actions</th>
                        )}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-600">
                    {data.map((holiday) => (
                        <tr
                            key={holiday?._id ?? holiday?.id}
                            className="bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
                        >
                            {isAdmin && (
                                <td className="px-4 py-3 text-slate-200">
                                    {holiday.hairdresserId?.firstName}{" "}
                                    {holiday.hairdresserId?.lastName}
                                </td>
                            )}
                            <td className="px-4 py-3 text-slate-200">
                                {new Date(holiday.startDate).toLocaleDateString("fr-FR", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                })}
                            </td>
                            <td className="px-4 py-3 text-slate-200">
                                {new Date(holiday.endDate).toLocaleDateString("fr-FR", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                })}
                            </td>
                            <td>
                                <span
                                    className={`px-2 py-1 text-slate-200 rounded-lg ${holiday.status === "en attente"
                                        ? "bg-yellow-400/60"
                                        : holiday.status === "refusée"
                                            ? "bg-red-400/60"
                                            : "bg-green-400/60"
                                        }`}
                                >
                                    {holiday.status}
                                </span>
                            </td>
                            {isAdmin && (
                                holiday.status === "en attente" ? (
                                    <td className="px-4 py-3 text-slate-200">
                                        <div className="flex flex-wrap gap-2">
                                            <Button
                                                type="button"
                                                className="bg-green-600 hover:bg-green-700 text-white"
                                                onClick={() => handleAcceptHoliday(holiday._id)}
                                            >
                                                Accepter
                                            </Button>
                                            <Button
                                                type="button"
                                                className="bg-red-600 hover:bg-red-700 text-white"
                                                onClick={() => handleRejectHoliday(holiday._id)}
                                            >
                                                Refuser
                                            </Button>
                                        </div>
                                    </td>
                                ) : (
                                    <td className="px-4 py-3 text-slate-400">—</td>
                                )
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default HolidayTable;
