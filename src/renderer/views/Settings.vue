<template>
  <div>
    {{ description }}
  </div>
</template>

<script lang="ts">
import { createComponent, value } from 'vue-function-api'

export default createComponent({
  name: 'Settings',
  setup() {
    const description = value('settings description')

    return { description }
  }
});
</script>
