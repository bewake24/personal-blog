import conf from "../conf/conf";
import { Client, Databases, ID, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async getPost(slug) {
    try {
      await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (err) {
      console.log("Getting Error in appwrite service :: getDocument() ::", err);
    }
  }

  async getPosts(queries = [Query.equal("status", ["active"])]) {
    try {
      this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (err) {
      console.log(
        "Getting Error in appwrite service :: listDocuments() ::",
        err
      );
    }
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log(
        "Getting Error in appwrite service :: createDocument() ::",
        err
      );
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.log(
        "Getting Error in appwrite service :: updateDocument() ::",
        err
      );
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log(
        "Getting Error in appwrite service :: deleteDocument() ::",
        err
      );
      return false;
    }
  }

  //   Storage services

  async uploadFile(file) {
    try {
      await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file);
    } catch (err) {
      console.log("Getting Error in appwrite service :: createFile() ::", err);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (err) {
      console.log("Getting Error in appwrite service :: deleteFile() ::", err);
      return false;
    }
  }

  getFilePreview(fileId) {
    const file = this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    console.log(file);

    return file.href;
  }
}

const service = new Service();

export default service;
