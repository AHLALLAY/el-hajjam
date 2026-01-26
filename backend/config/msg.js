class TextMsg {

    emptyFields() { return "Veuillez remplir tous les champs"; }
    invalid(item) { return `${item} est invalide`; }

    exists(item) { return `${item} existe déjà`; }

    authFailed() { return "Email ou mot de passe incorrect"; }
    unauthenticated() { return "Session expirée ou invalide, veuillez vous reconnecter"; }
    forbidden() { return "Vous n'avez pas les droits pour effectuer cette action"; }
    authSuccess() { return "Authentification réussie"; }

    notFound(item) { return `${item} est introuvable`; }

    serverError() { return "Une erreur interne est survenue, veuillez réessayer plus tard"; }

    hairdresserListe(){return "Liste des coiffeurs récupérée";}
    hairdresser(){return "Coiffeur récupéré";}
}

export default new TextMsg();