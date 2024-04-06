<template>
  <div>
    <div class="header" ref="header">
      <LogoComponent
        position="static"
        :parameters="`${forParameters}px`"
        :fontSize="`${forParameters - forParameters * (40 / 100)}px`"
      ></LogoComponent>
      <p>Burma Tasty House</p>
      <div class="buttonContainer">
        <button ref="homePageButton">Go To Home Page</button>
        <button ref="homePageButton" @click="goToNewsFeedPage">Go To News Feed Page</button>
      </div>
    </div>
  </div>
</template>

<script>
import LogoComponent from "@/components/Logo/LogoComponent.vue";
export default {
  name: "FirstHeader",

  components: {
    LogoComponent,
  },

  data() {
    return {
      forParameters: window.innerWidth * (6.5 / 100),
    };
  },

  mounted() {
    this.forParameters = window.innerWidth * (6.5 / 100);
    window.addEventListener("resize", () => {
      this.forParameters = window.innerWidth * (6.5 / 100);
    });

    this.$emit('header-height', this.$refs.header.offsetHeight);
  },

  methods: {
    goToNewsFeedPage () {
      this.$router.push({ name : 'NewsFeedPage'})
    }
  }
};
</script>

<style lang="css" scoped>
    .header {
    display: flex;
    justify-content: space-between;
    padding: 30px 55px;
    background-color: #CEEDC3;
    align-items: center;
}
.header p {
    font-size: 32px;
    font-weight: bold;
    font-family: Inter;
}

.header button {
    background-color: #3D8B22;
    color: white;
    padding: 10px 20px;
    border-radius: 30px;
    border: none;
    outline: none;
    transition: all 0.3s ease-in-out;
    width: 100%;
    font-size: 1.1em;
}

.header button:hover {
    transform: scale(1.2, 1.2);
}

.buttonContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
}
@media screen and (max-width:414px) {
    .header {
        padding: 30px 35px;
        gap: 1rem;
    }
    
    .header p {
        font-size: 20px;
    }

    .header button {
        font-size: 11px;
    }
}
</style>
