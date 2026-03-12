import { useState } from "react";
import Button from "../../components/ui/button";
import OperationCard from "../../components/cards/operationCard";
import fetchEndPoint from "../../services/apiHandler";
import { useEffect } from "react";
import Input from "../../components/ui/input";
import HairdresserLayout from "../../layouts/hairdresserLayout";

function Operations() {
    const [serviceId, setServiceId] = useState('');
    const [amountReceived, setAmountReceived] = useState('');
    const [hairdresserId, setHairdresserId] = useState('');


    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const [modalStat, setModalStat] = useState(false);
    const [operation, setOperation] = useState([]);
    
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem("user"));
    
    const showModal = () => {
        setError('');
        setModalStat(true);
    }
    const hideModal = () => {
        setModalStat(false);
        operationList();
    }

    const addOperation = async (e) => {
        e.preventDefault();
        const data = { serviceId, amountReceived, hairdresserId:user.id };
        setLoading(true);
        setError('');
        try {
            await fetchEndPoint('/operation/operation', 'POST', data, token);
            setLoading(false);
            setServiceId('');
            setAmountReceived('');
            hideModal();
        } catch (err) {
            setError(err.message);
        }
        finally {
            setLoading(false);
        }
    }

    const operationList = async () => {
        try {
            setLoading(true);
            const response = await fetchEndPoint(`/operation/me/${user.id}`, 'GET', null, token);
            setOperation(response.data);
            setServiceId('');
            setAmountReceived('');
            setHairdresserId('');
            setLoading(false);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        operationList();
    }, []);
    return (
        <HairdresserLayout>
            <div className='flex flex-col space-y-4'>
                <div className='flex justify-between'>
                    <h1 className="text-yellow-600 font-semibold text-3xl p-4">Opérations</h1>
                    <Button type="button" className="bg-yellow-600 hover:bg-yellow-700 text-white" onClick={showModal}>
                        Nouvelle Opération
                    </Button>
                </div>
                {error && <span className="text-red-400">{error}</span>}
                <div>
                    {loading ? "Chargement ..." : ""}
                    <OperationCard data={operation} />
                </div>
            </div>
            <div className={modalStat ? 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50' : 'hidden'}>
                {error && <span className='text-red-400'>{error}</span>}
                <form onSubmit={addOperation} className='border border-yellow-600 p-4 rounded-lg bg-slate-700/40'>
                    <div className='flex justify-between gap-2'>
                        <Input
                            label={"Service"}
                            type="text"
                            id="serviceId"
                            onChange={(e) => setServiceId(e.target.value)}
                            value={serviceId}
                            placeholder="votre nom"
                            required={true}
                        />
                        <Input
                            label={"Montant"}
                            type="text"
                            id="amountRecieved"
                            onChange={(e) => setAmountReceived(e.target.value)}
                            value={amountReceived}
                            placeholder="votre prénom"
                            required={true}
                        />
                        <Input
                            label={"Coiffeur"}
                            type="text"
                            id="hairdresserId"
                            onChange={(e) => setHairdresserId(e.target.value)}
                            value={hairdresserId}
                            placeholder="votre@email.com"
                            required={true}
                        />

                    </div>
                    <div className='flex flex-col space-y-2 mt-4'>
                        <Button type="submit" className="bg-yellow-600 hover:bg-yellow-700 text-white w-full">
                            {loading ? "En cours ..." : "Ajouter"}
                        </Button>
                        <Button type="button" className="text-yellow-600 hover:text-yellow-700 w-full" onClick={hideModal}>
                            Annuler
                        </Button>
                    </div>
                </form>
            </div>
        </HairdresserLayout>
    );
}

export default Operations;
