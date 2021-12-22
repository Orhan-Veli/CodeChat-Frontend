import { GetCookie} from "../View/Core";
export async function GetUserRole()
{
    let userRole = "";
    const cookie = GetCookie("CodeChatCookie");
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
    .then(data => userRole = data)
    .catch((error) => {
        console.error("Error:", error);
    });
    return userRole;
}