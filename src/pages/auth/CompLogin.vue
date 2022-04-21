<template>
    <div class="card-wrapper">
        <div class="brand">
            <img src="img/logo.jpg">
        </div>
        <div class="card fat">
            <div class="card-body">
                <h4 class="card-title">Login</h4>
                <form method="POST">

                    <div class="form-group">
                        <label for="email">E-Mail Address</label>

                        <input id="email" type="email" class="form-control" name="email" value="" required autofocus>
                    </div>

                    <div class="form-group">
                        <label for="password">
                            <router-link to="/forgot-password" class="float-right">Password Forgot Password?</router-link>
                        </label>
                        <input id="password" type="password" class="form-control" name="password" required data-eye>
                    </div>

                    <div class="form-group">
                        <label>
                            <input type="checkbox" name="remember"> Remember Me
                        </label>
                    </div>

                    <div class="form-group no-margin">
                        <button type="submit" class="btn btn-primary btn-block">
                            Login
                        </button>
                    </div>
                    <div class="margin-top20 text-center">
                        Don't have an account? <router-link to="/register">Create One</router-link>
                    </div>
                </form>
            </div>
        </div>
        <div class="footer">
            Copyright &copy; Your Company 2017
        </div>
    </div>
</template>

<script>
export default {
    name: "CompLogin"
}
</script>

<style>

</style>