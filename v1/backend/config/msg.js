class TextMsg {
    emptyFields() { return "Veuillez remplir tous les champs"; }
    invalid(field) { return `${field} est invalide`; }
    unAuthorized() { return "Email ou mot de passe incorrect"; }
}
export default new TextMsg();