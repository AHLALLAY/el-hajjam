import { useState, useEffect } from "react";
import Layout from "../../layouts/layout";
import Button from "../../components/ui/button";
import Input from "../../components/ui/input";
import HairdresserCard from "../../components/cards/admin/hairdresserCard";
import fetchEndPoint from "../../services/apiHandler";

function Hairdresser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [cin, setCin] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const [hairdressers, setHairdressers] = useState([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const loadHairdressers = async () => {
    const res = await fetchEndPoint("/users/hairdressers", "GET");
    setHairdressers(res.data ?? []);
  };
  const addHairdresser = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetchEndPoint("/users/hairdressers", "POST", {
        firstName,
        lastName,
        email,
        password,
        phone,
        cin,
        address,
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setCin("");
      setAddress("");
      loadHairdressers();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHairdressers();
  }, []);

  return (
    <Layout role="admin">
      <div className="p-4 flex justify-between items-center mt-6 mb-10">
        <h1 className="text-2xl font-bold text-yellow-600">Coiffeurs</h1>
        <Button
          className="bg-yellow-600 hover:bg-yellow-700 text-white"
          onClick={() => setShowModal(true)}
        >
          Nouveau coiffeur
        </Button>
      </div>
      {error && (
        <p className="text-red-600 bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
          {error}
        </p>
      )}
      <div className="rounded-xl p-4 space-y-4">
        <HairdresserCard data={hairdressers} onUpdate={loadHairdressers} />
      </div>
      <div
        className={
          showModal
            ? "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            : "hidden"
        }
      >
        <form
          onSubmit={addHairdresser}
          className="border border-slate-600 p-6 rounded-xl bg-slate-800 shadow-2xl shadow-black/20 max-w-lg w-full"
        >
          <div className="flex justify-between items-center mb-6 px-2 text-yellow-600 font-bold">
            <h1 className="text-xl">Nouveau Coiffeur</h1>
            <button
              type="button"
              className="w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-yellow-700/30 text-yellow-700 transition-colors"
              onClick={() => {
                setShowModal(false);
              }}
            >
              &times;
            </button>
          </div>
          {error && (
            <span className="block text-sm text-red-400 mb-3">{error}</span>
          )}
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between gap-2">
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
            <div className="flex justify-between gap-2">
              <Input
                label={"Email"}
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="votre@email.com"
                required={true}
              />
              <Input
                label={"Mot de passe"}
                type="password"
                id="password"
                name="new-password"
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="********"
                required={true}
              />
            </div>
            <div className="flex justify-between gap-2">
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
          <div className="flex flex-col space-y-3 mt-6">
            <Button
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-700 text-white w-full"
            >
              {loading ? "En cours ..." : "Ajouter"}
            </Button>
            <Button
              type="button"
              className="text-yellow-600 hover:bg-yellow-700 w-full"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Annuler
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Hairdresser;
