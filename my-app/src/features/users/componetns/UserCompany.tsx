import {UserInfo } from "../type";

function UserCompany({user}:UserInfo){
    return(
      <>
        <h1 className="font-bold py-4">Company</h1>
        <ul className="border-b mb-2">
          <li className="pb-2">{user?.company.name} </li>
          <li className="pb-2">{user?.company.catchPhrase}</li>
          <li className="pb-2">{user?.company.bs}</li>
        </ul>
      </>
    )
}

export default UserCompany;