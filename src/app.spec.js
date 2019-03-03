import { shallow } from 'vue-test-utils';
import App from './App.vue';

describe('my App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(App);
  });

  it('reacts to user click with greeting change', () => {
    const eventEmitter = wrapper.find('.aqa-click-event-emitter');
    const greetingElement = wrapper.find('.aqa-greeting');

    // check that string is expected by default
    expect(greetingElement.text()).toBe('hello Vue!');

    eventEmitter.trigger('click');

    expect(greetingElement.text()).toBe('YOU CLICKED ON ME!');
  });
});
