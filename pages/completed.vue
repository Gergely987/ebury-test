<template>
  <section class="section confirmation">
    <div class="icon-container"><b-icon icon="check" size="is-large"></b-icon></div>
    <p class="confirmation-message">Your email has been sent.</p> 
    <hr/>
    <div class="email">
      <p class="email__subject">{{ $store.state.emailData.subject.value }}</p>
      <p class="email__recipienctto">
        to <a :href="'mailto:' + $store.state.emailData.recipienctto.value">{{ $store.state.emailData.recipienctto.value }}</a>
      </p>
      <p v-if="$store.state.emailData.recipientcc.value" class="email__recipientcc">
        cc <a :href="'mailto:' + $store.state.emailData.recipientcc.value">
        {{ $store.state.emailData.recipientcc.value }}</a>
      </p>
      <p v-if="$store.state.emailData.recipientbcc.value" class="email__recipientbcc">
        bcc <a :href="'mailto:' + $store.state.emailData.recipientbcc.value">
        {{ $store.state.emailData.recipientbcc.value }}</a>
      </p>
      <P class="email__message">{{ $store.state.emailData.message.value }}</p>
      <div class="email__attachment">

        <div v-for="(file, index) in $store.state.emailData.attachment.value" :key="index" class="email__attachment-image">
            <img :src="createImage(file)" :alt="file.name">
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CompletedPage',
  methods: {
      createImage(file) {
          return URL.createObjectURL(file);
      }
  }
}
</script>

<style lang="less">
@import "../assets/css/variables.less";


.confirmation {
  padding: 60px 95px;
}

.icon-container {
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: @confirmation;
  color: @white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.confirmation-message {
  font-size: 16px;
  text-align: center;
}

hr {
  margin: 40px 0;
}

.email {
  &__subject {
    font-weight: bold;
    font-size: 16px;
  }

  &__recipienctto,
  &__recipientcc,
  &__recipientbcc {
    font-size: 12px;
  }

  &__message {
    font-size: 14px;
    margin: 25px 0;
  }

  &__attachment {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  }

  &__attachment-image {
    position: relative;
    border-radius: 4px;
    width: 100px;
    height: 100px;
    margin: 15px;
    overflow: hidden;

    img {
        width: 100%;
        height: auto;
    }
  }

}


</style>
