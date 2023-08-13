<template>
  <div class="profile-card py-3">
    <button class="settings-button">
      <font-awesome-icon icon="ellipsis-vertical" size="lg" />
    </button>
    <div
      class="d-flex flex-column justify-content-center align-items-center w-100"
    >
      <img alt="Profile Picture" :src="props.avatar" class="avatar" />
      <span class="my-2">{{ props.name }}</span>
      <input type="text" class="mt-3" placeholder="Search..." />
    </div>
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
});
</script>
