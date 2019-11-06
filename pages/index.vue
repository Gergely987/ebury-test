<template>
  <form>
    <header>
      Send E-mail
    </header>
    <section class="section">
      <div v-for="inputField in inputFields" :key="inputField.name" class="input-container" >
        <InputField :config="inputField"></InputField>
      </div>
      <div class="bottom-wrapper">
        <Attachment :config="attachment"></Attachment>
        <b-button type="is-info" :disabled="!$store.state.formValidity" @click="redirectToCompleted">Send</b-button>
      </div>

    </section>
  </form>
</template>

<script>
import InputField from '~/components/InputField'
import Attachment from '~/components/Attachment'

export default {
  name: 'HomePage',
  components: {
    InputField,
    Attachment
  },
  data() {
    return {
      inputFields: [
        {
          name: 'recipienctto',
          placeholder: 'To',
          required: true,
          validation: 'email'
        },
        {
          name: 'recipientcc',
          placeholder: 'CC',
          required: false,
          validation: 'email'
        },
        {
          name: 'recipientbcc',
          placeholder: 'BCC',
          required: false,
          validation: 'email'
        },
        {
          name: 'subject',
          placeholder: 'Subject',
          required: true,
          maxlength: 100
        },
        {
          name: 'message',
          placeholder: 'Message',
          required: true,
          type: 'textarea'
        }
      ],
      attachment: {
        name: 'attachment',
        required: false
      }
    }
  },
  methods: {
    redirectToCompleted() {
      this.$router.push({ path: 'completed' });
    }
  }
}
</script>

<style lang="less">
@import "../assets/css/variables.less";

header {
  padding: 30px;
  background-color: @header-bg;
  color: @white;
  border-radius: 4px 4px 0 0;
}

.input-container {
    width: 100%;
}

.bottom-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: flex-end;
}

</style>