<template>
    <div class="family">
      <h2>My Family</h2>
      <div class="my-family">
        <p><strong>Father:</strong> {{ Father }}</p>
        <p><strong>Mother:</strong> {{ Mother }}</p>
        <p><strong>Elder Sister:</strong> {{ Elder }}</p>
        <p><strong>Younger Sister:</strong> {{ Younger }}</p>

   
        
      </div>
    </div>
  </template>
   
  <script setup>
  import { ref } from "vue";
   
  const Father = ref("Kancharla Mallesh-Bussines");
  const Mother = ref("Kancharla Parvathi - Home Maker");
  const Elder = ref(
    "Kancharla Nandini - Pursuing MPharmacy"
  );
  const Younger = ref(
    "Kancharla Hemachandana - Pursuing Degree"
  );
  </script>
   
  <style scoped>
  .family {
    background-color: powderblue;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: grid;
    align-items: center;
    justify-content: center;
  }
  </style>