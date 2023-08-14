<template>
  <div class="container-fluid">
    <div v-if="sessions" class="row">
      <div class="col-lg-3 col-sm-12 d-flex flex-column sidebar">
        <ProfileCard
          :avatar="sessions != null ? sessions.picture : null"
          :name="
            sessions != null
              ? `${sessions.given_name} ${sessions.family_name}`
              : null
          "
        />
        <div class="d-flex justify-content-between mb-2">
          <span> Last Chats </span>
          <button class="btn-add-chat">
            <font-awesome-icon icon="plus" />
          </button>
        </div>
        <div class="list-chat py-2 pe-2">
          <Chat
            avatar="https://3.bp.blogspot.com/-Tfz6G_zsZkc/UhhnZ4aGwkI/AAAAAAAAEtk/Hplbqw1xr_Y/s1600/a+(17).jpg"
            name="Freya"
            message="lorem ipsum dolor sit amet kolor hejo jeung pink"
            timeLastMessage="now"
            active
          />
          <Chat
            name="ABCDE"
            message="lorem ipsum dolor sit amet kolor hejo jeung pink"
            timeLastMessage="yesterday"
          />
          <Chat
            avatar="https://3.bp.blogspot.com/-Tfz6G_zsZkc/UhhnZ4aGwkI/AAAAAAAAEtk/Hplbqw1xr_Y/s1600/a+(17).jpg"
            name="Freya"
            message="lorem ipsum dolor sit amet kolor hejo jeung pink"
            timeLastMessage="yesterday"
          />
          <Chat
            avatar="https://3.bp.blogspot.com/-Tfz6G_zsZkc/UhhnZ4aGwkI/AAAAAAAAEtk/Hplbqw1xr_Y/s1600/a+(17).jpg"
            name="Freya"
            message="lorem ipsum dolor sit amet kolor hejo jeung pink"
            timeLastMessage="yesterday"
          />
          <Chat
            avatar="https://3.bp.blogspot.com/-Tfz6G_zsZkc/UhhnZ4aGwkI/AAAAAAAAEtk/Hplbqw1xr_Y/s1600/a+(17).jpg"
            name="Freya"
            message="lorem ipsum dolor sit amet kolor hejo jeung pink"
            timeLastMessage="yesterday"
          />
          <Chat
            avatar="https://3.bp.blogspot.com/-Tfz6G_zsZkc/UhhnZ4aGwkI/AAAAAAAAEtk/Hplbqw1xr_Y/s1600/a+(17).jpg"
            name="Freya"
            message="lorem ipsum dolor sit amet kolor hejo jeung pink"
            timeLastMessage="yesterday"
          />
          <Chat
            avatar="https://3.bp.blogspot.com/-Tfz6G_zsZkc/UhhnZ4aGwkI/AAAAAAAAEtk/Hplbqw1xr_Y/s1600/a+(17).jpg"
            name="Freya"
            message="lorem ipsum dolor sit amet kolor hejo jeung pink"
            timeLastMessage="yesterday"
          />
          <Chat
            avatar="https://3.bp.blogspot.com/-Tfz6G_zsZkc/UhhnZ4aGwkI/AAAAAAAAEtk/Hplbqw1xr_Y/s1600/a+(17).jpg"
            name="Freya"
            message="lorem ipsum dolor sit amet kolor hejo jeung pink"
            timeLastMessage="yesterday"
          />
        </div>
      </div>
      <div class="col-lg-9 col-sm-12 chat-room-wrapper">
        <ChatRoom>
          <HeaderChat
            name="Freya"
            status="online"
            avatar="https://3.bp.blogspot.com/-Tfz6G_zsZkc/UhhnZ4aGwkI/AAAAAAAAEtk/Hplbqw1xr_Y/s1600/a+(17).jpg"
          />
          <ContentChat ref="chatContent">
            <BubbleChat message="Selamat Pagi Luthfi!" />
            <BubbleChat message="Pagi beb :D" me />
            <BubbleChat message="Kamu lagi apa?" />
            <BubbleChat message="Lagi mikirin kamu hehehehe <3" me />
          </ContentChat>
          <InputChat />
        </ChatRoom>
      </div>
    </div>

    <div class="login-wrapper" v-else>
      <div class="login-content d-flex flex-column justify-content-center">
        <h2>Welcome to the Chat App!</h2>
        <p>Please login first using your google account.</p>
        <button class="login-next" @click="login">
          <span class="me-2">Next</span>
          <font-awesome-icon icon="arrow-right" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Chat from "@/components/Chat.vue";
import ProfileCard from "@/components/ProfileCard.vue";
import ChatRoom from "@/components/ChatRoom/Index.vue";
import HeaderChat from "@/components/ChatRoom/Header.vue";
import ContentChat from "@/components/ChatRoom/Content.vue";
import InputChat from "@/components/ChatRoom/Input.vue";
import BubbleChat from "@/components/ChatRoom/Bubble.vue";

const router = useRouter();

const chatContent = ref(null);
const sessions = ref(
  localStorage.getItem("luthorchat-sessions") !== null
    ? JSON.parse(localStorage.getItem("luthorchat-sessions"))
    : null
);

function login() {
  window.location.href = "http://localhost:3001/auth/login";
}

function scrollToBottom() {
  chatContent.value.scrollTo({
    top: chatContent.value.scrollHeight,
    behavior: "smooth",
  });
}

async function Verify(code) {
  const response = await axios.get(
    `http://localhost:3001/auth/getUserInfo?code=${code}`
  );
  localStorage.setItem(
    "luthorchat-sessions",
    JSON.stringify(response.data.payload)
  );
  router.push({ query: null });
  setTimeout(() => {
    router.go();
  }, 200);
}

onMounted(() => {
  if (sessions.value == null) {
    const parsedUrl = new URL(window.location.href);
    const code = parsedUrl.searchParams.get("code");

    if (code) Verify(code);
  }
});
</script>
