<template>
    <div class="container body">
        <div class="main_container">
            <CompSideBar></CompSideBar>
            <!-- top navigation -->
            <TopNav></TopNav>
            <!-- /top navigation -->
            <!-- page content -->
            <router-view></router-view>
            <!-- /page content -->
            <!-- footer -->
            <CompFooter></CompFooter>
            <!-- /footer -->
        </div>
    </div>
</template>

<script>
import CompSideBar from "@/components/admin/CompSideBar";
import TopNav from "@/components/admin/TopNav";
import CompFooter from "@/components/admin/CompFooter";
export default {
    name: "MainAdmin",
    components: {
        CompSideBar,
        TopNav,
        CompFooter
    }
}
</script>

<style scoped>

</style>