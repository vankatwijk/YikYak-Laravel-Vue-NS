<template>
    <div class="notification-box">
        <v-alert type="success"
        dismissible
        elevation="12">
        {{ message }}
        </v-alert>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message : 'welcome on YikYak App'
        }
    }
}
</script>

<style scoped>
    .notification-box {
        position: absolute;
        top: 40px;
        right: 40px;
        z-index: 99;
    }
</style>