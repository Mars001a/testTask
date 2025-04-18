import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User, Post } from "./type";
import { error } from "console";

function UserDetailPage() {
  const [user, setUser] = useState<User>();
  const [post, setPost] = useState<Post[]>([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((er) => {
        console.log(er);
      });
    axios
      .get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  return <div>helo</div>;
}

export default UserDetailPage;
