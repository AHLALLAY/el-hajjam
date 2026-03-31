import Layout from "../../layouts/layout";
import StatisticsCard from "../../components/cards/admin/statisticsCard";
import OperationsSummaryTable from "../../components/tables/operationsSummaryTable";

function Dashboard() {
  return (
    <Layout role="admin">
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
