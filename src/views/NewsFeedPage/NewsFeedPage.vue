<template>
  <FirstHeader></FirstHeader>
  <div class="goToCreateRecipe">
    <button @click="goToRecipeCreatePage">Share Your Own Recipe</button>
  </div>
  <div class="contentContainer">
    <h4>Recipes Shared by People You Followed</h4>

    <div class="cardContainer">
      <!-- https://www.allrecipes.com/thmb/s0mJbUaWhT4cvgMRK28grMkUXcU=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8805-CrispyFriedChicken-mfs-3x2-072-d55b8406d4ae45709fcdeb58a04143c2.jpg -->
      <div class="card"></div>
    </div>
  </div>
</template>

<script src="./NewsFeedPage.js"></script>

<style src="./NewsFeedPage.css" lang="css" scoped></style>
