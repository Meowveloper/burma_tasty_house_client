export default {
    name : 'CreateForm3', 

    data () {
        return {

            newStep : {
                id : '',
                sequence_number : 1, 
                description : '', 
                image : null, 

                disabled : true
            },

            updateStep :  {},
            updateError : false,
            steps: []
        }
    },

    mounted () {
        this.steps = this.$store.getters.getNewRecipe.steps || [];
    }, 

    methods: {
        setNewStepImage (e) {
            this.newStep.image = e.target.files[0];
        }, 

        setUpdateStepImage (e) {
            this.updateStep.image = e.target.files[0];
        },

        deleteStep(id) {
            this.steps = [...this.steps].filter(step => step.id !== id);
            console.log(this.steps);
        },

        addNewStep() {
            this.steps.push({...this.newStep, id : this.steps.length + 1});
            this.newStep.sequence_number = this.newStep.sequence_number + 1;
            this.newStep.description = '';
        }, 

        toggleDisabled(i) {
            const stepToUpdate = this.steps.find(step => step.id === i);

            if(stepToUpdate) {
                Object.assign(stepToUpdate, {...stepToUpdate, disabled: false});
                this.updateStep = { ...stepToUpdate };
            }
        }, 

        saveUpdateStep(i) {
            this.updateError = false;
            const stepToUpdate = this.steps.find(step => step.id === i);

            if(stepToUpdate) {
                if(this.updateStep.description.length < 9 || this.updateStep.sequence_number < 1) {
                    this.updateError = true;
                    Object.assign(stepToUpdate, {...stepToUpdate, disabled: true});
                } else {
                    Object.assign(stepToUpdate, {...this.updateStep, disabled: true});
                }
                
            }
        }
    }, 

    computed: {
        sortedSteps () {
            return [...this.steps].sort((a, b) => a.sequence_number - b.sequence_number);
        }, 

        checkValidationForAddedSteps () {
            return this.steps.length > 0;
        }, 

        checkValidationForNewStep () {
            if(this.newStep.sequence_number) {
                return (
                this.newStep.description.length > 9 && this.newStep.sequence_number > 0);
            } else {
                return false;
            }
            
        }, 
    },

    watch: {
        steps : {
            handler(newVal) {
                this.$store.commit('setNewRecipe', { steps: newVal });
            }, 
            deep : true
        }, 

        checkValidationForAddedSteps : {
            handler(newVal) {
                this.$store.commit('setValidateNewRecipe', { form3 : newVal });
            }, 
            deep : true
        }
        
    },
}