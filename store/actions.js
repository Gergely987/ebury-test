export default {
    setValidation: (state, { name, validity }) => {
      state.commit("SET_VALIDITY", { name, validity });
    },
    setValue: (state, { name, value }) => {
      state.commit("SET_VALUE", { name, value });
    },
    testFormValidity: (state, payload) => {
      const stateObj = state.state;
      const keys =  Object.keys(stateObj.emailData);
      let validity = true;

      for (let i = 0; i < keys.length; i++) {
        validity = validity && stateObj.emailData[keys[i]].validity;
      }

      if (validity !== stateObj.formValidity) {
        state.commit("SET_FORM_VALIDITY", validity);
      }
    }
  }
