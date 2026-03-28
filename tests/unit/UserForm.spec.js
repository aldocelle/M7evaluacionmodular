import { mount } from '@vue/test-utils'
import UserForm from '@/components/UserForm.vue'

describe('UserForm.vue', () => {
  it('emite el evento user-created con los datos del formulario', async () => {
    const wrapper = mount(UserForm)

    await wrapper.find('#name').setValue('Juan Pérez')
    await wrapper.find('#email').setValue('juan@test.com')
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('user-created')).toBeTruthy()
    expect(wrapper.emitted('user-created')[0][0]).toEqual({
      name: 'Juan Pérez',
      email: 'juan@test.com'
    })
  })

  it('no emite el evento si los campos están vacíos', async () => {
    const wrapper = mount(UserForm)

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('user-created')).toBeFalsy()
  })

  it('limpia los campos después de emitir', async () => {
    const wrapper = mount(UserForm)

    await wrapper.find('#name').setValue('María López')
    await wrapper.find('#email').setValue('maria@test.com')
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.find('#name').element.value).toBe('')
    expect(wrapper.find('#email').element.value).toBe('')
  })
})
