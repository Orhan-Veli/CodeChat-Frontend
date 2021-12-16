<template>
<!--Container -->
<div class="mx-auto bg-grey-lightest">
    <!--Screen-->
    <div class="min-h-screen flex flex-col">
        <!--Header Section Starts Here-->
        <header class="bg-nav">
            <div class="flex justify-between">
                <div class="p-1 mx-3 inline-flex items-center">
                    <h1 class="text-white p-2">CodeChat-Admin</h1>
                </div> 
            </div>
        </header>
        <!--/Header-->

        <div class="flex flex-1">
            <!--Sidebar-->
            <aside id="sidebar" class="bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block">
                <div class="flex">

                </div>
                <ul class="list-reset flex flex-col">
                    <li class=" w-full h-full py-3 px-2 border-b border-light-border ">
                        <a type="button" href="" @click="Admin()"
                           class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i class="fas fa-tachometer-alt float-left mx-2"></i>
                            Dashboard
                            <span><i class="fas fa-angle-right float-right"></i></span>
                        </a>
                    </li>
                    <li class="w-full h-full py-3 px-2 border-b border-light-border bg-white">
                        <a type="button" href="" @click="Table()"
                            class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i class="fas fa-table float-left mx-2"></i>
                            ReportedUsers
                            <span><i class="fa fa-angle-right float-right"></i></span>
                        </a>
                    </li>
                    <li class="w-full h-full py-3 px-2 border-b border-light-border bg-white">
                        <a 
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
            <main class="bg-white-500 flex-1 p-3 overflow-hidden">

                <div class="flex flex-col">
                    <div class="flex flex-1  flex-col md:flex-row lg:flex-row mx-2">
                        <div class="mb-2 border-solid border-gray-300 rounded border shadow-sm w-full">
                            <div class="bg-gray-200 px-2 py-3 border-solid border-gray-200 border-b">
                                Full Table
                            </div>
                            <div class="p-3">
                                <table class="table-responsive w-full rounded">
                                    <thead>
                                      <tr>
                                        <th class="border w-1/4 px-4 py-2">Id</th>
                                        <th class="border w-1/6 px-4 py-2">UserName</th>
                                        <th class="border w-1/6 px-4 py-2">Email</th>
                                        <th class="border w-1/6 px-4 py-2">BanDate</th>
                                        <th class="border w-1/6 px-4 py-2">UserRole</th>
                                        <th class="border w-1/7 px-4 py-2">Status</th>
                                        <th class="border w-1/5 px-4 py-2">Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                        
                                        <tr :key="user.userId" v-for="user in users">
                                            <td class="border px-4 py-2">{{user.userId}}</td>
                                            <td class="border px-4 py-2">{{user.userName}}</td>
                                            <td class="border px-4 py-2">{{user.email}}</td>
                                            <td class="border px-4 py-2">{{user.lockoutDate}}</td>
                                            <td class="border px-4 py-2">{{user.userRole}}</td>
                                            <td class="border px-4 py-2">
                                                <i class="fas fa-check text-green-500 mx-2"></i>
                                            </td>
                                            <td class="border px-4 py-2">
                                                <!-- <a  class="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white">
                                                        <i class="fas fa-eye"></i></a> -->
                                                <span v-if="user.lockoutDate === null">
                                                    <a type="button" @click="BanUser(user.userId)" class="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white">
                                                        <i class="fas fa-ban"></i></a>
                                                </span>                                                
                                                <span v-if="user.userRole == 'Admin'">
                                                    <a type="button" @click="UpdateUser(user.userId,user.userRole)" class="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-red-500">
                                                    <i class="fas fa-angle-double-up"></i>
                                                </a>
                                                </span>
                                                <span v-else>
                                                <a type="button" @click="UpdateUser(user.userId,user.userRole)" class="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-green-500">
                                                    <i class="fas fa-angle-double-up"></i>
                                                </a>
                                                </span>
                                                
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <!--/Grid Form-->
                </div>
            </main>
            <!--/Main-->
        </div>
        <!--Footer-->
        <footer class="bg-grey-darkest text-white p-2">
            <div class="flex flex-1 mx-auto">&copy; My Design</div>
        </footer>
        <!--/footer-->

    </div>

</div>
</template>

<script>
export default
{
    name:'UsersTable',
    data()
    {
        return{
            users:[]
        }
    },
    methods:
    {
        Admin()
        {
            this.$router.push("/Admin");
        },
        Table()
        {
            this.$router.push("/ReportedUsersTable");
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
        async Users()
        {
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
            .then(data => this.users = data.data)
            .catch(error => console.log(error))
            console.log(this.users);
        },
        async UpdateUser(id,userRole)
        {
            const cookie = this.getCookie("CodeChatCookie");
            if(id == null || userRole == null)
            {
                return;
            }
            const requestOptions = {
                method:"PUT",
                headers:{
                    "Content-type":"application/json",
                    "Authorization": "Bearer " + cookie,
                    },
                body:JSON.stringify({UserId:id,UserRole:userRole}),
                mode:"cors"
            }
            await fetch("http://localhost:7007/user/updateuserrole",requestOptions)
            .then(response => {
                if(response.status == 200)
                {
                    location.reload();
                }               
                })
            .catch(error => console.log(error))
        },
        async BanUser(userId)
        {
            const cookie = this.getCookie("CodeChatCookie");
            if(userId == null)
            {
                return;
            }
            const requestOptions = {
                method: "PUT",
                headers: {
                    "Content-type":"application/json",
                    "Authorization": "Bearer " + cookie,
                    },
                mode:"cors"
            }
            await fetch(`http://localhost:7007/user/${userId}`,requestOptions)
            .then(response => {
                if(response.status == 200)
                {
                    location.reload();
                }  
                })
            .catch(error => console.log(error))
        }
    },
    async created()
    {
    const cookie = this.getCookie("CodeChatCookie");
    if(cookie == null)
    {
        this.$router.push("/");
    }
    const requestOptions = {
    method: "POST",
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
    })
    .catch((error) => {
        console.error("Error:", error);
        //this.$router.push("/");
      });
    console.log(this.userRole);
    },

}
</script>

<!--<style>
@import '../assets/styles.css';
@import '../assets/all.css';
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700,700i");
</>-->
<style scoped src="../assets/styles.css"></style>
<style scoped src="../assets/all.css"></style>