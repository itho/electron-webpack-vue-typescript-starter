<template>
  <div>
    {{ description }}
    <br>
    <example/>
  </div>
</template>

<script lang="ts">
import { createComponent, value } from 'vue-function-api'
import Example from '../components/Example.vue'

export default createComponent({
  name: 'Home',
  components: {
    Example
  },
  setup() {
    const description = value('home description')

    return { description }
  }
});
</script>
