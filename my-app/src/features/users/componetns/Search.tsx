import { useState } from "react";
import Table from "../componetns/Table"
import { UsersList } from "../type";


function Search({users}:UsersList){
    const [search, setSearch] = useState("");
    
    return(
        <div className="flex-row">
         <input className="rounded-md bg-gray-900 text-xl mb-10 px-4 py-2 w-full sm:w-auto" type="text" placeholder="Search" onChange={e=>setSearch(e.target.value)} />
         <Table users={users} search={search}/>
        </div>
    )
}

export default Search;