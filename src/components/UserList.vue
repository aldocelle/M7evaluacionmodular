<template>
  <div class="user-list">
    <h3>Usuarios Registrados ({{ users.length }})</h3>
    <slot name="header"></slot>
    <ul>
      <li v-for="user in users" :key="user.id" class="user-item" data-cy="user-item">
        <slot name="user" :user="user">
          <span class="user-name">{{ user.first_name || user.name }}</span>
          <span class="user-email">{{ user.email }}</span>
        </slot>
        <button @click="$emit('view-details', user)" class="details-btn">Ver Detalles</button>
      </li>
    </ul>
    <slot name="footer"></slot>
    <p v-if="users.length === 0">No hay usuarios registrados.</p>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    users: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  emits: ['view-details']
}
</script>

<style scoped>
.user-list {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
}
ul {
  list-style: none;
  padding: 0;
}
.user-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.user-name {
  font-weight: bold;
  min-width: 120px;
}
.user-email {
  color: #666;
  flex: 1;
}
.details-btn {
  background: #35495e;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}
.details-btn:hover {
  background: #2c3e50;
}
</style>
