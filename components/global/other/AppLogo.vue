<template lang="pug">
    .logo
        nuxt-link.logo__link(to="/")
            img(src="/img/logo.png" alt="Йога смеха")
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .logo {
        max-width: 64px;
        flex: 0 0 64px;
        &__link {
            display: inline-block;
        }
    }
</style>
