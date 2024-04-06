<template>
    <div>
        <p class="title">Add Steps for Preparation of Your Recipe</p>
        <div class="formContainer">
            <div class="stepsContainer">
                <div class="step" v-for="(item) in sortedSteps" :key="item.id">
                    
                    <template v-if="item.disabled">
                        <div class="inputGroup">
                            <p>Step Number</p>
                            <input type="text" v-model="item.sequence_number" disabled>
                        </div>
                        <div class="inputGroup">
                            <p>Description</p>
                            <textarea v-model="item.description" disabled cols="20" rows="5"></textarea>
                        </div>
                        <div class="inputGroup">
                            <p>Image</p>
                            <template v-if="item.image === null">
                                <img :src="``" alt="No Image">
                            </template>
                            <template v-else>
                                <img src="https://www.allrecipes.com/thmb/s0mJbUaWhT4cvgMRK28grMkUXcU=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8805-CrispyFriedChicken-mfs-3x2-072-d55b8406d4ae45709fcdeb58a04143c2.jpg" alt="">
                            </template>
                
                        </div>

                        <div class="actionButtons">
                            <i title="edit" v-if="item.disabled" class="bi bi-pencil-square" @click="() => {toggleDisabled(item.id)}"></i>
                            <i class="bi bi-trash-fill" @click="() => { deleteStep(item.id) }"></i>
                        </div>
                    </template>

                    <template v-else>
                        <div class="inputGroup">
                            <p>Step Number</p>
                            <input type="text" v-model="updateStep.sequence_number">
                        </div>
                        <div class="inputGroup">
                            <p>Description</p>
                            <textarea v-model="updateStep.description" cols="20" rows="5"></textarea>
                        </div>
                        <div class="inputGroup">
                            <p>Image</p>
                            <template v-if="updateStep.image === null">
                                <img :src="``" alt="No Image">
                            </template>
                            <template v-else>
                                <img src="https://www.allrecipes.com/thmb/s0mJbUaWhT4cvgMRK28grMkUXcU=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8805-CrispyFriedChicken-mfs-3x2-072-d55b8406d4ae45709fcdeb58a04143c2.jpg" alt="">
                            </template>
                            <input type="file" @change="(e) => { setUpdateStepImage(e) }">
                        </div>

                        <div class="actionButtons">
                            <i class="bi bi-check-lg" @click="() => { saveUpdateStep(updateStep.id) }"></i>
                        </div>
                    </template>
                    
                    
    
                </div>
                <div v-if="updateError"><strong style="color: red;">Invalid Information</strong></div>
            </div>
            <hr v-if="sortedSteps.length !== 0">
            <div class="stepsContainer newStepContainer">
                <p class="titleAddnewStep">Add New Step</p>
                <div class="step newStep">
                    
                    <div class="inputGroup">
                        <p>Step Number</p>
                        <input type="number" v-model="newStep.sequence_number">
                    </div>
                    <div class="inputGroup">
                        <p>Description</p>
                        <textarea cols="20" rows="5" v-model="newStep.description"></textarea>
                    </div>
                    <div class="inputGroup">
                        <p>Image</p>
                        <input type="file" @change="(e) => { setNewStepImage(e) }">
                    </div>
                    
                    <button :disabled="!checkValidationForNewStep" @click="addNewStep">Add</button>
                </div>
            </div>

            <strong v-if="!checkValidationForAddedSteps" style="color: red;">You need to add at least one step</strong>
        </div>
    </div>
</template>

<script src="./CreateForm3.js">
    
</script>

<style lang="css" scoped src="./CreateForm3.css">

</style>
