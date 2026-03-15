/**
 * exemple de data:
 * address : "dawdiat, Marrakech"
 * cin : "YZ12098"
 * createdAt : "2026-03-10T23:42:09.212Z"
 * email : "yassin01@gmail.com"
 * firstName : "Zakani"
 * lastName : "Yassin"
 * phone : "0690429637"
 * role : "coiffeur"
 * status : "actif" | "inactif" | "suspendu"
 * updatedAt : "2026-03-10T23:42:09.212Z"
 * _id : "69b0ac51ce93dd6880749db4"
 */

import { useState } from 'react';
import Button from '../../components/ui/button';
import fetchEndPoint from '../../services/apiHandler';

const STATUS_STYLES = {
  actif: 'bg-emerald-600/80 text-white',
  inactif: 'bg-slate-500/80 text-slate-100',
  suspendu: 'bg-amber-500/80 text-white',
};

function StuffCard({ data, className = '', onUpdate }) {
  const [error, setError] = useState('');
  const updateStats = async (id, status) => {
    const token = localStorage.getItem('token');
    try {
      await fetchEndPoint(`/users/hairdresser/${id}`, 'PATCH', status, token);
      onUpdate();
      setError('');
    } catch (err) {
      setError(err?.message ?? 'Erreur pendant la mise à jour');
    }
  }
  const cardStyle = `border border-yellow-600/80 rounded-xl p-4 sm:p-5 bg-white/30 shadow-md hover:shadow-lg min-w-[240px] transition-shadow duration-200 ${className}`;
  if (!data || !Array.isArray(data)) return <p className="text-slate-400">Aucun coiffeur trouvé</p>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {error && <span className='text-red-400'>{error}</span>}
      {data.map((person) => (
        <div key={person._id} className={cardStyle}>
          <div className="flex justify-between items-start border-b border-yellow-600/60 pb-2 mb-2">
            <h2 className="text-yellow-500 font-medium truncate">{person.firstName} {person.lastName}</h2>
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium shrink-0 ${STATUS_STYLES[person.status]}`}>
              {person.status}
            </span>
          </div>
          <div className="flex flex-col gap-2 text-slate-300 text-sm">
            <p className="truncate" title={person.email}>{person.email}</p>
            <p className="truncate" title={person.phone}>{person.phone}</p>
            <p className="truncate" title={person.address}>{person.address}</p>
          </div>
          <div className="flex justify-between items-center gap-2 mt-3 flex-wrap">
            {person.status === 'actif' && (
              <>
                <Button type='button' className="px-3 py-1.5 text-sm bg-red-600 hover:bg-red-700 text-white" onClick={() => { updateStats(person._id, { status: "suspendu" }) }}>Suspendre</Button>
              </>
            )}
            {person.status === 'suspendu' && (
              <>
                <Button type='button' className="px-3 py-1.5 text-sm bg-green-600 hover:bg-green-700 text-white" onClick={() => { updateStats(person._id, { status: "actif" }) }}>Activer</Button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );

}

export default StuffCard;
