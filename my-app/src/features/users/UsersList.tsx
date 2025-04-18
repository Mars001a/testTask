import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


function UsersList() {
  const [users, setUsers] = useState<Users[]>([]);
  type Users = {
    id: number;
    name: string;
    email: string;
    address: { city: string };
  };

  useEffect(()=>{
    axios.get<Users[]>("https://jsonplaceholder.typicode.com/users")
    .then(res =>{
      setUsers(res.data);
    })
    .catch(er=>{
      console.error('Ошибка при загрузке:', er);
    })
  },[]);
  console.log(users);

  return (
    <div>
      {users.map((user)=>(
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
