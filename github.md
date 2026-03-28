# Subida del proyecto a GitHub

## Repositorio
https://github.com/aldocelle/M7evaluacionmodular

## Comandos ejecutados

```bash
# 1. Inicializar repositorio git
git init

# 2. Agregar el remote de GitHub
git remote add origin https://github.com/aldocelle/M7evaluacionmodular.git

# 3. Agregar todos los archivos al staging
git add -A

# 4. Crear el commit
git commit -m "Evaluación M7: App Vue.js - gestión de usuarios con Vuex, JWT, API y tests"

# 5. Integrar contenido previo del remote
git pull origin main --allow-unrelated-histories --no-rebase --no-edit

# 6. Resolver conflicto en README.md
git checkout --theirs README.md
git add README.md
git commit --no-edit -m "Merge remote README"

# 7. Push al repositorio
git push -u origin main
```

## Archivos subidos (19)

```
cypress.config.js
entrega.md
jest.config.js
package.json
package-lock.json
src/App.vue
src/main.js
src/components/UserDetails.vue
src/components/UserForm.vue
src/components/UserList.vue
src/router/index.js
src/store/index.js
src/views/HomeView.vue
src/views/LoginView.vue
src/views/UserDetailsView.vue
tests/e2e/specs/login.cy.js
tests/e2e/specs/users.cy.js
tests/unit/UserForm.spec.js
tests/unit/UserList.spec.js
```
