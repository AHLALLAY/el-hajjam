import StuffCard from '../../components/cards/stuffCard';
import AdminLayout from '../../layouts/adminLayout';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import { useState } from 'react';


function Stuff() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [cin, setCin] = useState('');
  const [address, setAddress] = useState('');

  const [modalStat, setModalStat] = useState(false);

  const showModal = () => { setModalStat(true); }
  const hideModal = () => { setModalStat(false); }

  const addHairdresser = async (e) => {
    e.preventDefault();

  }
  return (
    <AdminLayout>
      <div className='flex flex-col space-y-4'>
        <div className='flex justify-between'>
          <h1 className="text-yellow-600 font-semibold text-3xl p-4">Personnel</h1>
          <Button type="button" className="bg-yellow-600 hover:bg-yellow-700 text-white" onClick={showModal}>
            Nouveau personnel
          </Button>
        </div>
        <div className="flex justify-between">
          <StuffCard
            title={"operations"}
            data={{ 'key': 0 }}
          />
        </div>
      </div>
      <div className={modalStat ? 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50' : 'hidden'}>
        <form onSubmit={addHairdresser} className='border border-yellow-600 p-4 rounded-lg bg-slate-700/40'>
          <div className='flex flex-col space-y-2'>
            <div className='flex justify-between gap-2'>
              <Input
                label={"Nom"}
                type="text"
                id="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                placeholder="votre nom"
                required={true}
              />
              <Input
                label={"Prénom"}
                type="text"
                id="lastName"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                placeholder="votre prénom"
                required={true}
              />
            </div>
            <div className='flex justify-between gap-2'>
              <Input
                label={"Email"}
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="votre@email.com"
                required={true}
              />
              <Input
                label={"Mot de passe"}
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="********"
                required={true}
              />
            </div>
            <div className='flex justify-between gap-2'>
              <Input
                label={"Téléphone"}
                type="text"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                placeholder="ex: 06xxxxxxxx"
                required={false}
              />
              <Input
                label={"CIN"}
                type="text"
                id="cin"
                onChange={(e) => setCin(e.target.value)}
                value={cin}
                placeholder="votre cin"
                required={true}
              />
            </div>
            <Input
              label={"Adresse"}
              type="text"
              id="address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              placeholder="votre adresse"
              required={true}
            />
          </div>
          <div className='flex flex-col space-y-2 mt-4'>
            <Button type="submit" className="bg-yellow-600 hover:bg-yellow-700 text-white w-full">
              Ajouter
            </Button>
            <Button type="button" className="text-yellow-600 hover:text-yellow-700 w-full" onClick={hideModal}>
              Annuler
            </Button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

export default Stuff;
