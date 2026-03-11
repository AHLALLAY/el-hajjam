import Statistics from "./statistics";
import AdminLayout from "../../layouts/hairdresserLayout";

function Dashboard() {
    return (
        <AdminLayout children={<Statistics />}/>
    );
}

export default Dashboard;