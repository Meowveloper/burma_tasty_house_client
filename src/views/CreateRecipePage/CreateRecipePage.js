import FirstHeader from '@/components/FirstHeader/FirstHeader.vue';
import SideNavBar from '@/components/ForCreateRecipePage/SideNavBar/SideNavBar.vue';
import CreateForm0 from '@/components/ForCreateRecipePage/CreateForm0/CreateForm0.vue';
import CreateForm1 from '@/components/ForCreateRecipePage/CreateForm1/CreateForm1.vue';
import CreateForm2 from '@/components/ForCreateRecipePage/CreateForm2/CreateForm2.vue';
import CreateForm3 from '@/components/ForCreateRecipePage/CreateForm3/CreateForm3.vue';

export default {
    name : 'CreateRecipePage', 

    components: {
        FirstHeader, 
        SideNavBar, 
        CreateForm0, 
        CreateForm1, 
        CreateForm2, 
        CreateForm3
    }, 

    data () {
        return {
            headerHeight : 0,
            activeFormComponent : 'CreateForm0', 
            firstH1Height : 0
        }
    },

    mounted () {
        this.firstH1Height = this.$refs['theFirstH1'].offsetHeight;
    },

    methods: {
        navigate (pageNumber) {
            console.log(pageNumber);
            this.activeFormComponent = `CreateForm${pageNumber}`;
        }, 

        setHeaderHeight(headerHeight) {
            this.headerHeight = headerHeight;
        }, 

        createNewRecipe() {
            console.log(this.$store.getters.getNewRecipe);
        }
    }, 

    computed: {
        overAllValidation () {
            return this.$store.getters.getValidateNewRecipe;
        }
    },

    watch: {
        overAllValidation (newValue, oldValue) {
            if(newValue !== oldValue) {
                console.log(newValue);
            }
        }
    },

    
}