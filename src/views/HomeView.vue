<template>
  <div class="home-view">
    <div class="header">
      <h2>Gestión de Usuarios - TechSolutions</h2>
      <button @click="handleLogout" class="logout-btn" data-cy="logout-btn">Cerrar Sesión</button>
    </div>

    <UserDetails v-if="selectedUser" :user="selectedUser" @close="selectedUser = null" />

    <UserForm @user-created="handleCreateUser" />

    <UserList :users="users" @view-details="showDetails">
      <template #header>
        <p class="slot-info">Total de usuarios cargados desde la API</p>
      </template>
    </UserList>
  </div>
</template>

<script>
import UserForm from '../components/UserForm.vue'
import UserList from '../components/UserList.vue'
import UserDetails from '../components/UserDetails.vue'

export default {
  name: 'HomeView',
  components: { UserForm, UserList, UserDetails },
  data() {
    return {
      selectedUser: null
    }
  },
  computed: {
    users() {
      return this.$store.getters.allUsers
    }
  },
  created() {
    this.$store.dispatch('fetchUsers')
  },
  methods: {
    async handleCreateUser(userData) {
      await this.$store.dispatch('createUser', userData)
    },
    showDetails(user) {
      this.selectedUser = user
    },
    handleLogout() {
      this.$store.dispatch('logout')
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>
.home-view {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
h2 {
  color: #35495e;
}
.logout-btn {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
.logout-btn:hover {
  background: #c0392b;
}
.slot-info {
  color: #888;
  font-style: italic;
  margin: 4px 0;
}
</style>
