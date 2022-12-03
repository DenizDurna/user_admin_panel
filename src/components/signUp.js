import "../style/signup.css"
import { useSelector, useDispatch } from 'react-redux'
import { setNewName, setNewEmail, setNewJob, setNewRole, setNewUrl, setNewPassword, setControlPassword} from '../stores/newUserSlice'
import { setSign, setAlert} from "../stores/generalSlice"
import { localUsers ,createUserFunc} from "../js/script"

function SignUp() {
  const { newName, newEmail, newJob, newRole, newUrl, newPassword, controlPassword} = useSelector((state) => state.newUser)
  const dispatch = useDispatch()

  //sending new user
  const userSubmit = (e) => {
    e.preventDefault()
    let mailcontrol = localUsers().some(i => i.email === newEmail)
    if (mailcontrol === false) {
      if (newPassword === controlPassword) {
        let CreateNewuser =createUserFunc(newName,newEmail,newJob,newRole,newUrl,newPassword) 
        let id= {id: localUsers()[localUsers().length - 1].id + 1};
        localStorage.setItem("localUsers", JSON.stringify(localUsers().concat({...id,...CreateNewuser})))        
        dispatch(setSign(true))

        dispatch(setAlert(["User creation successful", "primary"]))
      } else {
        dispatch(setAlert(["Passwords do not match", "primary"]))
      }

    } else {
      dispatch(setAlert(["Previously registered with e-mail address", "primary"]))
    }
  }



  return (
    <div>
      <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
          <div className="col-12">

          </div>
        </div>
      </div>
      <main className="main-content  mt-0">
        <section>
          <div className="page-header min-vh-100">
            <div className="container">
              <div className="row">
                <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
                  <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center" >
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                  <div className="card card-plain">
                    <div className="card-header">
                      <h4 className="font-weight-bolder">Sign Up</h4>
                      <p className="mb-0">Enter your email and password to register</p>
                    </div>
                    <div className="card-body">
                      <form onSubmit={userSubmit}>
                        <div className="input-group input-group-outline mb-3">
                          <input type="text" name="name" className="form-control" placeholder="Full Name" autoFocus value={newName} onChange={(e) => dispatch(setNewName(e.target.value))} required />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <input type="email" className="form-control" placeholder="e-mail" required value={newEmail} onChange={(e) => dispatch(setNewEmail(e.target.value))} />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <input type="text" className="form-control" placeholder="job" required value={newJob} onChange={(e) => dispatch(setNewJob(e.target.value))} />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <input type="text" className="form-control" placeholder="role" required value={newRole} onChange={(e) => dispatch(setNewRole(e.target.value))} />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <input type="url" className="form-control" placeholder="Photo Url" required value={newUrl} onChange={(e) => dispatch(setNewUrl(e.target.value))} />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <input type="password" className="form-control" placeholder="password" required value={newPassword} onChange={(e) => dispatch(setNewPassword(e.target.value))} />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <input type="password" className="form-control" placeholder="retype the password" required value={controlPassword} onChange={(e) => dispatch(setControlPassword(e.target.value))} />
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign Up</button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                      <p className="mb-2 text-sm mx-auto">
                        Already have an account?
                        <span onClick={() => dispatch(setSign(true))} className="text-primary text-gradient font-weight-bold">Sign in</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>



    </div>

  )
}


export { SignUp }