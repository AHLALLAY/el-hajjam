import Statistics from "./statistics";
import AdminLayout from "../../layouts/adminLayout";

function Dashboard() {
    return (
        <AdminLayout children={<Statistics />}/>
    );
}

export default Dashboard;