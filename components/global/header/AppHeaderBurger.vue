<template lang="pug">
    button.burger(type="button" @click.prevent="toggle" :class="{'burger--active': menuIsActive}")
        span.burger__line.burger__line--f   
        span.burger__line.burger__line--s   
        span.burger__line.burger__line--t  
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
    computed: {
        ...mapState({
            menuIsActive: state => state.header.menuIsActive
        })
    },
    methods: {
        ...mapMutations({
            toggleMenu: 'toggleMenu'
        }),
        toggle() {
            this.toggleMenu();
        }
    }
}
</script>

<style lang="scss">
@import '~assets/scss/global/vars';

.burger {
    width: 50px;
    height: 50px;
    border: none;
    background: none;
    position: relative;
    margin-right: -15px;
    display: none;
    &__line {
        display: block;
        position: absolute;
        width: 20px;
        height: 2px;
        top: 50%;
        left: 15px;
        background: $c-blue;
        transition: .15s .15s ease margin, .15s ease transform;
        &--f {
            margin-top: -7px;
        }
        &--s {
            margin-top: -1px;
        }
        &--t {
            margin-top: 5px;
        }
    }
    &--active {
        .burger {
            &__line {
                transition: .15s ease margin, .15s .15s ease transform;
                &--f {
                    margin-top: -1px;
                    transform: rotate(45deg);
                }
                &--s {
                    margin-top: -1px;
                    transform: rotate(45deg);
                }
                &--t {
                    margin-top: -1px;
                    transform: rotate(-45deg);
                }
            }
        }
    }

    @media screen and (max-width: 767px) {
        display: block;
    }
}
</style>
