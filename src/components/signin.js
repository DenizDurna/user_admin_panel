import { useSelector, useDispatch } from 'react-redux'
import { setLogin, setSign, setAlert } from '../stores/generalSlice'
import { setMail, setPassword } from '../stores/signinSlice'
import { localUsers } from "../js/script"
import '../style/Signin.css'

function Signin() {
    const { mail, password } = useSelector((state) => state.signin)
    const dispatch = useDispatch()

    //Login submit function
    const loginOnSubmit = (e) => {
        e.preventDefault()
        let mailcontrol = localUsers().find(asd => asd.email === mail)
        if (mailcontrol !== undefined) {
            if (mailcontrol.password === password) {
                sessionStorage.setItem("storageLoginUser", JSON.stringify(mailcontrol))
                dispatch(setLogin(true))

                dispatch(setAlert(["Login successful", "primary"]))
            } else (
                dispatch(setAlert(["Password is incorrect", "primary"]))
            )

        } else {
            dispatch(setAlert(["e-mail address is incorrect", "primary"]))
        }
    }


    return (
        <div>
            <div className="bg-gray-200">
                <div className="container position-sticky z-index-sticky top-0">
                    <div className="row">
                        <div className="col-12">
                        </div>
                    </div>
                </div>
                <div className="main-content  mt-0">
                    <div className="page-header align-items-start min-vh-100" >
                        <span className="mask bg-gradient-dark opacity-6"></span>
                        <div className="container my-auto">
                            <div className="row">
                                <div className="col-lg-4 col-md-8 col-12 mx-auto">
                                    <div className="card z-index-0 fadeIn3 fadeInBottom">
                                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                            <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                                                <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <form className="text-start" onSubmit={loginOnSubmit}>
                                                <div className="input-group input-group-outline my-3">
                                                    <input type="email" name="email" className="form-control" value={mail} onChange={e => dispatch(setMail(e.target.value))} autoFocus placeholder="Email" maxLength="30" required />
                                                </div>
                                                <div className="input-group input-group-outline mb-3">
                                                    <input type="password" name="password" className="form-control" value={password} onChange={e => dispatch(setPassword(e.target.value))} placeholder="Password" maxLength="20" required />
                                                </div>

                                                <div className="text-center">
                                                    <button type="submit" className="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</button>
                                                </div>
                                                <p className="mt-4 text-sm text-center">
                                                    Don't have an account?
                                                    <span onClick={() => dispatch(setSign(false))} className="text-primary text-gradient font-weight-bold">Sign up</span>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="footer position-absolute bottom-2 py-2 w-100">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="copyright text-center text-sm text-white">
                                            © 2022 made with  by
                                            <a rel="noopener noreferrer" href="https://www.google.com.tr/" className="font-weight-bold text-white" target="_blank"> Creative Tim </a>
                                            for a better web.
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </footer>
                    </div>
                </div>

            </div>




        </div>
    )
}


export { Signin }