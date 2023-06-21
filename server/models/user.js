const { getDb } = require('../db')

class User {
  constructor() {
    this.db = getDb();
  }

  // Creates a user an adds to the database
  async createUser(userData) {
    try {
      const result = await this.db.collection('users').insertOne(userData);
      return result;
    } catch (err) {
      throw new Error('could not create document');
    }
  }

  // Updates the user data for a specific user in the database
  updateUser(userId, updatedUserData) {

  }

  //Deletes a user from the database based on the given user ID
  deleteUser(userId) {

  }

  // Retrieves a user from the database based on the given user ID
  getUser(userId) {

  }

  // Retrieves all users from the database.
  getUsers() {
    
  }

  testClass() {
    return 'testClass method being called'
  }

}



module.exports = User;