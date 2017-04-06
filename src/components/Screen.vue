<template>
    <div>
    <pre>
{{json}}
    </pre>
    </div>
</template>

<script>
    export default {
        name: "screen",
        computed: {
            json() {
                var parsed = null;
                try {
                    parsed = JSON.parse(this.$store.state.text)
                } catch (e) {

                }

                if (parsed) {
                    return JSON.stringify(parsed, null, 4);
                }
            }
        },
        data: () => {
            return {message: "Hello"}
        }
    }
</script>

<style scoped lang="scss">
    pre {
        font-family: PT Sans, DejaVu Sans, Arial, sans;
        font-size: 14px;
        word-wrap: break-word;
        -webkit-user-select: text
    }
</style>