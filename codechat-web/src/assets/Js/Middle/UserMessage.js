import { data } from "jquery";
import { GetCookie } from "../View/Core";
export async function GetUserId() {
    let userId = "";
    const cookie = GetCookie("CodeChatCookie");
    console.log(cookie);
    if (cookie !== null) {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + cookie,
        },
        mode: "cors",
      };
      await fetch(
        `http://localhost:7007/user/getuserid`,
        requestOptions
      )
        .then(async (res) => res=res.text())
        .then(data => userId = data)
        .catch((error) => console.log(error));
    }
    return userId; 
  }

export  async function ReportUser(id,userId)
  {
    const cookie = GetCookie("CodeChatCookie");
    const requestOptions =
    {
      method:"POST",
      headers: 
      { 
        "Content-Type":"application/json",
        "Authorization": "Bearer " + cookie, 
      },
      body:JSON.stringify({MessageId:id,UserId:userId})
    };
    await fetch(`http://localhost:7007/message/reportmessage`,requestOptions)
    .then(response => {
      response.json()
      this.$toast.warning("User reported.",{
            position:"top-left", 
            duration:1000,
            dismissible:true,              
          });
      })
    .catch(error => {
      console.log(error);
    })
  }