import {GetCookie} from "./Core";
import VCookies from "vue-cookies";
import router from '@/router'
export async function CheckUser() {
    let cookie = GetCookie("CodeChatCookie");
    console.log(cookie);
    if (cookie !== null) {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + cookie,
        },
        mode: "cors",
      };
      await fetch(
        `http://localhost:7007/user/checkuser`,
        requestOptions
      )
        .then((res) => {if(res.ok){ router.push({name:"Home",params:{categoryId:'48b04268-ce54-4ca4-9446-ce367b58be9f',categoryName:'orhan'}})}})
        .catch((error) => console.log(error));
    } 
  }

export async function LoginUser(emailAddress,password) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json",'Accept': 'application/json' },
      body: JSON.stringify({
        Email: emailAddress,
        Password: password,
      }),
      mode: "cors",
    };
     await fetch(`http://localhost:7007/User/login`, requestOptions).then(async (response) => {
        if(response.status == 200)
        {
          let data = await response.json();
          console.log(data);
          VCookies.set("CodeChatCookie", data, "3h", "/");
          router.push({name:"Home",params:{categoryId:'48b04268-ce54-4ca4-9446-ce367b58be9f',categoryName:'orhan'}});
        }
        else
        {                   
          this.$toast.warning("Username or password is not correct.",{
            position:"top-right",
            duration:1000,
            dismissible:true,              
          });
        } 
     });
}