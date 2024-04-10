<template>
    <div>
        <p class="title">GENERAL INFORMATION</p>

        <div class="formContainer">
            <div class="inputGroup">
                <p>Title</p>
                <input type="text" placeholder="Enter your recipe name" v-model="title" ref="title">
                <strong v-if="!checkTitleValidation">The title should be at least 5 characters.</strong>
            </div>
            <div class="inputGroup">
                <p>Description</p>
                <input type="text" placeholder="Explain Briefly About Your Recipe" v-model="description">
            </div>
            <div class="inputGroup">
                <p>Image</p>
                <input type="file" placeholder="Enter your recipe name" @change="(e) => { setImage(e) }">
            </div>
            <div class="inputGroup">
                <p>Estimate Preparation Time</p>
                <input type="number" placeholder="How long will it take to prepare" v-model="preparationTime">
                <strong v-if="!checkPreparationTimeValidation">Preparation time should be at least 5 min..</strong>
            </div>
            <div class="inputGroup">
                <p>Difficulty Level</p>
                <select v-model="difficultyLevel">
                    <option value="" disabled selected>Which levels of experties will the user need</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script src="./CreateForm0.js">
    
</script>

<style lang="css" scoped src="./CreateForm0.css">

</style>
