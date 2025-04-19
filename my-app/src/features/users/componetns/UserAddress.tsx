import {UserInfo } from "../type";

function UserAddress({user}:UserInfo){
    return(
      <>
        <h1 className="font-bold py-4">Address</h1>
        <span className="text-xl">
            {user?.address.city} / {user?.address.street} / {user?.address.suite} 
        </span>
      </>
    )
}

export default UserAddress;