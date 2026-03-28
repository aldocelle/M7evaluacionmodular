<template>
  <div class="user-details" v-if="user">
    <h3>Detalles del Usuario</h3>
    <div class="detail-card">
      <img v-if="user.avatar" :src="user.avatar" :alt="user.first_name || user.name" class="avatar" />
      <div class="info">
        <p><strong>ID:</strong> {{ user.id }}</p>
        <p><strong>Nombre:</strong> {{ user.first_name || user.name }} {{ user.last_name || '' }}</p>
        <p><strong>Correo:</strong> {{ user.email }}</p>
      </div>
    </div>
    <button @click="$emit('close')" class="close-btn">Cerrar</button>
  </div>
</template>

<script>
export default {
  name: 'UserDetails',
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  emits: ['close']
}
</script>

<style scoped>
.user-details {
  padding: 20px;
  border: 2px solid #42b983;
  border-radius: 8px;
  margin-bottom: 20px;
  background: #f0fff4;
}
.detail-card {
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 16px 0;
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.info p {
  margin: 4px 0;
}
.close-btn {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
.close-btn:hover {
  background: #c0392b;
}
</style>
