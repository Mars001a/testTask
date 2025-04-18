import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {Users} from "./type"


function UsersList() {
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading]=useState<boolean>(true)

  useEffect(()=>{
    axios.get<Users[]>("https://jsonplaceholder.typicode.com/users")
    .then(res =>{
      setUsers(res.data);
      setLoading(false);
    })
    .catch(er=>{
      console.error('Ошибка при загрузке:', er);
    })
  },[]);

  return loading?<div>Загрузка</div>: (
    <div>
      {users.map((user)=>(
        <Link to={`/user/${user.id}`}>
          <div key={user.id}>
            <p>{user.username}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default UsersList;
