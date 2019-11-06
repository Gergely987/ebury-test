<template>
  <div>
    <section class="main-content columns is-vcentered">
      <div class="main-content__page container column is-6">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Completed',
          icon: 'lightbulb',
          to: { name: 'completed' }
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
@import "../assets/css/variables.less";

.main-content {
  background-image: @layout-background;
  min-height: 100vh;
  
  &__page {
    box-shadow: 0 10px 10px @box-shadow;
    border-radius: 4px;
    background-color: @white;
    padding: 0;
    max-width: 712px;
  }
}

</style>
