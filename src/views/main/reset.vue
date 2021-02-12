<template>
  <div class="container">
    <SideLogin/>
    <form @submit="handleResetPassword" class="form-container">
      <p class="text2">
        Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.
      </p>
      <p class="text3">
        To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.
      </p>
      <div class="form-input">
        <div class="login-input">
          <img src="../../assets/img/lock.png" class="login-label">
          <input type="password" id="password" placeholder="Create new password" v-model="password" required>
          <img src="../../assets/img/eye-open.png" class="login-label eye" id="togglePassword" @click="myFunction()">
        </div>
        <div class="login-input">
          <img src="../../assets/img/lock.png" class="login-label">
          <input type="password" id="password" placeholder="Repeat new password" v-model="repeatPassword" required>
          <img src="../../assets/img/eye-open.png" class="login-label eye" id="togglePassword" @click="myFunction()">
        </div>
        <button type="submit" id="confirm1" class="btn-1">Reset Password
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import SideLogin from '../../components/sideLogin'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  components: {
    SideLogin
  },
  data () {
    return {
      password: null,
      repeatPassword: null
    }
  },
  methods: {
    ...mapActions(['resetPassword']),
    handleResetPassword (e) {
      e.preventDefault()
      const payload = {
        id: localStorage.getItem('id'),
        password: this.password,
        repeat_password: this.repeatPassword
      }
      this.resetPassword(payload).then((res) => {
        this.$router.push('/login')
      })
        .catch((err) => {
          console.log(err)
        })
    },

    myFunction () {
      const togglePassword = document.getElementById('togglePassword')
      const password = document.getElementById('password')
      if (password.type === 'password') {
        password.type = 'text'
        togglePassword.src = '../../assets/img/eye-crossed.png'
      } else {
        password.type = 'password'
        togglePassword.src = '../../assets/img/eye-open.png'
      }
    },

    onKeyUpForgot () {
      const confirm = document.getElementById('confirm1')
      confirm.classList = 'change-btn'
    }
  }
}
</script>

<style scoped>
.form-container {
    margin-left: 40px;
}
.form-container p {
    font-family: Nunito Sans;
}

.change-btn {
  background: #6379F4;
  border: 1px solid #d0cccc;
  color: #fff;
  font-size: 18px;
  border-radius: 12px;
  display: block;
  text-align: center;
  padding: 10px 0px;
  margin-top: 70px;
}

.text2 {
    width: 320px;
    margin-top: 100px;
    color: #3A3D42;
    font-size: 20px;
}

.text3 {
    width: 380px;
    line-height: 22px;
    margin-top: 30px;
    color: rgba(58, 61, 66, 0.6);
    font-size: 12px;
}

.text4 {
    width: 380px;
    line-height: 22px;
    margin-top: 30px;
    color: rgba(58, 61, 66, 0.6);
    font-size: 13px;
    margin-bottom: 50px;
}

.text5 {
    width: 320px;
    color: #3A3D42;
    font-size: 20px;
}

.success {
    margin-top: 100px;
    margin-bottom: 30px;
}

.login-input {
    border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
    color: #D0CCCC;
    display: flex;
    flex-direction: row;
    padding-bottom: 5px;
    margin-top: 50px;
}

#email,
#password,
#username,
#fullname, #text {
    box-sizing: border-box;
    width: 100%;
    border: none;
    display: block;
    font-size: 14px;
    margin-left: 20px;
    font-family: Nunito Sans;
    color: #A9A9A9 80%;
    outline: none;
}

.forgot-password{
    font-size: 14px;
    width: 380px;
    text-align: right;
    margin-top: 30px;
    margin-left: 150px;
    color: rgba(58, 61, 66, 0.8);
}

.btn-1 {
    border: 1px solid #d0cccc;
    color: #D0CCCC;
    font-size: 18px;
    background: #6379F4;
    color: #fff;
    border-radius: 12px;
    display: block;
    text-align: center;
    padding: 10px 0px;
    margin-top: 70px;
    height: 57px;
    width: 433px;
}

.btn-register {
    border: 1px solid #d0cccc;
    color: #88888F;
    font-size: 18px;
    background: #DADADA;
    border-radius: 12px;
    display: block;
    text-align: center;
    padding: 10px 0px;
    margin-top: 70px;
}

.sign-up {
    font-family: Nunito Sans;
    color: rgba(58, 61, 66, 0.8);
    text-align: center;
    margin-top: 40px;
}

.sign-up a {
    color: #6379F4;
}

.eye {
    cursor: pointer;
}

input[type=number] {
    height: 60px;
    width: 48px;
    font-size: 30px;
    color: #3A3D42;
    text-align: center;
    margin-right: 10px;
    border: 1px solid rgba(169, 169, 169, 0.6);
    box-sizing: border-box;
    box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
    border-radius: 10px;

}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@media (max-width: 768px) {
    .pict-container {
        display: none;
    }
    form {
        width: 100%;
        margin-left: 0;
    }
    .form-container {
        margin: 0px 5px 0px 5px;
    }

}
</style>
