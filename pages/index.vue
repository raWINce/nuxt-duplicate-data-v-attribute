<template>
  <div class="container">
    <div>
      <component-with-scoped-styles />
    </div>
  </div>
</template>

<script>
import ComponentWithScopedStyles from '~/components/ComponentWithScopedStyles'

export default {
  components: {
    ComponentWithScopedStyles,
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
