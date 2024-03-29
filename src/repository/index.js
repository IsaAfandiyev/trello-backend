module.exports = class Repository {
  constructor(firebaseDB) {
    this.firebaseDB = firebaseDB;
  }

  async get(collection, user_id, id) {
    const doc = await this.firebaseDB.firestore().collection(collection).doc(id).get();
    return { id: doc.id, ...doc.data() };
  }

  async getAll(collection, user_id) {
    // get all documents where user id is equal to current user id
    const query = await this.firebaseDB
      .firestore()
      .collection(collection)
      .where("user_id", "==", user_id)
      .get();
    const docs = query.docs;
    return docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  }

  // get by custom filters
  async getBy(collection, user_id, filters) {
    // get all documents where user id is equal to current user id
    let query = await this.firebaseDB
      .firestore()
      .collection(collection)
      .where("user_id", "==", user_id);

    // add each filter to query
    filters.forEach((filter) => {
      query = query.where(filter.field, filter.operator, filter.value);
    });
    query = await query.get();
    const docs = query.docs;
    return docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
  }

  async create(collection, user_id, data) {
    data.user_id = user_id;
    const doc = await this.firebaseDB.firestore().collection(collection).add(data);
    return doc.id;
  }

  async update(collection, user_id, id, data) {
    await this.firebaseDB.firestore().collection(collection).doc(id).update(data);
  }

  async delete(collection, user_id, id) {
    await this.firebaseDB.firestore().collection(collection).doc(id).delete();
  }
};
