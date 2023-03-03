//dev
const URL_PREFIX="http://localhost:3001"
//prod
// const URL_PREFIX="https://bg-journal-back.herokuapp.com"

const API = {
    getAllPlays : ()=>{
        return fetch(`${URL_PREFIX}/api/plays`).then(res=>res.json())
    },
    getUserData:id=>{
        return fetch(`${URL_PREFIX}/api/users/${id}`).then(res=>res.json())
    },
    isValidToken:token=>{
        return fetch(`${URL_PREFIX}/api/users/isValidToken`,{
            headers:{
                "authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    login:userObj=>{
        return fetch(`${URL_PREFIX}/api/users/login`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },
    signup:userObj=>{
        return fetch(`${URL_PREFIX}/api/users`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },
    addPlay:(playObj,token)=>{
        return fetch(`${URL_PREFIX}/api/plays`,{
            method:"POST",
            body:JSON.stringify(playObj),
            headers:{
                "Content-Type":"application/json",
                "authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    deletePlay:(playId,token)=>{
        return fetch(`${URL_PREFIX}/api/plays/${playId}`,{
            method:"DELETE",
            headers:{
                "authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    editPlay:(playObj,playId,token)=>{
        return fetch(`${URL_PREFIX}/api/plays/${playId}`,{
            method:"PUT",
            body:JSON.stringify(playObj),
            headers:{
                "Content-Type":"application/json",
                "authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },

}
export default API
