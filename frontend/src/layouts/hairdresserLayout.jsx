import AsideBar from "../components/ui/asideBar";
import { Outlet } from "react-router-dom";

function HairdresserLayout() {
    return (
        <div className="flex min-h-screen">
            <AsideBar role={'coiffeur'} />
            <main className="flex-1 bg-slate-800 min-h-screen p-4">
                <Outlet/>
            </main>
        </div>
    );
}

export default HairdresserLayout;
