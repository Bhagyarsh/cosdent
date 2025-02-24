<template>
    <section id="testimonials" class="bg-gray-100 py-16 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">What Our Patients Say</h2>
        <p class="text-lg text-gray-600 leading-relaxed mb-8">We are proud to provide excellent dental care. See what our happy patients say about us.</p>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-gray-700 italic">"{{ testimonial.review }}"</p>
            <div class="flex items-center justify-center mt-4">
              <img :src="testimonial.image" :alt="testimonial.name" class="w-12 h-12 rounded-full mr-3">
              <div>
                <h4 class="font-semibold text-gray-800">{{ testimonial.name }}</h4>
                <p class="text-sm text-gray-500">{{ testimonial.rating }} ⭐</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const testimonials = [
    { name: "John Doe", review: "Excellent service! Highly recommended.", rating: "5/5", image: "/patients/john.jpg" },
    { name: "Jane Smith", review: "The best dental care experience I've ever had.", rating: "5/5", image: "/patients/jane.jpg" },
    { name: "Michael Lee", review: "Very professional and friendly staff.", rating: "5/5", image: "/patients/michael.jpg" }
  ];
  </script>