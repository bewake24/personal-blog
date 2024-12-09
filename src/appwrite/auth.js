import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique,
        email,
        password,
        name
      );

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (err) {
      throw err;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password); //used createEmailSession here
    } catch (err) {
      throw err;
    }
  }
  async getCurrentUser() {
    try {
      await this.account.get();
    } catch (err) {
      console.log(
        "Getting Error in appwrite service :: getCurrentUser() ::",
        err
      );
    }
    return null;
  }
  async logout() {
    try {
      this.account.deleteSessions();
    } catch (err) {
      console.log(
        "Getting Error in appwrite service :: deleteSessions() ::",
        err
      );
    }
  }
}

const authService = new AuthService();

export default authService;
