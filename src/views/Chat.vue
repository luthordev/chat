<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 d-flex flex-column sidebar">
        <ProfileCard name="Luthfi Athorique" />
        <div class="d-flex justify-content-between mb-2">
          <span> Last Chats </span>
          <button class="btn-add-chat">
            <Icon name="plus" width="16px" height="16px" />
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
      <div class="col-9 chat-room-wrapper py-3">
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
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Chat from "@/components/Chat.vue";
import ProfileCard from "@/components/ProfileCard.vue";
import Icon from "@/components/Icon.vue";
import ChatRoom from "@/components/ChatRoom/Index.vue";
import HeaderChat from "@/components/ChatRoom/Header.vue";
import ContentChat from "@/components/ChatRoom/Content.vue";
import InputChat from "@/components/ChatRoom/Input.vue";
import BubbleChat from "@/components/ChatRoom/Bubble.vue";

const chatContent = ref(null);

function scrollToBottom() {
  chatContent.value.scrollTo({
    top: chatContent.value.scrollHeight,
    behavior: "smooth",
  });
}

onMounted(() => {
  //   scrollToBottom();
  console.log(chatContent.scrollHeight);
});
</script>
