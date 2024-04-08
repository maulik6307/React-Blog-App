import config from "../Config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  // databases;
  // bucket;

  // constructor() {
  //   this.client
  //     .setEndpoint(config.appWriteURL)
  //     .setProject(config.appWriteProjectId);
  //   this.databases = new Databases(this.client);
  //   this.bucket = new Storage(this.client);
  // }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    debugger;
    const client = new Client();
    const databases = new Databases(client);

    client
      .setEndpoint(config.appWriteURL) // Your API Endpoint
      .setProject(config.appWriteProjectId); // Your project ID

    const promise = await databases.createDocument(
      config.appWriteDataBaseId,
      config.appWriteCollectionId,
      slug,
      {
        Title: title,
        Content: content,
        Status: status,
        UserId: userId,
      }
    );

    promise.then(
      function (response) {
        console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );

    // try {
    //   return await this.databases.createDocument(
    //     config.appWriteDataBaseId,
    //     config.appWriteCollectionId,
    //     slug,
    //     {
    //       // title,
    //       content,
    //       // featuredImage,
    //       status,
    //       userId,
    //     }
    //   );
    // } catch (error) {
    //   console.log("Appwrite serive :: createPost :: error", error);
    // }
  }
}

const service = new Service();
export default service;
