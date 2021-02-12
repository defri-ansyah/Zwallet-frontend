<template>
  <div class="container">
    <SideLogin/>
    <form @submit="handleLogin" class="form-container">
      <p class="text2">
        Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users
      </p>
      <p class="text3">
        Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!
      </p>
      <div class="form-input">
        <div class="login-input">
          <img src="../../assets/img/mail.png" class="login-label">
          <input type="email" id="email" placeholder="Enter your email" v-model="email" required>
        </div>
        <div class="login-input">
          <img src="../../assets/img/lock.png" class="login-label">
          <input type="password" id="password" placeholder="Enter your password" v-model="password" required>
          <img src="../../assets/img/eye-open.png" class="login-label eye" id="togglePassword" onclick="myFunction()">
        </div>
        <router-link to="/forgot" class="forgot-password">
          <p>Forgot password?</p>
        </router-link>
        <button type="submit" class="btn-1">Login
        </button>
        <footer class="sign-up">
          <span>
            Don’t have an account? Let’s
          </span>
          <router-link to="/register">Sign Up</router-link>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
import SideLogin from '../../components/sideLogin'
// import axios from 'axios'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'Login',
  components: {
    SideLogin
  },
  data () {
    return {
      items: [],
      isLogin: true,
      email: null,
      password: null,
      userId: null
    }
  },
  methods: {
    ...mapActions(['login']),
    handleLogin (e) {
      const payload = {
        email: this.email,
        password: this.password
      }
      e.preventDefault()
      this.login(payload)
        .then((res) => {
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err.response.data.error.message)
          alert(err.response.data.error.message)
        })
    }
    // localData () {
    //   console.log(this.userId)
    //   const parsed = JSON.stringify({
    //     isLogin: true,
    //     id: this.userId
    //   })
    //   localStorage.setItem('user', parsed)
    // },
    // login (e) {
    //   e.preventDefault()
    //   axios
    //     .post('http://localhost:4000/users/login', {
    //       email: this.email,
    //       password: this.password
    //     }).then((res) => {
    //       if (res.data.statusCode === 200) {
    //         this.userId = res.data.result[0].id
    //         this.$router.push('/')
    //         this.localData()
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // }
  },
  computed: {
    ...mapGetters(['getUser']),
    ...mapState({
      userId: state => state.idUser
    })
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
