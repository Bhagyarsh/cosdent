<template>
    <!-- Hero Section with a background image -->
    <section
      class="relative h-screen bg-cover bg-center"
      style="background-image: url('landing.webp')"
    >
      <!-- Overlay for a darker effect -->
      <div class="absolute inset-0 bg-black opacity-50"></div>
  
      <!-- Content overlaying the background image -->
      <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Dental Clinic
        </h1>
        <p class="text-lg md:text-2xl mb-8">
          Providing Quality Dental Care for Your Perfect Smile
        </p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded">
          Get Started
        </button>
      </div>
    </section>
  </template>
  
  <script setup>
  // No additional JavaScript is required for this static hero section.
  </script>
  
  <style scoped>
  /* Additional custom styling if needed */
  </style>