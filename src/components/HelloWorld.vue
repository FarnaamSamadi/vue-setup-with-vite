<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

defineProps({
  msg: String
})

const store = useStore()

const x = computed(() => store.state.x)

const count = ref(0)
</script>

<template>
  <h1>this is props: {{ msg }}</h1>
  <h2>this is store: {{ x }}</h2>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
