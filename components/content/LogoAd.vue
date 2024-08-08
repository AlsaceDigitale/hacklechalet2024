<template>
  <div class="table">
    <span v-if="before">{{ before }}</span>
    <img src="/images/logo-AD-circular.png" :width="width" alt="Logo AD">
  </div>
</template>
<script setup>
  import { defineProps } from 'vue';
  const props = defineProps(
    {
      before: {
        type: String,
        default: null
      },
      width: {
        type: Number,
        default: 92
      }
    }
  );
</script>
<style scoped>
  div.table {
    display: table;
  }
  div.table span {
    display: table-cell;
    vertical-align: middle;
    padding-right: 10px;
  }
  div.table img {
    display: table-cell;
    vertical-align: middle;
  }
</style>