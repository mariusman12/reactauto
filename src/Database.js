// Database.js
export class Database {
  constructor() {
    this.users = [];
  }

  async createUser(user) {
    this.users.push(user);
    return user;
  }

  async getUser(id) {
    return this.users.find((user) => user.id === id) || null;
  }

  async updateUser(id, newUserData) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...newUserData };
      return this.users[userIndex];
    }
    return null;
  }

  async deleteUser(id) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      return true;
    }
    return false;
  }
}
