import Operations from "./operations";
import HairdresserLayout from "../../layouts/hairdresserLayout";

function Dashboard() {
    return (
        <HairdresserLayout children={<Operations />}/>
    );
}

export default Dashboard;