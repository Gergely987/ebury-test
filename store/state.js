export default () => ({
    formValidity: false,
    emailData: {
        recipienctto: {
            value: '',
            validity: false
        },
        recipientcc: {
            value: '',
            validity: true
        },
        recipientbcc: {
            value: '',
            validity: true
        },
        subject: {
            value: '',
            validity: false
        },
        message: {
            value: '',
            validity: false
        },
        attachment: {
            value: '',
            validity: true
        }
    }
})