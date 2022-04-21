<template>
    <div class="container body">
        <div class="main_container">
            <!-- page content -->
            <div class="col-md-12">
                <div class="col-middle">
                    <div class="text-center text-center">
                        <h1 class="error-number">404</h1>
                        <h2>Sorry but we couldn't find this page</h2>
                        <p>This page you are looking for does not exist <a href="#">Report this?</a>
                        </p>
                        <div class="mid_center">
                            <router-link to="/" tag="button" class="btn btn-round btn-default">Back!</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /page content -->
        </div>
    </div>
</template>

<script>
export default {
    name: "page404"
}
</script>

<style scoped>

</style>