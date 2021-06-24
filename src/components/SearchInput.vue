<template>
  <span class="search-input">
    <i class="icon fas fa-search"></i>
    <input :placeholder="placeholder" type="text" v-model="vModel">
  </span>
</template>

<script>
export default {
  props: ['value', 'placeholder'],
  computed: {
    vModel: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
