<template>
    <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center relative">
        <button @click="closePopup" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          ✖
        </button>
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Book Your Appointment</h2>
        <p class="text-gray-600 mb-4">Don't miss out! Secure your appointment with our expert dentists today.</p>
        <a href="/#contact-us">
          <button class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Book Now</button>
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const showPopup = ref(false)
  
  const closePopup = () => {
    showPopup.value = false
  }
  
  // Show popup after 5 seconds
  onMounted(() => {
    setTimeout(() => {
      showPopup.value = true
    }, 5000)
  })
  </script>
  
  <style scoped>
  /* Additional styling if needed */
  </style>