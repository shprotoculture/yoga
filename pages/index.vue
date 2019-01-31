<template lang="pug">
    main.main
        .container
            .row.justify-content-center
                .col-lg-6
                    app-primary-form
</template>

<script>
import AppPrimaryForm from '~/components/global/forms/AppPrimaryForm';
export default {
    components: {
        AppPrimaryForm
    }
}
</script>

<style lang="scss">

</style>

