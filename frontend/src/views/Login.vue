<template>
  <div class="login-container">
    <div class="login-box box">
      <h1 class="title">TimeTracker</h1>
      <div class="sign-switcher">
        <b-button class="switch" @click = "isSignUp = true"
                  :class="isSignUp ? 'selected' : ''">
                  Sign Up
        </b-button>
        <b-button class="switch" @click = "isSignUp = false"
                  :class="!isSignUp ? 'selected' : ''">
                  Sign In
        </b-button>
      </div>
      <div class="form">

        <b-field label="Email">
          <b-input v-model="email" type="email">
          </b-input>
        </b-field>

        <b-field v-show="isSignUp" label="Username">
          <b-input v-model="username" type="text">
          </b-input>
        </b-field>

        <b-field label="Password">
          <b-input v-model="password" type="password">
          </b-input>
        </b-field>

        <b-field v-show ="isSignUp" label="Repeat password">
          <b-input v-model="repeat" type="password">
          </b-input>
        </b-field>

        <b-button @click = "auth()"
                  class="action-button"
                  type="is-dark is-fullwidth">
          {{isSignUp ? 'Sign Up' : 'Sign In'}}
        </b-button>

        <hr />

        <div class="social-login">
          <b-button class="google" icon-left="google">Sign in with Google</b-button>
          <b-button class="facebook" icon-left="facebook">Sign in with Facebook</b-button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data: () => ({
    isSignUp: true,
    email: '',
    username: '',
    password: '',
    repeat: '',
  }),
  methods: {
    auth() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
  .login-box {
    width: 450px;
    padding: 30px;
  }

  .login-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    text-align: center;
  }

  .switch {
    border: none;
    border-radius: 0%;
  }

  .switch.selected {
    border-bottom: 2px solid black;
    font-weight: bold;
  }

  .sign-switcher {
    border-bottom: 2px solid rgba(0,0,0,20%);
  }

  .form {
    padding-top: 20px;
  }

  .action-button {
    margin-top: 30px;
  }

  .google {
    background-color: #F14336;
  }

  .facebook {
    background-color: #475993;
  }

  .google, .facebook {
    color: white;
    font-size: 15px;
    width: calc(50% - 10px);
  }

  .social-login {
    display: flex;
    justify-content: space-between;
  }
</style>
