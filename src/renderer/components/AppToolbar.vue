<template>
  <div>
    {{ appTitle }}
  </div>
</template>

<script lang="ts">
import { createComponent, value } from 'vue-function-api'

export default createComponent({
  name: 'AppToolbar',
  setup() {
    const appTitle = value('app title')

    return { appTitle }
  }
});
</script>
