<template>
    <div class="card-wrapper">
        <div class="brand">
            <img src="img/logo.jpg">
        </div>
        <div class="card fat">
            <div class="card-body">
                <h4 class="card-title">Register</h4>
                <form method="POST">

                    <div class="form-group">
                        <label for="name">Name</label>
                        <input id="name" type="text" class="form-control" name="name" required autofocus>
                    </div>

                    <div class="form-group">
                        <label for="email">E-Mail Address</label>
                        <input id="email" type="email" class="form-control" name="email" required>
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input id="password" type="password" class="form-control" name="password" required data-eye>
                    </div>

                    <div class="form-group">
                        <label>
                            <input type="checkbox" name="aggree" value="1"> I agree to the Terms and Conditions
                        </label>
                    </div>

                    <div class="form-group no-margin">
                        <button type="submit" class="btn btn-primary btn-block">
                            Register
                        </button>
                    </div>
                    <div class="margin-top20 text-center">
                        Already have an account? <router-link to="/">Login</router-link>
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
    name: "CompRegister"
}
</script>

<style scoped>

</style>