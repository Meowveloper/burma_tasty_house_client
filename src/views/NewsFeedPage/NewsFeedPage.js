import LogoComponent from '@/components/Logo/LogoComponent.vue';
import FirstHeader from '@/components/FirstHeader/FirstHeader.vue';

export default {
    name : 'NewsFeedPage',

    components: {
        LogoComponent, 
        FirstHeader
    }, 

    data () {
        return {
            forParameters: window.innerWidth * (6.5 / 100)
        }
    },

    mounted () {
        this.forParameters = window.innerWidth * (6.5 / 100);
        window.addEventListener('resize', () => {
            this.forParameters = window.innerWidth * (6.5 / 100);
        });
    }, 

    methods: {
        goToRecipeCreatePage () {
            this.$router.push({ name : 'CreateRecipePage' })
        }
    }
}