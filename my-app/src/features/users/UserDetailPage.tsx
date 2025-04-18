import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User, Posts } from "./type";


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

 
  return loading?<div>Загрузка</div>:(
    <div>
      <div>{user?.name}</div>
      <span>----------</span>
      <div>{posts.map((post)=>(
        <div>{post.title}</div>
      ))}</div>
    </div>
  )
};
  

export default UserDetailPage;
