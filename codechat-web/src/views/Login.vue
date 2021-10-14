<template>
  <body class="my-login-page">
    <section class="h-100">
      <div class="container h-100">
        <div class="row justify-content-md-center h-100">
          <div class="card-wrapper">
            <div class="brand">
              <img src="../assets/logo.jpg" alt="logo" />
            </div>
            <div class="card fat">
              <div class="card-body">
                <h4 class="card-title">Login</h4>
                <div class="my-login-validation" novalidate="">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      class="form-control"
                      v-model="Emailaddress"
                      required
                    />
                    <div class="invalid-feedback">Email is invalid</div>
                  </div>

                  <div class="form-group">
                    <label for="password"
                      >Password
                      <a href="forgot.html" class="float-right">
                        Forgot Password?
                      </a>
                    </label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      class="form-control"
                      v-model="Password"
                      required
                    />
                    <div class="invalid-feedback">Password is required</div>
                  </div>

                  <div class="form-group">
                    <div class="custom-checkbox custom-control">
                      <input
                        type="checkbox"
                        name="remember"
                        id="remember"
                        class="custom-control-input"
                      />
                      <label for="remember" class="custom-control-label"
                        >Remember Me</label
                      >
                    </div>
                  </div>
                  <div class="form-group m-0">
                    <button
                      @click="LoginUser()"
                      class="btn btn-primary btn-block"
                    >
                      Login
                    </button>
                  </div>
                  <div class="mt-4 text-center">
                    Don't have an account?
                    <div id="nav">
                      <router-link to="/Register">Create One</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer">C</div>
          </div>
        </div>
      </div>
    </section>
  </body>
  <router-view></router-view>
</template>
<script>
import * as external from "@/assets/external.js";
import VCookies from "vue-cookies";
//import toastr from "vue-toastr";
export default {
  name: "Login",
  data() {
    return {
      Password: "",
      Emailaddress: "",
    };
  },
  methods: {
    async CheckUser() {
      let cookie = this.getCookie("CodeChatCookie");
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
          "http://localhost:7001/api/user/CheckUser",
          requestOptions
        )
          .then((res) => {if(res.ok){ this.$router.push("/Home")}})
          .catch((error) => console.log(error));
      } 
    },
    getCookie(name) {
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
    },

    async LoginUser() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json",'Accept': 'application/json' },
        body: JSON.stringify({
          Email: this.Emailaddress,
          Password: this.Password,
        }),
        mode: "cors",
      };
       await fetch("http://localhost:7001/api/User/Login", requestOptions).then(async (response) => {
          if(response.status == 200)
          {
            let data = await response.json();
            console.log(data);
            VCookies.set("CodeChatCookie", data, "3h", "/");
            this.$router.push("/Home");
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
       
       
               
    },
  },
  beforeMount()
  {
    this.CheckUser();
  },
  mounted() {
    external.Jquery_script();
    external.Popper_script();
    external.Boostrap_script();
    external.head_link1();
    external.head_link2();
  },
  unmounted() {
    external.del_script("https://code.jquery.com/jquery-3.3.1.slim.min.js");
    external.del_script(
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    );
    external.del_script(
      "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    );
    external.del_link(
      "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    );
    external.del_link("/my-login.css");
  },
};
</script>

<style>
body {
  height: 100% !important;
}

body.my-login-page {
  background-color: #ffffff;
  font-size: 14px;
}

.my-login-page .brand {
  width: 90px;
  height: 90px;
  overflow: hidden;
  border-radius: 50%;
  margin: 40px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 1;
}

.my-login-page .brand img {
  width: 100%;
}

.my-login-page .card-wrapper {
  width: 400px;
}

.my-login-page .card {
  border-color: transparent;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.my-login-page .card.fat {
  padding: 10px;
}

.my-login-page .card .card-title {
  margin-bottom: 30px;
}

.my-login-page .form-control {
  border-width: 2.3px;
}

.my-login-page .form-group label {
  width: 100%;
}

.my-login-page .btn.btn-block {
  padding: 12px 10px;
}

.my-login-page .footer {
  margin: 40px 0;
  color: #888;
  text-align: center;
}

@media screen and (max-width: 425px) {
  .my-login-page .card-wrapper {
    width: 90%;
    margin: 0 auto;
  }
}

@media screen and (max-width: 320px) {
  .my-login-page .card.fat {
    padding: 0;
  }

  .my-login-page .card.fat .card-body {
    padding: 15px;
  }
}
</style>
