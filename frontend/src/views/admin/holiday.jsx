import { useState, useEffect } from "react";
import Layout from "../../layouts/layout";
import fetchEndPoint from "../../services/apiHandler";
import HolidayTable from "../../components/tables/holidayTable";

function Holiday() {
    const [holiday, setHoliday] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const loadHoliday = async () => {
        const res = await fetchEndPoint("/holidays", "GET");
        setHoliday(res.data ?? []);
    };

    useEffect(() => {
        loadHoliday();
    }, []);

    return (
        <Layout role="admin">
            {error && (
                <p className="text-red-600 bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                    {error}
                </p>
            )}
            <div className="overflow-hidden rounded-lg border border-yellow-700/50">
                <HolidayTable data={holiday} onHolidayUpdated={loadHoliday} role={"admin"} />
            </div>
        </Layout>
    );
}

export default Holiday;