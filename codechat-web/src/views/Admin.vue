<template>
<!--Container -->
<div class="mx-auto bg-grey-400">
    <!--Screen-->
    <div class="min-h-screen flex flex-col">
        <!--Header Section Starts Here-->
        <header class="bg-nav">
            <div class="flex justify-between">
                <div class="p-1 mx-3 inline-flex items-center">
                    <a type="button" @click="ReturnHome()" href="#">
                        <h1 class="text-white p-2">CodeChat-Admin</h1>
                    </a>                  
                </div>               
            </div>
        </header>
        <!--/Header-->

        <div class="flex flex-1">
            <!--Sidebar-->
            <aside id="sidebar" class="bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block">
                <ul class="list-reset flex flex-col">
                    <li class=" w-full h-full py-3 px-2 border-b border-light-border bg-white">
                        <a 
                           class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i class="fas fa-tachometer-alt float-left mx-2"></i>
                            Dashboard
                            <span><i class="fas fa-angle-right float-right"></i></span>
                        </a>
                    </li>                   
                   
                    <li class="w-full h-full py-3 px-2 border-b border-light-border">
                        <a type="button" href="" @click="Table()"
                           class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i class="fas fa-table float-left mx-2"></i>
                            ReportedUsers
                            <span><i class="fa fa-angle-right float-right"></i></span>
                        </a>
                    </li>
                      <li class="w-full h-full py-3 px-2 border-b border-light-border bg-white">
                        <a type="button" href="" @click="UsersTable()"
                            class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i class="fas fa-table float-left mx-2"></i>
                            Users
                            <span><i class="fa fa-angle-right float-right"></i></span>
                        </a>
                    </li>                                                   
                </ul>

            </aside>
            <!--/Sidebar-->
            <!--Main-->
            <main class="bg-white-300 flex-1 p-3 overflow-hidden">

                <div class="flex flex-col">
                    <!-- Stats Row Starts Here -->
                    <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                        <div class="shadow-lg bg-red-vibrant border-l-8 hover:bg-red-vibrant-dark border-red-vibrant-dark mb-2 p-2 md:w-1/4 mx-2">
                            <div class="p-4 flex flex-col">
                                <a href="#" class="no-underline text-white text-2xl">
                                    {{totalUser}}
                                </a>
                                <a href="#" class="no-underline text-white text-lg">
                                    Total User
                                </a>
                            </div>
                        </div>

                        <div class="shadow bg-info border-l-8 hover:bg-info-dark border-info-dark mb-2 p-2 md:w-1/4 mx-2">
                            <div class="p-4 flex flex-col">
                                <a href="#" class="no-underline text-white text-2xl">
                                    {{totalReportedUser}}
                                </a>
                                <a href="#" class="no-underline text-white text-lg">
                                    Reported Users
                                </a>
                            </div>
                        </div>

                        <div class="shadow bg-warning border-l-8 hover:bg-warning-dark border-warning-dark mb-2 p-2 md:w-1/4 mx-2">
                            <div class="p-4 flex flex-col">
                                <a href="#" class="no-underline text-white text-2xl">
                                    900
                                </a>
                                <a href="#" class="no-underline text-white text-lg">
                                    Total Users
                                </a>
                            </div>
                        </div>

                        <div class="shadow bg-success border-l-8 hover:bg-success-dark border-success-dark mb-2 p-2 md:w-1/4 mx-2">
                            <div class="p-4 flex flex-col">
                                <a href="#" class="no-underline text-white text-2xl">
                                    500
                                </a>
                                <a href="#" class="no-underline text-white text-lg">
                                    Total Products
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- /Stats Row Ends Here -->

                    <!-- Card Sextion Starts Here -->
                    <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">

                        <!-- card -->

                        <div class="rounded overflow-hidden shadow bg-white mx-2 w-full">
                            <div class="px-6 py-2 border-b border-light-grey">
                                <div class="font-bold text-xl">Trending Categories</div>
                            </div>
                            <div class="table-responsive">
                                <table class="table text-grey-darkest">
                                    <thead class="bg-grey-dark text-white text-normal">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Item</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Current</th>
                                        <th scope="col">Change</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>
                                            <button class="bg-blue-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
                                                Twitter
                                            </button>
                                        </td>
                                        <td>4500</td>
                                        <td>4600</td>
                                        <td>
                                            <span class="text-green-500"><i class="fas fa-arrow-up"></i>5%</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>
                                            <button class="bg-primary hover:bg-primary-dark text-white font-light py-1 px-2 rounded-full">
                                                Facebook
                                            </button>
                                        </td>
                                        <td>10000</td>
                                        <td>3000</td>
                                        <td>
                                            <span class="text-red-500"><i class="fas fa-arrow-down"></i>65%</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">3</th>
                                        <td>
                                            <button class="bg-success hover:bg-success-dark text-white font-light py-1 px-2 rounded-full">
                                                Amazon
                                            </button>
                                        </td>
                                        <td>10000</td>
                                        <td>3000</td>
                                        <td>
                                            <span class="text-red-500"><i class="fas fa-arrow-down"></i>65%</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th scope="row">4</th>
                                        <td>
                                            <button class="bg-blue-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
                                                Microsoft
                                            </button>
                                        </td>
                                        <td>10000</td>
                                        <td>3000</td>
                                        <td>
                                            <span class="text-green-500"><i class="fas fa-arrow-up"></i>65%</span>
                                        </td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- /card -->

                    </div>
                    <!-- /Cards Section Ends Here -->
                </div>
            </main>
            <!--/Main-->
        </div>
        <!--Footer-->
        <footer class="bg-grey-darkest text-white p-2">
            <div class="flex flex-1 mx-auto">&copy; My Design</div>
            <div class="flex flex-1 mx-auto">Distributed by:  <a href="https://themewagon.com/" target=" _blank">Themewagon</a></div>
        </footer>
        <!--/footer-->

    </div>

</div>
</template>

<script>
export default{
    name:'Admin',
    data(){
        return{
            totalUser:0,
            totalReportedUser:0
        }
    },
    methods:
    {
        Table()
        {
            this.$router.push("/ReportedUsersTable");
        }, 
        UsersTable()
        {
            this.$router.push("/UsersTable");
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
        ReturnHome()
        {
            this.$router.push({name:"Home",params:{categoryId:'48b04268-ce54-4ca4-9446-ce367b58be9f',categoryName:'orhan'}});
        },
        async Users()
        {
            this.totalUser=undefined;
            const cookie = this.getCookie("CodeChatCookie");
            this.users = [];
            const requestOptions = {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + cookie,
            },
            mode: "cors",
        };
            await fetch("http://localhost:7007/user/getalluser",requestOptions)
            .then(response => response.json())
            .then(data => this.totalUser = data.data.length)
            .catch(error => console.log(error))
            console.log(this.totalUser);
        },
        async GetReportedUser()
        {
            const cookie = this.getCookie("CodeChatCookie");
            this.totalReportedUser = 0;
            const requestOptions = {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + cookie,
            },
            mode: "cors",
        };
            await fetch("http://localhost:7007/message/getallreportedmessages",requestOptions)
            .then(response => response.json())
            .then(data => this.totalReportedUser = data.length)
            .catch(error => console.log(error))
            console.log(this.totalReportedUser);
        },
    },
    async created()
    {
    const cookie = this.getCookie("CodeChatCookie");
    if(cookie == null)
    {
        this.$router.push("/");
    }
    const requestOptions = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + cookie,
    },
    mode: "cors",
    };
    await fetch("http://localhost:7007/user/getuserrole", requestOptions)
    .then((response) => response = response.text())
    .then(json => {
        if(json != "Admin")
        {
            this.$router.push("/");
        }
        this.Users();
        this.GetReportedUser();
    })
    .catch((error) => {
        console.error("Error:", error);
        this.$router.push("/");
      });
    console.log(this.userRole);
    },

}

</script>
<!--
<style scoped>
@import '../assets/styles.css';
@import '../assets/all.css';
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700,700i");
<style scoped src="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700,700i"></style>

</style>-->
<style scoped src="../assets/styles.css"></style>
<style scoped src="../assets/all.css"></style>
