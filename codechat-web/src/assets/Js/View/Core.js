import router from '@/router'
export function GetCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) {
        return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

export async function CheckUser(catId,catName)
{
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
          .then((res) => res.ok ? router.push({name:"Home",params:{categoryId:catId,categoryName:catName}}) : this.$router.push("/"))
          .catch((error) => console.log(error));
      } else {
        router.push("/");        
      }
}