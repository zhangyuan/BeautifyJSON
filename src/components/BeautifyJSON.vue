<template>
    <div class="container">
        <h1>Beautify JSON</h1>
        <div class="main">
            <text-box class="text-box" />
            <screen class="screen" />
        </div>
    </div>
</template>

<script>
    import TextBox from './TextBox.vue';
    import Screen from './Screen.vue';

    export default {
        name: "beaufity-json",
        components: {
            TextBox,
            Screen
        }
    }
</script>

<style scoped lang="scss">
    .container {
        text-align: center;
    }

    .main {
        margin: 0 auto;
        width: 1220px;
    }
    .text-box {
        float: left;
        width: 600px;
        text-align: left;
    }
    .screen {
        float: left;
        margin-left: 20px;
        width: 600px;
        text-align: left;
    }
</style>