
import { useSelector, useDispatch } from 'react-redux'
import { setNewName, setNewEmail, setNewJob, setNewRole, setNewUrl, setNewPassword, setRefreshForm } from '../stores/newUserSlice'
import { setAlert } from '../stores/generalSlice'
import { localUsers, createUserFunc,closeNodal } from "../js/script"


function EditUser() {
  const { newName, newEmail, newJob, newRole, newUrl, newPassword, status } = useSelector((state) => state.newUser)
  const dispatch = useDispatch()

  const onClickAddAndUptate = (e) => {
    e.preventDefault()
    if (!status) {
      let CreateNewuser = createUserFunc(newName, newEmail, newJob, newRole, newUrl, newPassword);
      const editIndex = localUsers().findIndex((i) => i.email === newEmail)
      let newUsers = localUsers()
      newUsers[editIndex] = CreateNewuser
      localStorage.setItem("localUsers", JSON.stringify(newUsers))
      dispatch(setAlert(["USER Updated", "primary"]))
      closeNodal()

    } else if (!!status) {
      let mailcontrol = localUsers().some(i => i.email === newEmail)
      if (mailcontrol === false) {
        let CreateNewuser = createUserFunc(newName, newEmail, newJob, newRole, newUrl, newPassword);
        let id = { id: localUsers()[localUsers().length - 1].id + 1 };
        localStorage.setItem("localUsers", JSON.stringify(localUsers().concat({ ...id, ...CreateNewuser })))
        dispatch(setRefreshForm())
        dispatch(setAlert(["USER CREATED", "primary"]))
        closeNodal()
      } else {
        dispatch(setAlert(["Previously registered with e-mail address", "primary"]))
      }
    }
  }

  return (
    <div>

      <main className="main-content  mt-0">
        <section>
          <div className="page-header">
            <div className="container">
              <div className="row">

                <div className="col-12  d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                  <div className="card card-plain">
                    <div className="card-header">
                      <h4 className="font-weight-bolder">
                        {
                          status ? "Sign Up" : "Edit User"
                        }
                      </h4>


                      <p className="mb-0">
                      {
                          status ? "Enter your email and password to register" 
                          : "You Are Updating User"
                        }
                        </p>
                    </div>
                    <div className="card-body">
                      <form id="form1" onSubmit={onClickAddAndUptate}>
                        <div className="input-group input-group-outline mb-3">
                          <input type="text" name="name" className="form-control" placeholder="Full Name" autoFocus value={newName} onChange={(e) => dispatch(setNewName(e.target.value))} required />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <input type="email" className="form-control" placeholder="e-mail" value={newEmail} onChange={(e) => dispatch(setNewEmail(e.target.value))} required />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <input type="text" className="form-control" placeholder="job" value={newJob} onChange={(e) => dispatch(setNewJob(e.target.value))} required />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <input type="text" className="form-control" placeholder="role" value={newRole} onChange={(e) => dispatch(setNewRole(e.target.value))} required />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <input type="url" className="form-control" placeholder="Photo Url" value={newUrl} onChange={(e) => dispatch(setNewUrl(e.target.value))} required />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <input type="password" className="form-control" placeholder="password" value={newPassword} onChange={(e) => dispatch(setNewPassword(e.target.value))} required />
                        </div>

                      </form>
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


export { EditUser }