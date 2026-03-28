<template>
  <div class="user-form">
    <h3>Registrar Nuevo Usuario</h3>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input id="name" v-model="name" type="text" placeholder="Nombre del usuario" required />
      </div>
      <div class="form-group">
        <label for="email">Correo:</label>
        <input id="email" v-model="email" type="email" placeholder="correo@ejemplo.com" required />
      </div>
      <button type="submit" data-cy="submit-btn">Registrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  data() {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    submitForm() {
      if (this.name && this.email) {
        this.$emit('user-created', { name: this.name, email: this.email })
        this.name = ''
        this.email = ''
      }
    }
  }
}
</script>

<style scoped>
.user-form {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  background: #f9f9f9;
}
.form-group {
  margin-bottom: 12px;
}
label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
button {
  background: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}
button:hover {
  background: #38a373;
}
</style>
