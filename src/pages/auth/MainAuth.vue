<template>
    <section class="h-100">
        <div class="container h-100">
            <div class="row justify-content-md-center h-100">
                <router-view></router-view>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "MainAuth"
}
</script>

<style>
body{
    overflow-x: hidden;
}
.card-wrapper{
    margin: 0 auto;
}
</style>