<template>
  <div class="login-view">
    <h2>Iniciar Sesión - TechSolutions</h2>
    <form @submit.prevent="handleLogin" data-cy="login-form">
      <div class="form-group">
        <label for="email">Correo:</label>
        <input id="email" v-model="email" type="email" placeholder="eve.holt@reqres.in" required data-cy="login-email" />
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input id="password" v-model="password" type="password" placeholder="Contraseña" required data-cy="login-password" />
      </div>
      <p v-if="error" class="error" data-cy="login-error">{{ error }}</p>
      <button type="submit" data-cy="login-btn">Ingresar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async handleLogin() {
      try {
        this.error = ''
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })
        this.$router.push({ name: 'Home' })
      } catch (err) {
        this.error = err.response?.data?.error || 'Error al iniciar sesión'
      }
    }
  }
}
</script>

<style scoped>
.login-view {
  max-width: 400px;
  margin: 80px auto;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
h2 {
  text-align: center;
  color: #35495e;
  margin-bottom: 24px;
}
.form-group {
  margin-bottom: 16px;
}
label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
button {
  width: 100%;
  background: #42b983;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background: #38a373;
}
.error {
  color: #e74c3c;
  text-align: center;
}
</style>
