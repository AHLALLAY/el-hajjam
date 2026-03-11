class TextMsg {

    emptyFields() { return "Veuillez remplir tous les champs"; }
    invalid(items) { return items.length <= 1 ? `${items} est invalide` : `${items.join(' ou ')} sont invalides`; }

    exists(item) { return `${item} existe déjà`; }

    authFailed() { return "Email ou mot de passe incorrect"; }
    unauthenticated() { return "Session expirée ou invalide, veuillez vous reconnecter"; }
    forbidden() { return "Vous n'avez pas les droits pour effectuer cette action"; }
    authSuccess() { return "Authentification réussie"; }

    notFound(item) { return `${item} est introuvable`; }

    serverError() { return "Une erreur interne est survenue, veuillez réessayer plus tard"; }

    getListe(items) { return `Liste des ${items} récupérée`; }
    getOne(item) { return `${item} récupérée`; }
    itemCreated(item) { return `${item} créé avec succès`; }
    itemUpdated(item) { return `${item} mis à jour avec succès`; }
}

export default new TextMsg();