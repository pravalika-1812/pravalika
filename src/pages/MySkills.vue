<template>
  <div class="Skills">
    <h2>MY SKILLS</h2>
    <div class="Skills">
      <p><strong>Technical Skills:</strong> {{ Tech }}</p>
      
 
      
    </div>
  </div>
</template>
 
<script setup>
import { ref } from "vue";
 
const Tech = ref("1.Python,2.MySQL,3.HTML,CSS,4.Windows,5.linux");

</script>
 
<style scoped>
.Skills {
  background-color:cornsilk;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: grid;
  align-items: center;
  justify-content: center;
}
</style>