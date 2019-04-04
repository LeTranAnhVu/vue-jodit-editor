<template>
  <section>
    <highlight-code lang="javascript">
      <slot name="jslang"></slot>
    </highlight-code>
        <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'snippet',
    props: ['code']
  }
</script>

<style scoped>

</style>
