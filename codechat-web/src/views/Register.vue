<template>
  <body class="my-login-page">
    <section class="h-100">
      <div class="container h-100">
        <div class="row justify-content-md-center h-100">
          <div class="card-wrapper">
            <div class="brand">
              <img src="../assets/logo.jpg" />
            </div>
            <div class="card fat">
              <div class="card-body">
                <h4 class="card-title">Register</h4>
                <div class="my-login-validation" novalidate="">
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      class="form-control"
                      name="name"
                      v-model="UserName"
                      required
                      autofocus
                    />
                    <div class="invalid-feedback">What's your name?</div>
                  </div>

                  <div class="form-group">
                    <label for="email">E-Mail Address</label>
                    <input
                      id="email"
                      type="email"
                      class="form-control"
                      name="email"
                      v-model="Email"
                      required
                    />
                    <div class="invalid-feedback">Your email is invalid</div>
                  </div>

                  <div class="form-group">
                    <label for="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      class="form-control"
                      name="password"
                      v-model="Password"
                      required
                      data-eye
                    />
                    <div class="invalid-feedback">Password is required</div>
                  </div>

                  <div class="form-group">
                    <div class="custom-checkbox custom-control">
                      <input
                        type="checkbox"
                        name="agree"
                        id="agree"
                        class="custom-control-input"
                        required=""
                      />
                      <label for="agree" class="custom-control-label"
                        >I agree to the
                        <a href="#">Terms and Conditions</a></label
                      >
                      <div class="invalid-feedback">
                        You must agree with our Terms and Conditions
                      </div>
                    </div>
                  </div>

                  <div class="form-group m-0">
                    <button
                      @click="RegisterUser()"
                      class="btn btn-primary btn-block"
                    >
                      Register
                    </button>
                  </div>
                  <div class="mt-4 text-center">
                    Already have an account?
                    <router-link to="/">Login</router-link>
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
export default {
  name: "Register",
  data() {
    return {
      UserName: "",
      Email: "",
      Password: "",
    };
  },
  methods: {
    async RegisterUser() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          UserName: this.UserName,
          Email: this.Email,
          Password: this.Password,
        }),
        mode: "cors",
      };
      await fetch("http://localhost:7001/api/User/Sign", requestOptions)
        .then((response) => {
          if (response.ok) {
            this.$router.push("/");
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
    },
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
  height: 100%;
}

body.my-login-page {
  background-color: #f7f9fb;
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
