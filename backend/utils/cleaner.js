/**
 * Retourne une copie "propre" d'un document Mongoose pour l'API (sans __v, timestamps, password).
 * @param {import('mongoose').Document} obj - Document Mongoose (résultat de find, create, findByIdAndUpdate, etc.)
 * @returns {Object} Objet plain sans __v, updatedAt et password
 * @throws {Error} Si obj n'a pas la méthode toObject (ex. objet plain)
 */

export default function cleanObject(obj) {
    const newObject = obj.toObject();
    delete newObject.__v;
    delete newObject.updatedAt;

    if(newObject.password) delete newObject.password;

    return newObject;
}
