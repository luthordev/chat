<template>
  <div class="chat-header d-flex align-items-center my-1 mx-2">
    <div class="col-lg-1 col-sm-3">
      <img :src="props.avatar" class="avatar" />
    </div>
    <div class="col-lg-10 col-sm-7 d-flex flex-column">
      <span class="h5 mb-0">{{ props.name }}</span>
      <p v-if="props.status" class="mb-0">{{ props.status }}</p>
    </div>
    <div
      class="col-lg-1 col-sm-2 d-flex justify-content-end align-items-center"
    >
      <button class="info-button">
        <font-awesome-icon icon="ellipsis-vertical" size="xl" color="#CCCCCC" />
      </button>
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
