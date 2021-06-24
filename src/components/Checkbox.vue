<template>
  <div class="checkbox" @click="updateValue()">
    <span v-if="value">&check;</span>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    updateValue() {
      if (this.value) {
        this.$emit('input', false);
        return;
      }
      this.$emit('input', true);
    }
  }
}
</script>
