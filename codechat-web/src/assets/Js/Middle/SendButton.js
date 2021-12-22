import { GetCookie } from "../View/Core";
import router from '@/router'
export async function SendParam(messageText,categoryId,categoryName) {
    if(messageText == null || messageText == "" || messageText == undefined)
    {
       this.$toast.warning("Please write reply",{
            position:"top-left",
            duration:1000,
            dismissible:true,              
          });
      return;
    }
    console.log(messageText);
    console.log(categoryId);
    console.log(categoryName);
    let cookie = GetCookie("CodeChatCookie");
    const requestOptions = {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": "Bearer " + cookie, 
        },
      body: JSON.stringify({
        Text: messageText,
        CategoryId: categoryId,
        CategoryName: categoryName,
      }),
      mode: "cors",
    };
    await fetch(`http://localhost:7007/message/createmessage`, requestOptions)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
    