<template>
  <div>
    <p class="title">
      Add Tags To Your Recipe so that others can find it easily..
    </p>

    <div class="formContainer">
      <template v-if="addedTags.length !== 0">
        <p>Added Tags</p>
        <div class="addedTagsContainer">
          <div v-for="(item, i) in addedTags" :key="i" class="addedTag">
            {{ item }} <i class="bi bi-x-circle-fill" @click="() => { removeTag(i) }"></i>
          </div>
        </div>
        <hr />
      </template>

      <div v-if="!checkAddedTagsValidation">
        <strong style="color: red;">You will need to add at least one tag.</strong>
      </div>

      <div class="inputGroup">
        <p>Tag</p>
        <input type="text" placeholder="Add a new tag." v-model="newTag"/>
      </div>

      <button :disabled="!checkOneTagValidation" @click="addNewTag">Add</button>
    </div>
  </div>
</template>

<script src="./CreateForm1.js"></script>

<style lang="css" scoped src="./CreateForm1.css"></style>
