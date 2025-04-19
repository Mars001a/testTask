import {User, UserInfo} from "../type"

function UserContacts({user}:UserInfo){
    return(
        <ul className="border-b mb-2">
          <li className="text-2xl sm:text-4xl pb-4 font-bold">{user?.name}</li>
          <li className="text-xl sm:text-2xl pb-4">{user?.email}</li>
          <li className="text-xl sm:text-2xl pb-4">{user?.phone}</li>
        </ul>
    )
}

export default UserContacts;