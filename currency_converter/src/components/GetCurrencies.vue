<script>
export default {
    data() {
        return {
            list: []
        }
    },
    methods: {
        async tableau(){
            fetch('http://127.0.0.1:8000/api/get/currencies', {  
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
        }).then(data => { this.list = data.data, console.log(this.list) })
        }
        
    },
    created(){
        this.tableau();
    } 
}

</script>

<template>
    <table class="table-style">
<thead class="thead-dark" id="thead-dark">
    <tr>
        <th scope="col">#</th>
        <th scope="col">premiere devise</th>
        <th scope="col">deuxieme devise</th>
        <th scope="col">taux de conversion</th>

      </tr>
</thead>
<tbody id="tbody">
    {{ list }}
    <tr v-for="lists in list" >
        <td>{{ lists.id }}</td>
        <td>{{ lists.first_currency }}</td>
        <td>{{ lists.second_currency }}</td>
        <td>{{ lists.has_one_pair.conversion_rate }}</td>
    </tr>
</tbody>

</table>
</template>