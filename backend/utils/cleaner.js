/**
 * Retourne une copie "propre" d'un document Mongoose pour l'API (sans _id, __v, timestamps, password).
 * @param {import('mongoose').Document} obj - Document Mongoose (résultat de find, create, findByIdAndUpdate, etc.)
 * @returns {Object} Objet plain sans _id, __v, createdAt, updatedAt ni password
 * @throws {Error} Si obj n'a pas la méthode toObject (ex. objet plain)
 */

function cleanObject(obj) {
    const newObject = obj.toObject();
    delete newObject._id;
    delete newObject.__v;
    delete newObject.createdAt;
    delete newObject.updatedAt;

    if(newObject.password) delete newObject.password;

    return newObject;
}

export default cleanObject;