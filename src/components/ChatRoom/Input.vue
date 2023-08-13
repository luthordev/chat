<template>
  <div class="chat-input">
    <input
      type="text"
      placeholder="Type your message..."
      v-model="props.value"
    />
    <button>Send</button>
  </div>
</template>

<script setup>
const props = defineProps({
  value: {
    type: String,
  },
});
</script>
