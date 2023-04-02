<script>
    export default{
        data(){
            return {
            email:"",
            password:""
            }
        },
        methods:{
            login(){
                fetch('http://127.0.0.1:8000/api/user/login',{
      headers:{
        'accept':'applicaton/json',
        'Content-Type':'application/json'
      },
      method:'POST',
      body:JSON.stringify({email : this.email,password: this.password})
    }).then(response => {
      if (response.ok) {
        this.successMessage = "Connexion réussie !";
        this.errorMessage = "";

      } else {
        this.successMessage = "";
        this.errorMessage = "Échec de l'inscription";
      }
      console.log(response.status);
      return response.json();
    }).then(data=>{console.log(data.token); 
    window.localStorage.setItem("result", data.token)})
            }
        }
    }
</script>

<template>
       <section class="signup">
        <div class="container">
            <div class="signup-content">
                <div class="signup-form">
                    <h2 class="form-title">Sign up</h2>
                    <form @submit.prevent="login">
                        <div class="form-group">
                            <label for="email"><i class="zmdi zmdi-account material-icons-email"></i></label>
                            <input type="text" name="email" id="email" v-model="email" placeholder="Votre nom" required/>
                        </div>
                        <div class="form-group">
                            <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                            <input type="password" name="password" id="password" v-model="password" placeholder="Mot de passe" required/>
                        </div>
                        <div class="form-group form-button">
                            <input type="submit" name="signup" id="signup" class="form-submit" value="se connecter"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>