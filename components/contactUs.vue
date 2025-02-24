<template>
    <section id="contact-us" class="bg-white py-16 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Get in Touch
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed mb-8">
          Have questions or need to book an appointment? Contact us today and our friendly team will be happy to assist you!
        </p>
  
        <!-- Contact Form and Info Section -->
        <div class="flex flex-col md:flex-row items-start md:space-x-8">
          <!-- Contact Form -->
          <div class="md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-gray-700 mb-4">Send Us a Message</h3>
            <form @submit.prevent="submitForm">
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                <input type="text" v-model="form.name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                <input type="email" v-model="form.email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-semibold mb-2">Message</label>
                <textarea v-model="form.message" rows="4" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Send Message</button>
            </form>
          </div>
  
          <!-- Clinic Info -->
          <div class="md:w-1/2 text-left mt-8 md:mt-0">
            <h3 class="text-2xl font-semibold text-gray-700 mb-4">Our Clinic</h3>
            <p class="text-gray-600 mb-2"><strong>Address:</strong> 123 Smile Street, Dental City, 56789</p>
            <p class="text-gray-600 mb-2"><strong>Phone:</strong> +1 234 567 890</p>
            <p class="text-gray-600 mb-2"><strong>Email:</strong> contact@yourdentalclinic.com</p>
            <p class="text-gray-600 mb-4"><strong>Hours:</strong> Mon - Fri: 9 AM - 6 PM</p>
  
            <!-- Google Maps Embed -->
            <div class="mt-4">
              <iframe
                class="w-full h-48 rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Dental+Clinic"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  })
  
  const submitForm = () => {
    alert(`Thank you, ${form.value.name}! Your message has been sent.`)
    form.value = { name: '', email: '', message: '' } // Reset form
  }
  </script>
  
  <style scoped>
  /* Additional styling if needed */
  </style>
  