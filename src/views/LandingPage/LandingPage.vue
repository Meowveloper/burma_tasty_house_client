<template>
  <LoginForm v-if="showLoginForm" @close-login-form="()=>{showLoginForm = false}"></LoginForm>
  <div>
    <div class="backgroundContainer">
      <div></div>
      <div></div>
    </div>

    <div class="contentContainer">
      <LogoComponent :top="responsiveLogoPosition().top" :left="responsiveLogoPosition().left"></LogoComponent>
      <div class="textContainer">
        <p data-aos="fade-up-right" data-aos-duration="3000" data-aos-delay="300">BURMA<br> TASTY HOUSE</p>
        <P data-aos="zoom-out-up" data-aos-duration="2000" data-aos-delay="300">A FOOD RECIPE SHARING PLATFORM FOR ALL FOODIES IN MYANMAR</P>
        <button @click="toggleLoginForm">START</button>
      </div>

      <div class="imgContainer">
        <img data-aos="fade-up-left" data-aos-offset="500" data-aos-duration="3000" data-aos-delay="300" src="../../assets/LandingPage/Preparing Photo.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>

import LoginForm from '@/components/LoginForm/LoginForm.vue';
import LogoComponent from '@/components/Logo/LogoComponent.vue';
export default {
  name: "LandingPage",

  components: {
    LoginForm,
    LogoComponent 
  }, 

  data () {
    return {
      showLoginForm: false
    }
  },

  mounted () {
    document.title = "BURMA TASTY HOUSE", 

    window.addEventListener('resize', () => {
      this.responsiveLogoPosition();
    })
  }, 

  methods: {
    toggleLoginForm () {
      this.showLoginForm = true;
    }, 


    responsiveLogoPosition () {
      if(window.innerWidth < 435) {
        return {
          top : '20%',
          left: '10%'
        } 
      } else {
        return {
          top : '10%', 
          left : '10%'
        }
      }
    }
  }, 
};
</script>

<style src="./LandingPage.css" lang="css" scoped></style>
