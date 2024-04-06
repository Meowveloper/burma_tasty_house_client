<template>
  <div class="container">
    <div ref="ref1" class="active" @click="() => { navigate(0) }">1</div>
    <div ref="ref2" @click="() => { navigate(1) }">2</div>
    <div ref="ref3" @click="() => { navigate(2) }">3</div>
    <div ref="ref4" @click="() => { navigate(3) }">4</div>
  </div>
</template>

<script src="./SideNavBar.js"></script>

<style lang="css" scoped src="./SideNavBar.css"></style>
