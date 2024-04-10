export default {
    name : 'CreateForm2',

    data () {
        return {
            newIngredient : '',
            addedIngredients: []
        }
    },

    methods: {
        addNewIngredient () {
            this.addedIngredients.push(this.newIngredient);
            this.newIngredient = '';
            this.$store.commit('setNewRecipe', { ingredients: this.addedIngredients });
            console.log(this.$store.getters.getNewRecipe);
        }, 

        removeIngredient(i) {
            this.addedIngredients.splice(i, 1);
            this.$store.commit('setNewRecipe', { ingredients: this.addedIngredients });
            console.log(this.$store.getters.getNewRecipe);
        }
    }, 


    mounted () {
        this.addedIngredients = this.$store.getters.getNewRecipe.ingredients || [];
    }, 


    computed: {
        checkAddIngredientsValidation () {
            return this.addedIngredients.length > 1
        }, 

        checkNewIngredientValidation () {
            return this.newIngredient.length > 2;
        }
    },


    watch: {
        checkAddIngredientsValidation : {
            handler(newVal) {
                this.$store.commit('setValidateNewRecipe', { form2: newVal });
            }, 
            deep : true
        }
    },
}