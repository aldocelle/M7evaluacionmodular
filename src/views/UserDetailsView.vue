<template>
  <div class="user-details-view">
    <h2>Detalle del Usuario</h2>
    <UserDetails v-if="user" :user="user" @close="goBack" />
    <p v-else>Cargando usuario...</p>
  </div>
</template>

<script>
import UserDetails from '../components/UserDetails.vue'

export default {
  name: 'UserDetailsView',
  components: { UserDetails },
  computed: {
    user() {
      const id = parseInt(this.$route.params.id)
      return this.$store.getters.allUsers.find(u => u.id === id)
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped>
.user-details-view {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
}
</style>
