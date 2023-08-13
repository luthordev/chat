<template>
  <div
    class="chat-header d-flex justify-content-center align-items-center my-1 mx-2"
  >
    <div class="col-1">
      <img :src="props.avatar" class="avatar" />
    </div>
    <div class="col-11 d-flex flex-column">
      <span class="h5 mb-0">{{ props.name }}</span>
      <p v-if="props.status" class="mb-0">{{ props.status }}</p>
    </div>
    <hr />
  </div>
</template>

<script setup>
import Avatar from "@/assets/img/avatar.png";

const props = defineProps({
  avatar: {
    type: String,
    default: () => {
      return Avatar;
    },
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
});
</script>
