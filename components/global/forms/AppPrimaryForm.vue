<template lang="pug">
    .primary-form
        .primary-form__heading.p-15
            h4.primary-form__heading-title.ff-c Книга в подарок
            p.primary-form__heading-subtitle Заполните форму и получите книгу основателя Йоги Cмеха Мадана Катарии в подарок!
        .primary-form__contacts.p-15
            .primary-form__social
                ul.primary-form__social-list
                    li.primary-form__social-item(v-for="(social, index) in socials" :key="index")
                        a.primary-form__social-link(:href="social.to" target="_blank")
                            i(:class="social.icon")
            .primary-form__tel
                a.primary-form__tel-link(href="tel:+79262194868") +8 (926) 219-48-68
        .primary-form__body
            .p-15(v-for="(field, index) in fields" :key="index")
                .input
                    input.input__field(:type="field.type" :placeholder="field.placeholder" :required="field.required")
            .p-15
                .textarea
                    textarea.textarea__field(placeholder="Активность *" required)
            .p-15
                .checkbox
                    input.checkbox__input(type="checkbox" required id="privacy")
                    label.checkbox__text Даю согласие на обработку персональных данных

</template>

<script>
export default {
    data () {
        return {
            socials: [
                {title: 'Facebook', to: 'https://fb.com', icon: 'fab fa-facebook-f social-icon social-icon--fb'},
                {title: 'Вконтакте', to: 'https://vk.com', icon: 'fab fa-vk social-icon social-icon--vk'},
                {title: 'Одноклассники', to: 'https://ok.com', icon: 'fab fa-odnoklassniki social-icon social-icon--ok'},
                {title: 'Телеграм', to: 'https://ok.com', icon: 'fab fa-telegram-plane social-icon social-icon--telegram'},
                {title: 'Instagram', to: 'https://ok.com', icon: 'fab fa-instagram social-icon social-icon--instagram'},
            ],
            fields: [
                {placeholder: 'Имя *', type: 'text', required: true},
                {placeholder: 'Ваш E-mail *', type: 'email', required: true},
                {placeholder: 'Телефон *', type: 'text', required: true},
            ]
        }
    }
}
</script>

<style lang="scss">
@import '~assets/scss/global/vars';

.primary-form {
    &__heading {
        text-align: center;
        padding-bottom: 30px;
        margin-bottom: 15px;
        position: relative;
        &:after {
            content: '';
            display: block;
            width: 100px;
            height: 2px;
            background: $c-orange;
            bottom: 0;
            left: 50%;
            margin-left: -50px;
            position: absolute;
        }
        &-title {
            font-size: 42px;
            font-weight: 400;
            text-transform: uppercase;
            margin-bottom: 30px;
        }
        &-subtitle {
            font-size: 24px;
            font-weight: 300;
            color: $c-grey;
        }
    }
    &__contacts {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__social {
        flex: 0 0 auto;
        &-list {
            display: flex;
        }
        &-item {
            margin-right: 25px;
        }
        &-link {
            font-size: 24px;
            .social-icon {
                transition: .25s ease;
            }
        }
    }
    &__tel {
        flex: 0 0 auto;
        &-link {
            font-size: 24px;
            font-weight: 600;
            transition: .25s ease;
            &:hover {
                color: $c-orange;
            }
        }
    }
}
</style>
