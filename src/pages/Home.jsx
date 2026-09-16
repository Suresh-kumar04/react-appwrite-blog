import { useState,useEffect } from "react"
import service from "../appwrite/config"
import { Container } from "../components"
import { useSelector } from "react-redux"
import PostCard from '../components/Postcard'
function Home(){
    const authStatus = useSelector(state=>state.auth.status);
    console.log('in home' ,authStatus);
    // {console.log( 'from home ',   service.getFilePreview("6a9af877003d6a9255bb"))}
    const [post,setPosts] = useState([]);
    useEffect(()=>{
        service.getPosts().then((response)=>{
            if(response){
               setPosts(response.rows ?? [])
            }
        })
    },[])
    if(!authStatus){
        return <div className="text-center text-2xl font-bold mt-8 text-black">
            Please login to read posts
        </div>
    }
    if(post.length === 0){
        return(
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl
                                font-bold hover:text-gray-500
                            ">No posts</h1>
                        </div>

                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                        {
                            post.map((post)=>(
                                <div key={post.$id} className="p-2 w-1/4">
                                    <PostCard {...post}/>
                                </div>
                            ))
                        }

                </div>
            </Container>
        </div>
    )
}
export default Home