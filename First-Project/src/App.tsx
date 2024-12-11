
import BasicFunctions from './typescript/BasicFunctions'
import BasicTypes from './typescript/BasicTypes'
import ObjectLiterals from './typescript/ObjectLiterals'
import Counter from './components/Counter'
import { AuthProvider } from './context/AuthContext'
import LoginPage from './components/LoginPage'
import UserPage from './components/UserPage'
function App() {

  return (
    //fragment <> </>
    <>
      <AuthProvider>
        <div className='flex flex-col justify-center items-center h-svh'>
          
          {/*<BasicTypes /> coment very importante the estructure*/}
          {/*<ObjectLiterals />*/}
          {/*<BasicFunctions/>*/}
          {/*<Counter />*/}
          {/*<LoginPage/>*/}
          <UserPage/>
        </div>
      </AuthProvider>
    </>
  )
}

export default App
