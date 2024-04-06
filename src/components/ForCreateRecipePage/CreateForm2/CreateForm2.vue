<template>
  <div>
    <p class="title">
      Add Ingredients That Will Be Necessary For Your Recipe
    </p>

    <div class="formContainer">
      <template v-if="addedIngredients.length !== 0">
        <p>Added Ingredients</p>
        <div class="addedTagsContainer">
          <div v-for="(item, i) in addedIngredients" :key="i" class="addedTag">
            {{ item }} <i class="bi bi-x-circle-fill" @click="() => { removeIngredient(i) }"></i>
          </div>
        </div>
        <hr />
      </template>

      <div v-if="!checkAddIngredientsValidation">
        <strong style="color: red;">You need to add at least two ingredients</strong>
      </div>

      <div class="inputGroup">
        <p>Ingredient</p>
        <input type="text" placeholder="Add a new ingredient." v-model="newIngredient"/>
      </div>

      <button :disabled="!checkNewIngredientValidation" @click="addNewIngredient">Add</button>
    </div>
  </div>
</template>

<script src="./CreateForm2.js"></script>

<style lang="css" scoped src="./CreateForm2.css"></style>
