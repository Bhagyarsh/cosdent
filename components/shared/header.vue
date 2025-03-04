<template>
    <!-- Set a fixed height with h-20 and add extra horizontal padding -->
    <header class="relative bg-white shadow-md sticky top-0 z-50 h-24">
      <div class="flex items-center justify-between h-full px-6">
        <!-- Left: Logo -->
        <div class="flex-1">
          <!-- Replace /logo.png with your logo image path or use text -->
          <img src="/logo.png" alt="Logo" class="h-16 inline-block" />
        </div>
  
        <!-- Center: Navigation (Desktop) / Hamburger Menu (Mobile) -->
        <div class="flex-1 text-center">
          <!-- Desktop Navigation: visible on md and up -->
          <nav class="hidden md:block">
            <ul class="flex justify-center space-x-6">
              <li>
                <a href="#home" class="text-gray-700 text-xl hover:text-blue-500">Home</a>
              </li>
              <li>
                <a href="#about-us" class="text-gray-700 text-xl hover:text-blue-500">About Us</a>
              </li>
              <li>
                <a href="#services" class="text-gray-700 text-xl hover:text-blue-500">Service</a>
              </li>
              <li>
                <a href="#contact-us" class="text-gray-700 text-xl hover:text-blue-500">Contact Us</a>
              </li>
            </ul>
          </nav>
          <!-- Mobile Hamburger Menu: visible below md breakpoint -->
          <div class="block md:hidden">
            <button @click="toggleMenu">
              <svg
                class="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Right: Book Appointment Button (hidden on small screens) -->
        <div class="flex-1 text-right hidden md:block">
          <button class="bg-blue-500 text-white px-10 py-3 nuxi module add icon
            hover:bg-blue-600 rounded-full">
            Book Appointment 
            <i class="flaticon-up-right-arrow"></i>
          </button>
        </div>
      </div>
  
      <!-- Mobile Dropdown Navigation -->
      <div v-if="isMenuOpen" class="md:hidden bg-white shadow-md">
        <ul class="flex flex-col p-4 space-y-2">
          <li>
            <a @click="closeMenu" href="#home" class="text-gray-700 hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a @click="closeMenu" href="#about-us" class="text-gray-700 hover:text-blue-500">
              About Us
            </a>
          </li>
          <li>
            <a @click="closeMenu" href="#services" class="text-gray-700 hover:text-blue-500">
              Service
            </a>
          </li>
        </ul>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isMenuOpen = ref(false)
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
  
  const closeMenu = () => {
    isMenuOpen.value = false
  }
  </script>
  
  <style scoped>
  /* You can add additional custom styles here if needed */
  </style>