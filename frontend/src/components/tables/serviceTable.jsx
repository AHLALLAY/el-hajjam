function ServiceTable({ data }) {
  if (!data || data.length === 0) {
    return (
      <p className="text-slate-300 text-center py-8">
        Aucun service pour le moment.
      </p>
    );
  }
  return (
    <table className="w-full min-w-[32rem] text-left text-sm">
      <thead>
        <tr className="border-b border-yellow-700/50 bg-yellow-900/30">
          <th className="px-4 py-3 font-semibold text-yellow-200">date</th>
          <th className="px-4 py-3 font-semibold text-yellow-200">Service</th>
          <th className="px-4 py-3 font-semibold text-yellow-200">prix</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-600">
        {data.map((service) => (
          <tr
            key={service?._id ?? service?.id}
            className="bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
          >
            <td className="px-4 py-3 text-slate-200">
              {new Date(service.createdAt).toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </td>
            <td className="px-4 py-3 text-slate-200">{service.name}</td>
            <td className="px-4 py-3 text-slate-200">{service.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default ServiceTable;
