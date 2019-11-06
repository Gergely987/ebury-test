<template>
    <div class="input-field field">
        <b-field :type="validity || !dirty ? '' : 'is-danger'">
            <b-input 
                v-model="value" 
                :placeholder="config.placeholder"
                :maxlength="config.maxlength" 
                :type="config.type"
                @blur="validateField"
            ></b-input>
        </b-field>
    </div>
</template>

<script>
export default {
    name: 'InputField',
    props: {
        config: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            value: '',
            validity: !this.config.required,
            dirty: false
        }
    },
    methods: {
        validateField() {
            this.dirty = true;

            if (this.config.required && !this.value.length) {
                this.validity = false;
            } else if(this.config.validation === 'email' && this.value.length) {

                const emailArray = this.value.split(',');
                let valid = true;

                for(let i = 0; i < emailArray.length; i++) {
                    valid = valid && this.validEmail(emailArray[i].replace(/\s/g, ''));
                }
                this.validity = valid;

            } else {
                this.validity = true;
            }

            this.$store.dispatch("setValidation", { name: this.config.name, validity: this.validity });

            this.$store.dispatch("setValue", { name: this.config.name, value: this.value });

            this.$store.dispatch("testFormValidity", this.$store.state.emailData);
           
        },
        validEmail(email) {
            // eslint-disable-next-line no-useless-escape
            const rule = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return rule.test(email);
        }
    }
}
</script>

<style lang="less">
@import "../assets/css/variables.less";

.input-field {
    width: 100%;
    margin-bottom: 15px;

    input {
        height: 40px;
    }

    .help {
      display: none;
    }

    .textarea {
        min-height: 200px;
    }
}

</style>