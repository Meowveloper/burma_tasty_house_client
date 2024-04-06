<template>
  <div class="background">
    <div class="blurLayer" @click="emitColseLoginForm">
      <div class="loginFormContainer" @click="(event) => {event.stopPropagation();}">
        <div class="B">B</div>
        <div class="inputGroup">
          <label for="">Email</label><br>
          <input ref="inputEmail" type="email" placeholder="Enter your email" v-model="user.email" @keyup.enter="$refs['inputPassword'].focus();">
        </div>

        <div class="inputGroup">
          <label for="">Password</label><br>
          <input ref="inputPassword" type="password" placeholder="Enter your password" v-model="user.password" @keyup.enter="login">
        </div>

        <button @click="login">Log in</button>
        
        <div class="orContainer">
          <div class="line"></div>
          <div>OR</div>
          <div class="line"></div>
        </div>

        <button>Login With Google <i class="bi bi-google"></i></button>

        <div class="orContainer">
          <div class="line"></div>
          <div>New User?</div>
          <div class="line"></div>
        </div>

        <button>Register</button>
      </div>
    </div>
  </div>
</template>

<script src="./LoginForm.js"></script>

<style src="./LoginForm.css" lang="css" scoped></style>
