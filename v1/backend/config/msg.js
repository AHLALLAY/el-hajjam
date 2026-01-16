class TextMsg{
    emptyField() {return "Veuillez remplir tous les champs";}
    invalide(emailOrPassword) {return `${emailOrPassword} est invalide`;}
    noAuthorized() {return "L'email ou le mot de passe n'est pas correct";}
}

export default new TextMsg();