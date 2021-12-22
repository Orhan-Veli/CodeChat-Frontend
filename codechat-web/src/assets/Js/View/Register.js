import router from '@/router'
export async function RegisterUser(userName,email,password) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        UserName: userName,
        Email: email,
        Password: password,
      }),
      mode: "cors",
    };
    await fetch(`http://localhost:7007/User/sign`, requestOptions)
      .then((response) => {
        if (response.ok) {
          router.push("/");
        }
        else
        {
           this.$toast.warning("Username or email is already taken.",{
            position:"top-right",
            duration:1000,
            dismissible:true,              
          });
        }
      })
      .catch((error) => console.log("error: ", error));
  }