<template lang="pug">
    .main-nav
        ul.main-nav__list
            li.main-nav__item(v-for="(link, index) in mainNavLinks" :key="index")
                nuxt-link.main-nav__link(:to="link.to") {{link.title}}
</template>

<script>
import {mapState} from 'vuex';
export default {
    computed: {
        ...mapState({
            mainNavLinks: state => state.header.mainNavLinks
        })
    }
}
</script>

<style lang="scss">
@import '~assets/scss/global/vars';

    .main-nav {
        &__list {
            display: flex;
        }
        &__item {
            margin-left: 30px;
        }
        &__link {
            display: inline-block;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            padding: 5px 0;
            position: relative;
            white-space: nowrap;
            &:after {
                content: '';
                display: block;
                position: absolute;
                width: 100%;
                height: 2px;
                bottom: 0;
                left: 0;
                background: $c-orange;
                transition: .15s ease;
                transform: scaleX(0);
                transform-origin: center;
            }
            &:hover {
                &:after {
                    transform: scaleX(1);
                }
            }
        }

        @media screen and (max-width: 767px) {
            display: none;
        }
    }
</style>
