import { useEffect,useState } from "react";
import { Container } from "../components";
import PostForm from "../components/post-form/PostForm";
import service from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost(){
    const [post,setPosts] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((fetchedPost)=>{
                if(fetchedPost){
                    setPosts(fetchedPost)
                }
            })
        }else{
            navigate("/")
        }
    },[navigate,slug])

    return post?(
        <div className="py-8">
            <Container>
                <PostForm post = {post}/>
            </Container>
        </div>
    ):null;

}
export default EditPost