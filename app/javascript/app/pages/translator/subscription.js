import store from "./store";
import { createConsumer } from "@rails/actioncable"

export const Consumer  = createConsumer();

const Subscription = Consumer.subscriptions.create("TranslatorChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log('src-textarea.jsx: actioncable: connected');
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
    console.log('src-textarea.jsx: actioncable: disconnected');
  },

  received(data) {
    console.log('src-textarea.jsx: actioncable: data received from server', data);
    store.dispatch({ type: 'SET_TRANSLATION_DST_TEXT', value: data['translated_text'] });
  },

  translate: function(text) {
    return this.perform('translate', { text });
  }
});

export default Subscription
