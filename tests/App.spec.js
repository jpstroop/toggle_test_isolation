import { mount, createLocalVue } from '@vue/test-utils'
import App from '@/App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import Vue from 'vue'

describe('App', () => {

  const localVue = createLocalVue()
  localVue.use(BootstrapVue)

  const wrapper = mount(App, {
    localVue: localVue,
  })

  it('is the app div', () => {
    expect(wrapper.element).toHaveAttribute('id', 'app')
  })

  test('list items contain an info button that toggles the description', async() => {
    let openButton = wrapper.find("#open")
    let collapsible = wrapper.find("#my-collapse")
    expect(collapsible.element).not.toBeVisible()
    await openButton.trigger("click")
    expect(collapsible.element).toBeVisible()

    // FAIL
    let closeButton = wrapper.find("#close")
    await closeButton.trigger("click")
    expect(collapsible.element).not.toBeVisible()
    // ^ We're getting the transitional "collapsing" state,
    // https://getbootstrap.com/docs/4.3/components/collapse/#example
    // <div class="collapse show collapsing" id="classificationLong" style="height: 0px; display: block;" />
    // and not the final "collapsed" state.

  })

})
