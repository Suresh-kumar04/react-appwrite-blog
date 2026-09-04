const conf ={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectID:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseid:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteTableId:String(import.meta.env.VITE_APPWRITE_TABLE_ID),
    appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID)

}

export default conf;