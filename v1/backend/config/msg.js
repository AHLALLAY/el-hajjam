class TextMsg {

    emptyFields() { return "Veuillez remplir tous les champs"; }
    invalid(item = "données") { return item === "données" ? "Données invalides" : `${item} est invalide`; }

    exists(item = "Cette ressource") { return `${item} existe déjà`; }

    loginFailed() { return "Email ou mot de passe incorrect"; }
    unauthenticated() { return "Session expirée ou invalide, veuillez vous reconnecter"; }
    forbidden() { return "Vous n'avez pas les droits pour effectuer cette action"; }

    notFound(item = "La ressource") { return `${item} est introuvable`; }
    
    serverError() { return "Une erreur interne est survenue"; }
}