import service from "../appwrite/config";
import { Container } from "../components";
import PostCard from '../components/Postcard'
import { useState,useEffect } from "react";
function AllPost(){
    const[ post,setPost] = useState([])
    useEffect(()=>{
         service.getPosts([]).then((posts)=>{
        if(posts){
            console.log(posts.rows);
            
            setPost(posts.rows)
        }
    })
    },[])
   
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