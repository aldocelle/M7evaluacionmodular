import { mount } from '@vue/test-utils'
import UserList from '@/components/UserList.vue'

const mockUsers = [
  { id: 1, first_name: 'George', email: 'george@reqres.in' },
  { id: 2, first_name: 'Janet', email: 'janet@reqres.in' },
  { id: 3, first_name: 'Emma', email: 'emma@reqres.in' }
]

describe('UserList.vue', () => {
  it('muestra la lista de usuarios correctamente', () => {
    const wrapper = mount(UserList, {
      props: { users: mockUsers }
    })

    const items = wrapper.findAll('.user-item')
    expect(items.length).toBe(3)
  })

  it('muestra el nombre y email de cada usuario', () => {
    const wrapper = mount(UserList, {
      props: { users: mockUsers }
    })

    expect(wrapper.text()).toContain('George')
    expect(wrapper.text()).toContain('george@reqres.in')
    expect(wrapper.text()).toContain('Janet')
    expect(wrapper.text()).toContain('janet@reqres.in')
  })

  it('muestra mensaje cuando no hay usuarios', () => {
    const wrapper = mount(UserList, {
      props: { users: [] }
    })

    expect(wrapper.text()).toContain('No hay usuarios registrados')
  })

  it('emite view-details al hacer clic en el botón', async () => {
    const wrapper = mount(UserList, {
      props: { users: mockUsers }
    })

    await wrapper.find('.details-btn').trigger('click')

    expect(wrapper.emitted('view-details')).toBeTruthy()
    expect(wrapper.emitted('view-details')[0][0]).toEqual(mockUsers[0])
  })

  it('muestra el conteo de usuarios', () => {
    const wrapper = mount(UserList, {
      props: { users: mockUsers }
    })

    expect(wrapper.text()).toContain('3')
  })

  it('renderiza contenido del slot header', () => {
    const wrapper = mount(UserList, {
      props: { users: mockUsers },
      slots: {
        header: '<p class="custom-header">Header personalizado</p>'
      }
    })

    expect(wrapper.find('.custom-header').exists()).toBe(true)
    expect(wrapper.text()).toContain('Header personalizado')
  })
})
