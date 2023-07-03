import { myAxios } from "./Helper";


export const signin =(user) =>{
    return myAxios.post('/api/v1/employees',user).then((response) => response.json())
}