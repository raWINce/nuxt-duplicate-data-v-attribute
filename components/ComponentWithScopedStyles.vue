<template>
    <div class="module">
        <h1>Component with render function</h1>
        <component-with-render-function :enable="false">
          <component-with-slot-and-scoped-styles>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eveniet ipsam esse porro maxime illum molestias a? Itaque impedit sint dolorum, architecto, necessitatibus nesciunt, ad, quisquam numquam debitis quidem nulla!</p>
              </div>
          </component-with-slot-and-scoped-styles>
        </component-with-render-function>

        <hr>
        <h2>Duplicate data-v attribute</h2>
        <component-with-render-function enable>
          <component-with-slot-and-scoped-styles>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eveniet ipsam esse porro maxime illum molestias a? Itaque impedit sint dolorum, architecto, necessitatibus nesciunt, ad, quisquam numquam debitis quidem nulla!</p>
              </div>
          </component-with-slot-and-scoped-styles>
        </component-with-render-function>
    </div>
</template>

<script>
    import ComponentWithRenderFunction from '~/components/ComponentWithRenderFunction'
    import ComponentWithSlotAndScopedStyles from './ComponentWithSlot'

    export default {
      components: {
        ComponentWithRenderFunction,
        ComponentWithSlotAndScopedStyles,
      }
    }
</script>

<style scoped>
    .module {
        background-color: orange;
    }
</style>
