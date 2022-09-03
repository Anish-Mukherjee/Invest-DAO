import React from 'react'
import {useMetamask} from '@thirdweb-dev/react'

const Login = () => {
    const connectWithMetamask = useMetamask() 
  return (
    <div>
      <button onClick={connectWithMetamask} className="bg-gradient-to-r from-fuchsia-600 to-pink-600 p-5 text-xl font-bold text-white rounded-full">Sign in with Metamask</button>
    </div>
  )
}

export default Login
