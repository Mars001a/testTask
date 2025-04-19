import { Props } from "../type";
import { useNavigate } from "react-router-dom";

function Table({ users, search}: Props) {
  const navigate = useNavigate();
  const filteredUsers = search.trim() === ""?users:users.filter((user)=>(
    user.username.toLowerCase().includes(search.toLowerCase())
  ))
  return (
    <div className="border md:rounded-xl overflow-x-scroll">
      <table className="w-full bg-slate-800 divide-y">
        <thead>
          <tr className="divide-x divide-gray-600 bg-slate-700 text-white">
            <th className="px-3 py-3">Username</th>
            <th className="px-3">Email</th>
            <th className="px-3">City</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-600 ">
          {filteredUsers.map((user) => (
            <tr
              key={user.id}
              className="divide-x divide-gray-600 hover:bg-slate-500 cursor-pointer"
              onClick={() => {
                navigate(`/user/${user.id}`);
              }}
            >
              <td className="px-3 py-3">{user.username}</td>
              <td className="px-3 ">{user.email}</td>
              <td className="px-3 ">{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
