<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div>
      <nav class="link_container">
        <RouterLink to="/">Home</RouterLink>
        <br>
        <RouterLink to="/register">register</RouterLink>
        <br>
        <RouterLink to="/login">login</RouterLink>
        <br>
        <RouterLink to="/add/currencies">Add Currencies</RouterLink>
        <br>
        <RouterLink to="/get/currencies">Get Currencies</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
.link_container {
  display: flex;
  width: 50%;
  justify-content: space-between;
}
</style>

