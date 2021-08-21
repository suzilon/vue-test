<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ sidebar.name }}</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
  name: 'About',
  components: {},
  data() {
    return {
      params: {}
    }
  },
  computed: {
    ...mapGetters(["sidebar"])
    // name() {
    //   return this.$store.getters.sidebar.name
    // }
  },
  methods: {
  }
}
</script>
