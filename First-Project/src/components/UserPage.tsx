
export default function UserPage() {

   const [users, setusers] = userUser();

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
                {users.map( user=>{
                    <tr>
                        <td>
                            <img src={user.avatar}
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
      
    </>
  )
}
