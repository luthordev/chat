<template>
  <svg
    :width="props.width"
    :height="props.height"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <path
      v-if="props.name == 'plus'"
      :fill="props.color"
      fill-rule="evenodd"
      d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"
    />
    <path
      v-else
      d="M12 19H12.01M8.21704 7.69689C8.75753 6.12753 10.2471 5 12 5C14.2091 5 16 6.79086 16 9C16 10.6565 14.9931 12.0778 13.558 12.6852C12.8172 12.9988 12.4468 13.1556 12.3172 13.2767C12.1629 13.4209 12.1336 13.4651 12.061 13.6634C12 13.8299 12 14.0866 12 14.6L12 16"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: () => {
      return "black";
    },
  },
  height: {
    type: String,
  },
  width: {
    type: String,
  },
});
</script>
