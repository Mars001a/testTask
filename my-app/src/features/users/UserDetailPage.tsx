import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User, Posts } from "./type";
import UserContacts from "./componetns/UserContacts"
import UserCompany from "./componetns/UserCompany";
import UserAddress from "./componetns/UserAddress";
import UserPosts from "./componetns/UserPosts";
import ButtonBack from "./componetns/ButtonBack";
import Loader from "./componetns/Loader";
import ApiError from "./componetns/apiError";

function UserDetailPage() {
  const [user, setUser] = useState<User>();
  const [posts, setPosts] = useState<Posts[]>([]);
  const [loading, setLoading]=useState<boolean>(true)
  const [apiError, setApiError]=useState<boolean>(false)
  const { id } = useParams();

  useEffect(() => {
    Promise.all([
      axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`),
      axios.get<Posts[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    ]).
    then(([userData, postsData])=>{
      setUser(userData.data);
      setPosts(postsData.data);
    }).catch(()=>{
      setApiError(true);
    }).finally(()=>setLoading(false));
  }, []);

 
  return loading?<Loader/>:apiError?<ApiError/>:(
    <div className="md:flex justify-start text-gray-400">
      <div className="px-5 mb-10 md:pr-5 min-w-80">
        {user&&<UserContacts user={user}/>}
        <div className="text-lg sm:text-2xl">
          {user&&<UserCompany user={user}/>}
          {user&&<UserAddress user={user}/>}
        </div>
      </div>
      <div>
        {posts&&<UserPosts posts={posts}/>}
      </div>
      <ButtonBack/>
    </div>
  )
};
  

export default UserDetailPage;
