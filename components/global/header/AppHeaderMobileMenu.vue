<template lang="pug">
    .mobile-menu(:class="{'mobile-menu--active': menuIsActive}")
        .mobile-menu__nav
            .container
                ul.mobile-menu__nav-list
                    li.mobile-menu__nav-item(v-for="(link, index) in mainNavLinks" :key="index")
                        nuxt-link.mobile-menu__nav-link(:to="link.to") {{link.title}}
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            mainNavLinks: state => state.header.mainNavLinks,
            menuIsActive: state => state.header.menuIsActive
        })
    }
}
</script>

<style lang="scss">
@import '~assets/scss/global/vars';
.mobile-menu {
    background: #fff;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 90;
    transition: .6s cubic-bezier(0.23, 1, 0.320, 1);
    transform: translate3d(-100%, 0, 0);
    &__nav {
        position: absolute;
        top: 84px;
        right: 0;
        bottom: 0;
        left: 0;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        padding-top: 30px;
        &-link {
            display: block;
            padding: 15px 0;
            border-bottom: 1px solid #f2f2f2;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
        }
    }
    &--active {
        transform: translate3d(0, 0, 0);
    }
}
</style>
