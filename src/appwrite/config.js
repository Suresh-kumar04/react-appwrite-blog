import { Client, Databases, TablesDB,Query, ID,Storage } from "appwrite";
import conf from "../conf/conf";
export class Service{
    client = new Client();
    database;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectID)
        this.database = new TablesDB(this.client);
        this.bucket = new Storage(this.client)

    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await  this.database.createRow(
                conf.appwriteDatabaseid,
                conf.appwriteTableId,
                slug,
                {title,content,image:featuredImage,status,userId}
            )
        } catch (error) {
            console.log("config.js::createpost",error);
        }

    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.database.updateRow(
                conf.appwriteDatabaseid,
                conf.appwriteTableId,
                slug,{
                    title,
                    content,
                    image : featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("update post ",error);
        }

    }

    async deletePost(slug){
        try {
            await this.database.deleteRow(
                conf.appwriteDatabaseid,
                conf.appwriteTableId,
                slug
            )
            return true;
        } catch (error) {
            console.log("delete post",error);
            return false;
        }
    }

    async getPost(slug  ){
        try {
            return await this.database.getRow(  
                conf.appwriteDatabaseid,
                conf.appwriteTableId,
                slug

            )
        } catch (error) {
            console.log('in getPost',error)
        }
    }

    async   getPosts(){
        try {
            return await this.database.listRows(
                conf.appwriteDatabaseid,
                conf.appwriteTableId,
                [Query.equal("status","active")],   
                100,
                0

            )
            
        } catch (error) {
            console.log("getpost",error);
            return false;
        }

    }
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("upload file",error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("delete file",error);
            return false;
        }
    }

     getFilePreview(fileId){
        
        if(!fileId) return null;
        return this.bucket.getFileView(
            conf.appwriteBucketId,
            fileId
        )
    }

}
const service = new Service();
export default service;