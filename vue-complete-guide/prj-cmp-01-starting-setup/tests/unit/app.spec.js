import { shallowMount } from '@vue/test-utils';

import App from '../../src/App.vue';

describe('App.vue', () => {
  it('has list with items', () => {
    const wrapper = shallowMount(App);
    const listElement = wrapper.find('ul');
    expect(listElement.exists()).toBe(true);
  });
});
