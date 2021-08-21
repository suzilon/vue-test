<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div @click="change">点击</div>
    <div>{{ params.name }}</div>
    <div>{{ sidebar.name }}</div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
// import { mapGetters } from "vuex"
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      params: {}
    }
  },
  computed: {
    // ...mapGetters(["sidebar"])
    sidebar() {
      return this.$store.getters.sidebar
    }
  },
  methods: {
    change() {
      console.log(this.$store)
      // this.params = this.$store.getters.sidebar
      this.$store.dispatch("app/sideBar", "hello suzilong")
    }
  }
}
</script>
