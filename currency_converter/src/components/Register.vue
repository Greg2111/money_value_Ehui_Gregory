<script>
    // const url = "http://127.0.0.1:8000/api";

    export default{
        data(){
            return {
            name :"",
            email:"",
            password:""
            }
        },
        methods:{
            register(){
                fetch('http://127.0.0.1:8000/api/user/register',{
      headers:{
        'accept':'applicaton/json',
        'Content-Type':'application/json'
      },
      method:'POST',
      body:JSON.stringify({name : this.name, email : this.email,password: this.password})
    }).then(response => {
      if (response.ok) {
        this.successMessage = "Inscription réussie !";
        this.errorMessage = "";
      } else {
        this.successMessage = "";
        this.errorMessage = "Échec de l'inscription";
      }
      console.log(response.status);
      return response.json();
    })
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
                    <form @submit.prevent="register">
                        <div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="name" id="name" v-model="name" placeholder="Votre nom" required/>
                        </div>
                        <div class="form-group">
                            <label for="email"><i class="zmdi zmdi-account material-icons-email"></i></label>
                            <input type="text" name="email" id="email" v-model="email" placeholder="Votre nom" required/>
                        </div>
                        <div class="form-group">
                            <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                            <input type="password" name="password" id="password" v-model="password" placeholder="Mot de passe" required/>
                        </div>
                        <div class="form-group form-button">
                            <input type="submit" name="signup" id="signup" class="form-submit" value="s'inscrire"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>