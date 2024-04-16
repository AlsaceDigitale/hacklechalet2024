<template>
  <span class="dimmed-text">
    <slot />
  </span>
</template>

<script>
export default {
    name: 'Challenge'
}
</script>

<style scoped>
.dimmed-text {
    opacity: 0.1; /* Adjust the opacity value to control the dimming effect */
}
</style>