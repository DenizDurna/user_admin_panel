import "../style/style.css"
import { EditUser } from "./editUser"
import { useDispatch,useSelector } from 'react-redux'
import { setNewName, setNewEmail, setNewJob, setNewRole, setNewUrl, setNewPassword, setStaus, setRefreshForm } from '../stores/newUserSlice'
import { setAlert, setLogin } from '../stores/generalSlice'
import { localUsers, localLoginUser } from "../js/script"
import { Button } from "bootstrap"


function Admin() {
  const { status } = useSelector((state) => state.newUser)
  const dispatch = useDispatch()

  // pull user data into form
  function onClickedit(user) {
    dispatch(setNewName(user.name))
    dispatch(setNewEmail(user.email))
    dispatch(setNewJob(user.job))
    dispatch(setNewRole(user.role))
    dispatch(setNewUrl(user.url))
    dispatch(setNewPassword(user.password))
    dispatch(setStaus(false))

  }

  //admin panel New user
  function onClickNewUser() {
    dispatch(setRefreshForm())
    dispatch(setStaus(true))
  }

  function onClickOut(e) {
    dispatch(setLogin(false))
    sessionStorage.clear()
  }

  function onClickDelete(i) {
    if (i.email !== "dnzdurna@gmail.com") {
      const delUser = localUsers().filter(user => user.email !== i.email)
      localStorage.setItem("localUsers", JSON.stringify(delUser))
      dispatch(setAlert(["user deleted", "primary"]))
    }
  }

  return (
    <div className="g-sidenav-show  bg-gray-200">

      <main className="main-content position-relative max-height-vh-100 h-100 border-radius ">
        {/*Navbar*/}
        <nav className="navbar navbar-main navbar-expand px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <h6 className="font-weight-bolder mb-0">List</h6>
            </nav>
            <div className="justify-content-end " id="navbar">
              <ul className="navbar-nav text-center">
                <li className="nav-item d-flex align-items-center">
                  <a className="nav-link text-body font-weight-bold px-0">
                    <span><img src={localLoginUser().url} className="avatar border-radius-lg" alt={localLoginUser().name} /></span> <br />
                    <span >{localLoginUser().name}</span> <br />
                    <button className="btn btn-secondary mt-2 px-3" onClick={onClickOut}>Sign Out</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {
          //End Navbar
        }
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3 d-flex justify-content-between">
                    <h6 className="text-white text-capitalize ps-3">Users List</h6>
                    <button onClick={() => onClickNewUser()} type="button" className="btn btn-primary mx-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Add user
                    </button>
                  </div>
                </div>
                <div className="card-body px-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                          <th className="text-secondary opacity-7"></th>
                        </tr>
                      </thead>
                      <tbody>

                        {
                          localUsers().map((user, index) =>
                            <tr key={index}>
                              <td >
                                <div className="d-flex px-2 py-1">
                                  <div>
                                    <img src={user.url} className="avatar avatar-sm me-3 border-radius-lg" alt={"user" + user.id} />
                                  </div>
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">{user.name}</h6>
                                    <p className="text-xs text-secondary mb-0">{user.email}</p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p className="text-xs font-weight-bold mb-0">{user.job}</p>
                                <p className="text-xs text-secondary mb-0">{user.role}</p>
                              </td>
                              <td className="align-middle text-center text-sm">
                                <span className="badge badge-sm bg-gradient-success">{user.status}</span>
                              </td>

                              <td className="align-middle">
                                <button onClick={() => onClickedit(user)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                  Edit
                                </button>
                                <button type="button" className="btn btn-primary mx-2" onClick={() => onClickDelete(user)} >
                                  delete
                                </button>
                              </td>
                            </tr>
                          )
                        }

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer py-4  ">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <div className="copyright text-center text-sm text-muted text-lg-start">
                    2022 made with  by 
                    <a href="#" className="font-weight-bold" target="_blank">Creative Tim</a>
                    for a better web.
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {
                status? "Add New User":"Edit User"
                }
                </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <EditUser />
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" form="form1" className="btn btn-primary" >Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}



export { Admin }
