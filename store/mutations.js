export default {
  SET_VALIDITY: (state, { name, validity }) => {
    state.emailData[name].validity = validity
  },
  SET_VALUE: (state, { name, value }) => {
    state.emailData[name].value = value
  },
  SET_FORM_VALIDITY: (state, validity) => {
    state.formValidity = validity;
  }
}