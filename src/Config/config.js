const config = {
  appWriteURL: String(import.meta.env.VITE_APPWRITE_URL),
  appWriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appWriteDataBaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appWriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appWriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  appWriteApiKey: Number(import.meta.env.VITE_APPWRITE_API_KEY),
};

export default config;
