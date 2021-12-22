import { GetCookie } from "./Core";
import router from '@/router'
export async function GetUserRole()
{
    let users = [];
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
    await fetch(`http://localhost:7007/user/getuserrole`, requestOptions)
    .then((response) => response = response.text())
    .then(json => {
        if(json != "Admin")
        {
            router.push("/");
        }
        users = Users();       
    })
    .catch((error) => {
        console.error("Error:", error);
      });
    console.log();
    return users;
}

export async function Users()
{
    const cookie = GetCookie("CodeChatCookie");
    let users = [];
    const requestOptions = {
    method: "GET",
    headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + cookie,
    },
    mode: "cors",
};
    await fetch(`http://localhost:7007/user/getalluser`,requestOptions)
    .then(response => response.json())
    .then(data => users = data.data)
    .catch(error => console.log(error))
    console.log(users);
    return users;
}
export async function UpdateUser(id,userRole)
{
    const cookie = GetCookie("CodeChatCookie");
    if(id == null || userRole == null)
    {
        return;
    }
    const requestOptions = {
        method:"PUT",
        headers:{
            "Content-type":"application/json",
            "Authorization": "Bearer " + cookie,
            },
        body:JSON.stringify({UserId:id,UserRole:userRole}),
        mode:"cors"
    }
    await fetch(`http://localhost:7007/user/updateuserrole`,requestOptions)
    .then(response => {
        if(response.status == 200)
        {
            location.reload();
        }               
        })
    .catch(error => console.log(error))
}
export async function BanUser(userId)
{
    const cookie = GetCookie("CodeChatCookie");
    if(userId == null)
    {
        return;
    }
    const requestOptions = {
        method: "PUT",
        headers: {
            "Content-type":"application/json",
            "Authorization": "Bearer " + cookie,
            },
        mode:"cors"
    }
    await fetch(`http://localhost:7007/user/${userId}`,requestOptions)
    .then(response => {
        if(response.status == 200)
        {
            location.reload();
        }  
        })
    .catch(error => console.log(error))
}