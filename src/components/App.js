import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setAlert, setLogin } from '../stores/generalSlice'
import { setMail, setPassword } from '../stores/signinSlice'
import { setNewName, setNewEmail, setNewJob, setNewRole, setNewUrl, setNewPassword, setControlPassword, setNewUser } from '../stores/newUserSlice'
import { Login } from "./login";
import { Admin } from "./admin";
import 'bootstrap/dist/css/bootstrap.min.css';
import { localUsers, localLoginUser, list } from "../js/script"

function App() {
  const { login, sign, alert, } = useSelector((state) => state.general)
  const { refreshForm } = useSelector((state) => state.newUser)
  const dispatch = useDispatch()

  function PageRefresh() {
    if (localUsers() === null || localUsers() === undefined) {
      return localStorage.setItem("localUsers", JSON.stringify(list))
    }
    if (localLoginUser() !== null && localLoginUser() !== undefined) {
      if (localUsers().some(usr => usr.email === localLoginUser().email)) {
        dispatch(setLogin(true))
      }
    }
  }
  // login screen password and password form emptying function
  function loginInfoReset() {
    dispatch(setMail(""))
    dispatch(setPassword(""))
  }

  //new and edit form dump function
  function fomrReset() {
    dispatch(setMail(""))
    dispatch(setPassword(""))
    dispatch(setNewName(""))
    dispatch(setNewEmail(""))
    dispatch(setNewJob(""))
    dispatch(setNewRole(""))
    dispatch(setNewUrl(""))
    dispatch(setNewPassword(""))
    dispatch(setControlPassword(""))
    dispatch(setNewUser(""))
  }

  // life cycles
  useEffect(() => {
    PageRefresh()
    loginInfoReset()
    fomrReset()
  }, [login, sign, refreshForm])

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setAlert(""))
    }, 3000);
    return () => clearTimeout(timer);
  }, [alert])

  const [alertMesagge, alertType] = alert

  return (
    <div>
      {
        login ?
          <Admin /> :
          <Login />
      }

      {alert !== "" &&
        <div className={`alert alert-${alertType} position-fixed top-0 end-0 m-2 px-5`} role="alert" >
          {alertMesagge}
        </div>}
    </div>
  )
}


export default App;
