import FirstHeader from '@/components/FirstHeader/FirstHeader.vue';
import SideNavBar from '@/components/ForCreateRecipePage/SideNavBar/SideNavBar.vue';
import CreateForm0 from '@/components/ForCreateRecipePage/CreateForm0/CreateForm0.vue';
import CreateForm1 from '@/components/ForCreateRecipePage/CreateForm1/CreateForm1.vue';
import CreateForm2 from '@/components/ForCreateRecipePage/CreateForm2/CreateForm2.vue';
import CreateForm3 from '@/components/ForCreateRecipePage/CreateForm3/CreateForm3.vue';
import axios from 'axios';


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
            firstH1Height : 0, 
            createLoading : false
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

        async createNewRecipe() {
            this.createLoading = true;
            const newRecipe = this.$store.getters.getNewRecipe;
            const formData = new FormData();

            formData.append('image', newRecipe.image || null);
            formData.append('tile', newRecipe.title);
            formData.append('description', newRecipe.description || null);
            formData.append('preparationTime', newRecipe.preparationTime);
            formData.append('difficultyLevel', newRecipe.difficultyLevel);
            formData.append('tags', newRecipe.tags);
            formData.append('ingredients', newRecipe.ingredients);
            formData.append('steps', newRecipe.steps);

            axios.post('http://127.0.0.1:8000/api/recipe/create', formData).then((response) => {
                console.log(response.data);
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                this.createLoading = false;
            });


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