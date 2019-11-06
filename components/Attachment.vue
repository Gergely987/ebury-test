<template>
    <div class="attachment">
        <div v-if="dropFiles.length" class="attached">
            <p class="attached__title">Attached files</p>
            <div v-for="(file, index) in dropFiles" :key="index" class="attached__image">
                <img :src="createImage(file)" :alt="file.name">
                <a class="attached__delete" @click="deleteDropFile(index)">
                    <b-icon
                        class="attached__delete-icon"
                        icon="delete-circle"
                        size="is-large">
                    </b-icon>
                </a>
            </div>
        </div>
        <b-field class="attach">
            <b-upload v-model="dropFiles" multiple>
                <b-icon
                    icon="attachment"
                    size="is-medium">
                </b-icon>
            </b-upload>
        </b-field>
    </div>
</template>

<script>
export default {
    name: 'Attachment',
    data() {
        return {
            dropFiles: []
        }
    },
    methods: {
        deleteDropFile(index) {
            this.dropFiles.splice(index, 1)
        },
        createImage(file) {

            this.$store.dispatch("setValue", { name: 'attachment', value: this.dropFiles });

            return URL.createObjectURL(file);
        }
    }
}
</script>


<style lang="less">
@import "../assets/css/variables.less";

.attach {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid @attach;
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);
    display: flex;
    justify-content: center;
    align-items: center;

    .upload {
        cursor: pointer;
    }
}

.attached {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;

    &__title {
        font-size: 16px;
        font-weight: bold;
        width: 100%;
        margin: 0 15px;
    }

    &__image {
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

        &:hover {
            .attached__delete {
                display: block;
            }
        }
    }

    &__delete {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: @black;
        opacity: .7;
        left: 0;
        top: 0;
        border: 0;
        padding: 0;
        display: none;
        cursor: pointer;
    }

    &__delete-icon {
        border-radius: 20px;
        color: @delete-bin;
        display: inline-block;
        left: calc(50% - 20px);
        top: calc(50% - 20px);
        position: relative;
        display: flex;

        &.icon {
            width: 40px;
            height: 40px; 
        }

    }

}

</style>