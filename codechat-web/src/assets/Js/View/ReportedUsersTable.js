import { GetCookie } from "./Core";
import router from '@/router'
export async function GetUserRole()
{
    let reportedMessages = [];
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
        reportedMessages = GetReportedUser();       
    })
    .catch((error) => {
        console.error("Error:", error);
        router.push("/");
      });
      return reportedMessages;
}

export async function GetReportedUser()
        {
            const cookie = GetCookie("CodeChatCookie");
            let reportedMessages = [];
            const requestOptions = {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + cookie,
            },
            mode: "cors",
        };
        await fetch(`http://localhost:7007/message/getallreportedmessages`,requestOptions)
            .then(response => response.json())
            .then(data => reportedMessages = data)
            .catch(error => console.log(error))
            console.log(reportedMessages);
            return reportedMessages;
}
export async function DeleteMessage(messageId)
    {
        const cookie = GetCookie("CodeChatCookie");
        if(messageId == null)
        {
            return;
        }
        const requestOptions = {
            method:"DELETE",
            headers:{
                "Content-type":"application/json",
                "Authorization": "Bearer " + cookie,
                },
            mode:"cors"
        }
        await fetch(`http://localhost:7007/message/${messageId}`,requestOptions)
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