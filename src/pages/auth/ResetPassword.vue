<template>
    <div class="card-wrapper">
        <div class="brand">
            <img src="img/logo.jpg">
        </div>
        <div class="card fat">
            <div class="card-body">
                <h4 class="card-title">Reset Password</h4>
                <form method="POST">

                    <div class="form-group">
                        <label for="new-password">New Password</label>
                        <input id="new-password" type="password" class="form-control" name="password" required autofocus data-eye>
                        <div class="form-text text-muted">
                            Make sure your password is strong and easy to remember
                        </div>
                    </div>

                    <div class="form-group no-margin">
                        <button type="submit" class="btn btn-primary btn-block">
                            Reset Password
                        </button>
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
    name: "ResetPassword"
}
</script>

<style scoped>

</style>