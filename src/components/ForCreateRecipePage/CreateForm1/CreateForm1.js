export default {
    name : 'CreateForm1', 

    data () {
        return {
            newTag : '',
            addedTags: []
        }
    },

    methods: {
        addNewTag () {
            this.addedTags.push(this.newTag);
            this.newTag = '';
            this.$store.commit('setNewRecipe', { tags: this.addedTags });
        }, 

        removeTag(i) {
            this.addedTags.splice(i, 1);
            this.$store.commit('setNewRecipe', { tags: this.addedTags });
        }
    }, 

    mounted () {
        this.addedTags = this.$store.getters.getNewRecipe.tags || [];
    }, 

    computed: {
        checkAddedTagsValidation () {
            return this.addedTags.length > 0;
        }, 

        checkOneTagValidation () {
            return this.newTag.length > 2
        }
    },

    watch: {
        checkAddedTagsValidation (newValue) {
            if(newValue) {
                this.$store.commit('setValidateNewRecipe', { form1 : newValue });
            }
        }
    },
}