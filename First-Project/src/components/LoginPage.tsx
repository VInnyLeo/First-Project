import { useAuthContext } from "../context/AuthContext"

export default function LoginPage() {

  useAuthContext();

  return (
    <>
        <h3>Bienvenidos a la website</h3>
    
    </>
  )
}
