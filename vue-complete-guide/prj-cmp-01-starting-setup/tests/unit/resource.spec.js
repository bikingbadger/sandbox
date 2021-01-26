import { shallowMount } from '@vue/test-utils';

import Resource from '../../src/components/Resource.vue';

describe('Resource', () => {
  const props = {
    title: 'Cool Resource',
    description: 'Another cool resource from the interwebs',
    link: 'https://acoollink.com'
  };
  const wrapper = shallowMount(Resource, {
    propsData: props
  });

  it('should contain a title', () => {
    const title = wrapper.find('h2');
    expect(title.exists()).toBe(true);
  });

  it('should render title from props', () => {
    const title = wrapper.find('h2');
    expect(title.text()).toBe(props.title);
  });

  it('should contain a description', () => {
    const description = wrapper.find('p');
    expect(description.exists()).toBe(true);
  });

  it('should render description from props', () => {
    const title = wrapper.find('p');
    expect(title.text()).toBe(props.description);
  });

  it('should have a link as title', () => {
    const link = wrapper.find('a');
    // console.log(link.attributes().href);
    expect(link.attributes().href).toMatch(props.link);
  });
});
