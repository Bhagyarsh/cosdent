<template>
    <footer class="bg-blue-900 text-white py-8 px-6">
      <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <!-- Clinic Info -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Your Dental Clinic</h3>
          <p class="text-gray-300">Providing quality dental care with a patient-first approach.</p>
        </div>
  
        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="/" class="hover:text-gray-300">Home</a></li>
            <li><a href="/#about-us" class="hover:text-gray-300">About Us</a></li>
            <li><a href="/#services" class="hover:text-gray-300">Services</a></li>
            <li><a href="/#contact-us" class="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
  
      <!-- Contact Info -->
      <div>
        <h3 class="text-xl font-semibold mb-4">Contact</h3>
        <div class="text-gray-300 flex items-top mb-3">
          <div><Icon name="material-symbols:location-on-outline"  class="contact-icon" /></div>
          
          <span>Dr KC Diagnostics, Sai arcade, plot 184, chhatrapati shivaji maharaj road, opp panvel bus stand, old panvel 410206.</span>
        </div>
    
        <div class="text-gray-300 flex items-top  mb-3">
          <div>
            <Icon name="material-symbols:call-outline"  class="contact-icon" />
          </div>

          9326382811 / 9309822388
        </div>
    
        <div class="text-gray-300 flex items-top">
          <div><Icon name="material-symbols:mail-outline"  class="contact-icon" /></div>
          cosdentdentalstudio@gmail.com
        </div>
      </div>
  
        <!-- Social Media -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-300 hover:text-white">
              <Icon name="mdi:facebook" class="text-2xl" />
            </a>
            <a href="#" class="text-gray-300 hover:text-white">
              <Icon name="mdi:twitter" class="text-2xl" />
            </a>
            <a href="#" class="text-gray-300 hover:text-white">
              <Icon name="mdi:instagram" class="text-2xl" />
            </a>
            <a href="#" class="text-gray-300 hover:text-white">
              <Icon name="mdi:linkedin" class="text-2xl" />
            </a>
          </div>
        </div>
  
      </div>
  
      <!-- Copyright -->
      <div class="text-center mt-8 border-t border-gray-600 pt-4 text-gray-400">
        &copy; {{ new Date().getFullYear() }} Your Dental Clinic. All Rights Reserved.
      </div>
    </footer>
  </template>
  
  <script setup>
  // No additional JavaScript needed.
  </script>
  
  <style scoped>
  /* Custom icon size for contact info */
  .contact-icon {
    width: 24px;
    height: 24px;
    margin-right: 0.5rem;
  }
  </style>
  