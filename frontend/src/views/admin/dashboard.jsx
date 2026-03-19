import Layout from "../../layouts/layout";
import StatisticsCard from "../../components/cards/admin/statisticsCard";
import OperationsSummaryTable from "../../components/tables/operationsSummaryTable";

function Dashboard() {
  return (
    <Layout role="admin">
      <div className="p-4 flex justify-between items-center mt-6 mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-yellow-600">
          Tableau de bord
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <StatisticsCard />
      </div>
      <div className="overflow-hidden rounded-lg border border-yellow-700/50 mt-8">
        <OperationsSummaryTable />
      </div>
    </Layout>
  );
}

export default Dashboard;
