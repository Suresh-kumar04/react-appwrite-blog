import { useNavigate } from "react-router-dom";
import service from "../appwrite/config";
import { Container } from "../components";
import PostCard from '../components/Postcard'
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
function AllPost(){
    const[ post,setPost] = useState([])
    const userData = useSelector(state => state.auth.userData)
    useEffect(()=>{
        if(userData?.$id){
        service.getUserPosts(userData.$id).then((Response)=>{
            if(Response){
                setPost(Response.rows??[])
            }
        })
    }
},[userData])
   
    return(
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {post.map((post)=>(
                        <div key={post.$id} className="p-2 w-1/4">
                                <PostCard
                                
                                {...post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
export default AllPost