import useUser from "../hooks/useUser"
import UserRow from "./UserRow";

export default function UserPage() {

  const {users} = useUser();

  return (
    <>
        <h3>Usuarios</h3>
        <table>
            <thead>
                <td>Avatar</td>
                <td>Nombre</td>
                <td>Email</td>
            </thead>

            <tbody>
                {users.map( user=>(                    
                    <UserRow key={user.id} user={user}/>
                ))}
            </tbody>
        </table>
      
    </>
  )
}
