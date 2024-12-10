import { useAuthContext } from "../context/AuthContext"

export default function LoginPage() {

  useAuthContext();
  const {state, loginEmailWithPassword, logOut} = useAuthContext();

  console.log(state)

  if (state === 1){
    return (
      <>
        <h3>Tu estas logeado</h3>
        <button onClick={()=>loginEmailWithPassword('vinny@correo.com', '12345')} className="bg-blue-500 text-white rounded-2xl mt-2 p-5">Login</button>
        
      </>
    )
  }


  return (
    <>
        <h3>Bienvenidos a la website</h3>

        <h3>Ingresar</h3>

        <button onClick={()=>logOut('vinny@correo.com', '12345')} className="bg-blue-500 text-white rounded-2xl mt-2 p-5">Log Out</button>
    
    </>
  )
}
