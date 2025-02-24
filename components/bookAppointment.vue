<template>
    <section id="book-appointment" class="bg-gray-100 py-16 px-6">
      <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          Book an Appointment
        </h2>
        <p class="text-lg text-gray-600 text-center mb-8">
          Schedule a visit with our dental specialists at your convenience.
        </p>
  
        <form @submit.prevent="submitForm" class="space-y-6">
          <!-- Name -->
          <div>
            <label class="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input type="text" v-model="form.name" required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
  
          <!-- Email -->
          <div>
            <label class="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" v-model="form.email" required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
  
          <!-- Phone -->
          <div>
            <label class="block text-gray-700 font-semibold mb-2">Phone Number</label>
            <input type="tel" v-model="form.phone" required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
  
          <!-- Select Service -->
          <div>
            <label class="block text-gray-700 font-semibold mb-2">Select Service</label>
            <select v-model="form.service" required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="" disabled>Select a service</option>
              <option value="General Dentistry">General Dentistry</option>
              <option value="Dental Implants">Dental Implants</option>
              <option value="Dental Surgery">Dental Surgery</option>
              <option value="Teeth Alignment">Teeth Alignment</option>
              <option value="Teeth Whitening">Teeth Whitening</option>
              <option value="Teeth Protection">Teeth Protection</option>
            </select>
          </div>
  
          <!-- Appointment Date -->
          <div>
            <label class="block text-gray-700 font-semibold mb-2">Preferred Date</label>
            <input type="date" v-model="form.date" required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
  
          <!-- Submit Button -->
          <div class="text-center">
            <button type="submit" class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              Confirm Appointment
            </button>
          </div>
        </form>
  
        <!-- Success Message -->
        <div v-if="successMessage" class="mt-6 text-center text-green-600 font-semibold">
          {{ successMessage }}
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const form = ref({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: ''
  })
  
  const successMessage = ref('')
  
  const submitForm = () => {
    successMessage.value = `Thank you, ${form.value.name}! Your appointment for ${form.value.service} on ${form.value.date} has been booked.`
    
    // Reset form after submission
    form.value = { name: '', email: '', phone: '', service: '', date: '' }
  
    // Hide the message after a few seconds
    setTimeout(() => { successMessage.value = '' }, 5000)
  }
  </script>
  
  <style scoped>
  /* Additional styling if needed */
  </style>