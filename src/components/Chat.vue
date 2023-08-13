<template>
  <div
    class="chat d-flex justify-content-center align-items-center px-3"
    :class="{ active: active }"
  >
    <div class="col-lg-3">
      <img :src="props.avatar" class="avatar" />
    </div>
    <div class="col-lg-9 d-flex flex-column">
      <div class="d-flex justify-content-between mb-1">
        <span class="h6 mb-0">{{ props.name }}</span>
        <span class="time-last-message">
          <small>{{ props.timeLastMessage }}</small>
        </span>
      </div>
      <p>
        {{ props.message }}
      </p>
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
  message: {
    type: String,
    required: true,
  },
  timeLastMessage: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: () => {
      return false;
    },
  },
});
</script>

<style></style>
