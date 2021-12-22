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
                        <a 
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
                                        <th class="border w-1/6 px-4 py-2">Text</th>
                                        <th class="border w-1/6 px-4 py-2">CategoryName</th>
                                        <th class="border w-1/7 px-4 py-2">Status</th>
                                        <th class="border w-1/5 px-4 py-2">Actions</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                         <tr :key="message.id" v-for="message in reportedMessages">
                                            <td class="border px-4 py-2">{{message.id}}</td>
                                            <td class="border px-4 py-2">{{message.userName}}</td>
                                            <td class="border px-4 py-2">{{message.text}}</td>
                                            <td class="border px-4 py-2">{{message.categoryName}}</td>
                                            <td class="border px-4 py-2">
                                                <i class="fas fa-check text-green-500 mx-2"></i>
                                            </td>
                                            <td class="border px-4 py-2">
                                                <a  class="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white">
                                                        <i class="fas fa-eye"></i></a>
                                                <a type="button" @click="BanUser(message.userId)" class="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-white">
                                                        <i class="fas fa-ban"></i></a>
                                                <a type="button" @click="DeleteMessage(message.id)" class="bg-teal-300 cursor-pointer rounded p-1 mx-1 text-red-500">
                                                        <i class="fas fa-trash"></i>
                                                </a>
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
import {GetUserRole,BanUser,DeleteMessage} from '@/assets/Js/View/ReportedUsersTable'
export default
{
    name:'ReportedUsersTable',
    data()
    {
        return{
            reportedMessages:[]
        }
    },
    methods:
    {
        Admin()
        {
            this.$router.push("/Admin");
        },
        UsersTable()
        {
            this.$router.push("/UsersTable");
        },
        BanUser(userId)
        {
            BanUser(userId)
        },
        DeleteMessage(messageId)
        {
            DeleteMessage(messageId)
        }
        
    },
    async created()
    {
        this.reportedMessages = GetUserRole();
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