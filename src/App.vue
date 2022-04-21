<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'App',
  computed: {
    ...mapState({
      count: state => state.count
    })

  },
  components: {

  }
}
</script>

<style>

</style>
