<template>
  <div class="chat-input d-flex justify-content-end">
    <input
      type="text"
      placeholder="Type your message..."
      v-model="props.value"
    />
    <button class="me-2">
      <font-awesome-icon icon="paper-plane" size="xl" />
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  value: {
    type: String,
  },
});
</script>
