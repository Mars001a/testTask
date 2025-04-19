import axios from "axios";
import { useEffect, useState } from "react";
import {Users} from "./type"
import Table from "./componetns/Table"
import Loader from "./componetns/Loader";


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

  return loading?<Loader/>: (
    <>
      <Table users={users}/>
    </>
  );
}

export default UsersList;
