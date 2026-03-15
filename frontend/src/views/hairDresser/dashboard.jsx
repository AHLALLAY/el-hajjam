import { useEffect, useState } from "react";
import fetchEndPoint from "../../services/apiHandler";
import HairdresserLayout from "../../layouts/hairdresserLayout";

function Dashboard() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [operations, setOperations] = useState([]);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id ?? user?._id;

  const getOperations = async () => {
    try {
      setError("");
      setLoading(true);
      const response = await fetchEndPoint(
        `/operation/me/${userId}`,
        "GET",
        null,
        token,
      );
      console.log(response);
      setOperations(response);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getOperations();
  }, []);
  return (
    <HairdresserLayout>
      <div>
        <div className="flex w-full">
          <h1>Tableau de board</h1>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <td>Service</td>
                <td>Montant Aquis</td>
                <td>Coiffeur</td>
              </tr>
            </thead>
            <tbody>
              {/* {operations.map((op) => (
              <tr>
              <td>{}</td>
              <td>{}</td>
                <td>{}</td>
              </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </HairdresserLayout>
  );}

export default Dashboard;
