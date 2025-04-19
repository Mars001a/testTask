import axios from "axios";
import { useEffect, useState } from "react";
import {Users} from "./type"
import Loader from "./componetns/Loader";
import Search from "./componetns/Search";
import ApiError from "./componetns/apiError";



function UsersList() {
  const [apiError, setApiError]=useState<boolean>(false);
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading]=useState<boolean>(true)

  useEffect(()=>{
    axios.get<Users[]>("https://jsonplaceholder.typicode.com/users")
    .then(res =>{
      setUsers(res.data);
    }).catch(()=>{
      setApiError(true);
    }).
    finally(()=>{
      setLoading(false);
    })
  },[]);

  return loading?<Loader/>: (
    <>
      {apiError?<ApiError/>:<Search users={users}/>}
    </>
  );
}

export default UsersList;
