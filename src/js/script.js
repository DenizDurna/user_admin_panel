import list from "../constants/users.json"

let localUsers=() => JSON.parse(localStorage.getItem("localUsers"));
let localLoginUser =() => JSON.parse(sessionStorage.getItem("storageLoginUser"));

const createUserFunc=(name,email,job,role,url,password)=>{
    return{
        name,
        email,
          job,
         role,
         status: "OFFLINE",
         url,
         password
       }
}

function closeNodal (){
  document.querySelector(".btn-close").click()
}

export { localUsers, localLoginUser,list,createUserFunc,closeNodal }