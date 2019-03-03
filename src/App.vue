<template>
  <div
    class="aqa-click-event-emitter"
    @click="handleClick"
  >
    <h1 class="aqa-greeting">
      {{ greeting }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',

  data() {
    return {
      greeting: 'hello Vue!',
    };
  },

  methods: {
    handleClick() {
      this.greeting = 'YOU CLICKED ON ME!';
    },
  },
};
</script>
