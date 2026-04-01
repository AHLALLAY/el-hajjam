import Layout from "../../layouts/layout";
import StatisticsCard from "../../components/cards/hairdresser/statisticsCard";
function HairdresserDashboard() {
  return (
    <Layout role="coiffeur">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <StatisticsCard />
      </div>
    </Layout>
  );
}

export default HairdresserDashboard;
