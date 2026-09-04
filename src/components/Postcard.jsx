import service from "../appwrite/config"
import {Link} from 'react-router-dom'
function PostCard({$id , titile,image }){
    return (
       <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full flex justify-center mb-4">
                    <img src={service.getFilePreview(image)} alt={titile}
                    className="rounded-xl"
                    />
                </div>
                <h2 className="text-xl font-bold">
                    {titile}
                </h2>

            </div>
       </Link>
    )
}
export default PostCard;