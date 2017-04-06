<template>
    <div>
        <textarea v-focus="focused" :value="text" @input="updateText"></textarea>
    </div>
</template>

<script>
    import autosize from 'autosize';
    import { focus } from 'vue-focus';
    import { mapState } from 'vuex';

    export default {
        name: "text-box",
        data: () => {
            return {focused: true}
        },
        mounted: () => {
            autosize(document.querySelector('textarea'));
        },
        computed: {
            ...mapState({
                text: state => state.text
            })
        },
        methods: {
            updateText (e) {
                this.$store.commit("updateText", e.target.value)
            }
        },
        directives: { focus: focus }
    }
</script>

<style scoped lang="scss">
    textarea {
        width: 100%;
        border-style: none;
        border-color: Transparent;
        overflow: auto;
        resize: none;
        height: 100%;
        border: none;
        overflow: auto;
        outline: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        font-family: PT Sans, DejaVu Sans, Arial, sans;
        font-size: 14px;
    }
</style>