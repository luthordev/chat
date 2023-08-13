<template>
  <div class="chat-bubble" :class="{ user: me }">
    <p>
      {{ props.message }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  me: {
    type: Boolean,
    default: () => {
      return false;
    },
  },
});
</script>
