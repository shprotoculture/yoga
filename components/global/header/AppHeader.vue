<template lang="pug">
    .nav-wrap
        header.header
            .header__content.container                
                app-logo
                app-header-main-nav
                app-header-burger
        app-header-mobile-menu
        .placeholder
</template>

<script>
import AppLogo from '~/components/global/other/AppLogo';
import AppHeaderMainNav from '~/components/global/header/AppHeaderMainNav';
import AppHeaderBurger from '~/components/global/header/AppHeaderBurger';
import AppHeaderMobileMenu from '~/components/global/header/AppHeaderMobileMenu';
export default {
    components: {
        AppLogo,
        AppHeaderMainNav,
        AppHeaderBurger,
        AppHeaderMobileMenu
    }
}
</script>

<style lang="scss">
    .header {
        background: #fff;
        box-shadow: 0px 3px 7px rgba(#000, 0.1);
        position: fixed;
        width: 100%;
        min-width: 320px;
        top: 0;
        left: 0;
        z-index: 100;
        &__content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 15px;
        }
    }

    .placeholder {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 84px;
    }
</style>
