import React, { createContext, useState, useEffect} from 'react'
import { getlocalstorage, setlocalstorage } from '../utils/LocalStorage'


export const AuthContext = createContext()
 

function AuthProvider({children}) {

  const [userData, setuserData] = useState(null)
  useEffect(() => {
    setlocalstorage()
      const {employees, admin} = getlocalstorage();
      setuserData({employees, admin})
  }, [])
  
  


  return (
    <div>
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider