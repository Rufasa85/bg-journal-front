const URL_PREFIX="http://localhost:3001"

const API = {
    getAllPlays : ()=>{
        return fetch(`${URL_PREFIX}/api/plays`).then(res=>res.json())
    }
}
export default API