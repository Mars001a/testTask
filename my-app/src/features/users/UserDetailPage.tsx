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


function UserDetailPage() {
  const [user, setUser] = useState<User>();
  const [posts, setPosts] = useState<Posts[]>([]);
  const [loading, setLoading]=useState<boolean>(true)
  const { id } = useParams();

  useEffect(() => {
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).
    then((res)=>{
      setUser(res.data);
      setLoading(false);
    });
    axios.get<Posts[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).
    then((res)=>{
      setPosts(res.data);
    });
  }, []);

 
  return loading?<Loader/>:(
    <div className="flex justify-start text-gray-400">
      <div className="pr-5">
        {user&&<UserContacts user={user}/>}
        <div className="text-2xl">
          {user&&<UserCompany user={user}/>}
          {user&&<UserAddress user={user}/>}
        </div>
      </div>
      <div className="overflow-y-scroll">
        {posts&&<UserPosts posts={posts}/>}
      </div>
      <ButtonBack/>
    </div>
  )
};
  

export default UserDetailPage;
