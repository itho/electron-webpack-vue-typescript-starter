<template>
  <div>
    {{ text }}: {{ count }}
    <button @click="increment()">increment</button>
  </div>
</template>

<script lang="ts">
import { createComponent, computed, value } from 'vue-function-api'
import { mapActions } from 'vuex'

export default createComponent({
  name: 'Example',
  setup(props, { root }) {
    const text = value('example child component')
    const count = computed<number>(() => root.$store.state.count)

    return { text, count }
  },
  methods: {
    ...mapActions([
      'increment'
    ])
  }
});
</script>
