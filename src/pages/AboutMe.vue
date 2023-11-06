<template>
    <div class="Aboutme">
      <h2>ABOUT ME</h2>
      <div class="Aboutme">
        <p><strong>Name:</strong> {{ Name}}</p>
        <p><strong>Designation:</strong> {{ Designation }}</p>
        <p><strong>Company Name:</strong> {{ CompanyName}}</p>
        <p><strong>Email id:</strong> {{ Emailid }}</p>
        <p><strong>Qualification:</strong> {{ Qualification }}</p>
        <p><strong>Contact no:</strong> {{ Contactno }}</p>
   
        
      </div>
    </div>
  </template>
   
  <script setup>
  import { ref } from "vue";
   
  const Name = ref("Kancharla Pravalika");
  const Designation = ref("Software Engineer");
  const CompanyName = ref("LTIMINDTREE");
  const Emailid = ref("Kancharlapravalika18@gmail.com");
  const Qualification = ref("Pursed B-tech");
  const Contactno = ref("9701842259");
  
  </script>
   
  <style scoped>
  .Aboutme {
    background-color: peachpuff;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: grid;
    align-items: center;
    justify-content: center;
  }
  </style>