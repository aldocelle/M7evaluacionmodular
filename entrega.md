# Evaluación Final del Módulo 7

## Actividad: Desarrollo e implementación de una aplicación Vue.js

**Empresa:** TechSolutions  
**Objetivo:** Aplicar Vue.js en una aplicación completa con API, Vuex y pruebas.

---

## 1. Configuración del Proyecto

- [x] Proyecto creado con Vue-CLI (Vue 3)
- [x] Dependencias instaladas: Vue Router, Vuex, Axios, Jest y Cypress

**Archivos:** `package.json`

---

## 2. Estructura de Componentes

- [x] **UserForm.vue** → Formulario para registrar usuarios con nombre y correo
- [x] **UserList.vue** → Lista de usuarios registrados
- [x] **UserDetails.vue** → Vista con información detallada de un usuario
- [x] **App.vue** → Manejo del estado global y renderizado de componentes

### Requisitos de comunicación entre componentes:

- [x] Props para enviar datos a los componentes hijos (`users` en UserList, `user` en UserDetails)
- [x] Eventos emitidos desde hijos al padre con `$emit` (`user-created`, `view-details`, `close`)
- [x] Slots para personalizar contenido en UserList.vue (`header`, `footer`, `user`)

**Archivos:** `src/components/UserForm.vue`, `src/components/UserList.vue`, `src/components/UserDetails.vue`

---

## 3. Consumo de API con Axios

- [x] GET a `https://reqres.in/api/users` para obtener usuarios y mostrarlos en UserList.vue
- [x] POST a `https://reqres.in/api/users` para crear nuevos usuarios desde el formulario
- [x] Fallback con datos locales si la API no responde

**Archivos:** `src/store/index.js` (actions: `fetchUsers`, `createUser`)

---

## 4. Gestión de Estado con Vuex

- [x] Store implementado con Vuex para manejar el estado de usuarios
- [x] **state:** `users`, `token`
- [x] **mutations:** `SET_USERS`, `ADD_USER`, `SET_TOKEN`
- [x] **actions:** `fetchUsers`, `createUser`, `login`, `logout`
- [x] **getters:** `allUsers`, `isAuthenticated`, `userCount`
- [x] Sincronización de Vuex con las peticiones Axios

**Archivos:** `src/store/index.js`

---

## 5. Autenticación con JWT

- [x] Simulación de autenticación usando JWT (POST a `/api/login` con fallback local)
- [x] Token guardado en `localStorage`
- [x] Rutas protegidas con navigation guard en Vue Router (`meta.requiresAuth`)
- [x] Redirección a `/login` si no hay token activo

**Archivos:** `src/store/index.js`, `src/router/index.js`, `src/views/LoginView.vue`

---

## 6. Pruebas Unitarias y End-to-End

### Pruebas Unitarias (Jest + Vue Test Utils):

- [x] `UserForm.spec.js` — Verifica que emite correctamente los datos del formulario
- [x] `UserList.spec.js` — Verifica que muestra usuarios correctamente y renderiza slots

**Resultado:** 9 tests pasando

### Pruebas E2E (Cypress):

- [x] `login.cy.js` — Valida inicio de sesión y acceso a la aplicación
- [x] `users.cy.js` — Comprueba agregar nuevos usuarios y verlos en la lista

**Archivos:** `tests/unit/`, `tests/e2e/specs/`

---

## Comandos

```bash
npm run serve        # Servidor de desarrollo
npm run build        # Build de producción
npm run test:unit    # Pruebas unitarias (Jest)
npm run test:e2e     # Pruebas E2E (Cypress)
```

## Credenciales de prueba

- **Email:** eve.holt@reqres.in
- **Password:** cityslicka

> También acepta cualquier email/contraseña válidos (simulación JWT local).
