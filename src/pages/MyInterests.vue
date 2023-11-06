<template>
  <div class="interests">
    <h2>MY INTERESTS</h2>
    <div class="interests">
      <p><strong>Hobbies:</strong> {{ Hobbies }}</p>
      <p><strong>Sports:</strong> {{ Sports }}</p>
      <p><strong>Travel:</strong> {{ Travel }}</p>
      <p><strong>Books:</strong> {{ Books }}</p>
      <p><strong>Outdoor activities:</strong> {{ Outdoor }}</p>
 
      
    </div>
  </div>
</template>
 
<script setup>
import { ref } from "vue";
 
const Hobbies = ref("Dancing,watching movies,drawing");
const Sports = ref("Love to play Kho-Kho");
const Travel = ref("Love travelling");
const Books = ref("Love reading fictional books");
const Outdoor = ref("hiking,star-gazing");
</script>
 
<style scoped>
.interests {
  background-color: darksalmon ;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: grid;
  align-items: center;
  justify-content: center;
}
</style>