import { PostsList } from "../type";


function UserPost({posts}:PostsList){
    return(
      <>
        <h1 className="text-2xl font-bold mb-4 flex justify-center">Posts</h1>
        {posts.map((post)=>(
          <div className="border p-4 ">
            <div className="border-b border-gray-600 mb-3 capitalize"><span className="font-bold">Title:</span> {post.title}</div>
            <p>{post.body}</p>
          </div>
        ))}
      </>
    )
}

export default UserPost;