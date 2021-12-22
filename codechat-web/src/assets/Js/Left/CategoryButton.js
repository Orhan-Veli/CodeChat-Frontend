
import { GetCookie } from "../View/Core";
import router from '@/router'

export async function GetAllCategory(){
    let categories = {};
    const cookie = GetCookie("CodeChatCookie");
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + cookie, 
      },
      mode: "cors",
    };
    await fetch(`http://localhost:7007/category/getall`, requestOptions)
      .then((response) => response.json())
      .then((data) => (categories = data.data))
      .catch((error) => {
        console.error("Error:", error);
      });
    return categories;
}

export function RouteCategory(categoryId,categoryName)
{
  if(categoryId != undefined || categoryId != '' || categoryId != null)
  {
    router.push({name:"Home",params:{categoryId:categoryId,categoryName:categoryName}})    
  }
}