export const header = {
    state: {
        mainNavLinks: [
            { title: 'Главная', to: '/' },
            { title: 'Йога смеха', to: '/yogacmexa' },
            { title: 'Клуб', to: '/club' },
            { title: 'Услуги', to: '/services' },
            { title: 'Проекты', to: '/projects' },
            { title: 'Академия', to: '/academy' },
            { title: 'Блог', to: '/blog' },
        ],
        menuIsActive: false
    },
    mutations: {
        toggleMenu(state) {
            state.menuIsActive = !state.menuIsActive;
        },
        closeMenu(state) {
            state.menuIsActive = false;
        }
    }
}
