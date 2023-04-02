<script>
    export default{
        data(){
            return {
                first_currency:"",
                second_currency:"",
                pairs:{
                    "conversion_rate":""
                }
            }
        },
        methods:{
            add(){
                fetch('http://127.0.0.1:8000/api/add/currencies/itzThspumXH7mZeze8EW4kOoJygi2AWSfVYBdKzd',{
      headers:{
        'accept':'applicaton/json',
        'Content-Type':'application/json'
      },
      method:'POST',
      body:JSON.stringify({first_currency : this.first_currency,second_currency: this.second_currency,pairs: this.pairs})
    }).then(response => {
      if (response.ok) {
        this.successMessage = "Connexion réussie !";
        this.errorMessage = "";
        console.log(response)
        // window.localStorage.setItem("result", response);

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
                    <form @submit.prevent="add">
                        <div class="form-group">
                            <label for="first_currency"><i class="zmdi zmdi-account material-icons-first_currency"></i></label>
                            <input type="text" name="first_currency" id="first_currency" v-model="first_currency" placeholder="premiere devise" required/>
                        </div>
                        <div class="form-group">
                            <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                            <input type="text" name="second_currency" id="second_currency" v-model="second_currency" placeholder="deuxieme devise" required/>
                        </div>
                        <div class="form-group">
                            <label for="pairs"><i class="zmdi zmdi-lock"></i></label>
                            <input type="text" name="pairs" id="pairs" v-model="pairs.conversion_rate" placeholder="le taux de conversion" required/>
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