import { Signin } from "./signin"
import { SignUp } from "./signUp"
import { useSelector } from 'react-redux'


function Login() {
  const { sign } = useSelector((state) => state.general)

  return (
    <div>
      {sign ?
        <Signin /> :
        <SignUp />
      }
    </div>
  )
}


export { Login }