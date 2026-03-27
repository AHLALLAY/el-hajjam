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
        console.log(res.data)
        setHoliday(res.data ?? []);
    };

    useEffect(() => {
        loadHoliday();
    }, []);

    return (
        <Layout role="admin">
            <div className="p-4 flex justify-between items-center mt-6 mb-10">
                <h1 className="text-2xl font-bold text-yellow-600">Congés</h1>
            </div>
            {error && (
                <p className="text-red-600 bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                    {error}
                </p>
            )}
            <div className="overflow-hidden rounded-lg border border-yellow-700/50">
                <HolidayTable data={holiday} />
            </div>
        </Layout>
    );
}

export default Holiday;