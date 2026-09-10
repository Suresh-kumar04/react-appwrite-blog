import service from "../appwrite/config"
import {Link} from 'react-router-dom'
function PostCard({$id , title,image }){
    return (
       <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full flex justify-center mb-4">
                    <img src={service.getFilePreview(image)} alt={title}
                    className="rounded-xl"
                    />
                </div>
                <p className="text-lg font-bold text-gray-900">
                    {title}
                </p>
                
            </div>
       </Link>
    )
}
export default PostCard;