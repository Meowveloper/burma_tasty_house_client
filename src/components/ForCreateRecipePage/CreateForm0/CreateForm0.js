export default {
    name : 'CreateForm0', 


    data () {
        return {
            title: '', 
            description: '',
            image : '' , 
            preparationTime : '',
            difficultyLevel : 'medium', 
        }
    },

    mounted () {
        this.$refs.title.focus();
        this.$store.commit('setNewRecipe', { difficultyLevel: this.difficultyLevel });
        this.title = this.$store.getters.getNewRecipe.title || '';
        this.description = this.$store.getters.getNewRecipe.description || '';
        this.image = this.$store.getters.getNewRecipe.image || '';
        this.preparationTime = this.$store.getters.getNewRecipe.preparationTime || '';
        this.difficultyLevel = this.$store.getters.getNewRecipe.difficultyLevel;
    },


    methods: {
        setImage (e) {
            this.image = e.target.files[0];
            this.$store.commit('setNewRecipe', {image: this.image});
            
        }
    }, 

    computed: {
        checkTitleValidation () {
            return this.title.length > 5
        }, 

        checkPreparationTimeValidation () {
            if(this.preparationTime === '') {
                return false;
            } else if (Number(this.preparationTime < 5)) {
                return false;
            } else {
                return true;
            }
        }, 

        overAllValidation () {
            return (this.checkTitleValidation && this.checkPreparationTimeValidation);
        }
    },


    watch: {
        title (newValue, oldValue) {
            if(newValue !== oldValue) {
                this.$store.commit('setNewRecipe', {title: newValue});
            }            
        }, 

        description (newVal, oldVal) {
            if(newVal !== oldVal) {
                this.$store.commit('setNewRecipe', { description: newVal });
            }
        }, 

        preparationTime (newVal, oldVal) {
            if(newVal !== oldVal) {
                this.$store.commit('setNewRecipe', { preparationTime: newVal });
            }
        }, 

        difficultyLevel (newVal, oldVal) {
            if(newVal !== oldVal) {
                this.$store.commit('setNewRecipe', { difficultyLevel: newVal });
            }
        }, 

        overAllValidation : {
            handler(newVal) {
                this.$store.commit('setValidateNewRecipe', { form0 : newVal });
            }, 
            deep : true
        }
    },

    
}