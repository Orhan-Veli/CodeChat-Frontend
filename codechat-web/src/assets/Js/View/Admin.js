import { GetCookie } from "./Core";
import router from '@/router'
export async function GetUserRole()
{
    const cookie = GetCookie("CodeChatCookie");
    if(cookie == null)
    {
        router.push("/");
    }
    const requestOptions = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + cookie,
    },
    mode: "cors",
    };
    await fetch("http://localhost:7007/user/getuserrole", requestOptions)
    .then((response) => response = response.text())
    .then(json => {
        if(json != "Admin")
        {
            router.push("/");
        }    
    })
    .catch((error) => {
        console.error("Error:", error);
        router.push("/");
      });     
}
export async function GetUsers() {            
            const cookie = GetCookie("CodeChatCookie");  
            let count =0;          
            const requestOptions = {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + cookie,
            },
            mode: "cors",
        };
            await fetch("http://localhost:7007/user/getalluser",requestOptions)
            .then(response => response.json())
            .then(data => count = data.data.length)
            .catch(error => console.log(error))
            return count;
}

export async function GetReportedUser() {
    const cookie = GetCookie("CodeChatCookie");
    let count =0;  
    const requestOptions = {
    method: "GET",
    headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + cookie,
    },
    mode: "cors",
};
    await fetch("http://localhost:7007/message/getallreportedmessages",requestOptions)
    .then(response => response.json())
    .then(data => count = data.length)
    .catch(error => console.log(error))
    return count;
}
