import router from '@/router'
export async function LogOut()
{
const requestOptions={
    method:"POST",
}
await fetch(`http://localhost:7007/user/logout`, requestOptions)
.then((response) => {
    if(response)
    {
        DeleteCookie("CodeChatCookie");
        router.push("/");
    }
})
.catch((error) => console.log(error));
}
export async function DeleteCookie(name) 
{
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}