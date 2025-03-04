<template>
    <section class=" bg-blue-50 py-16 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our Dental Services
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed mb-8">
          We offer a wide range of dental services to keep your smile healthy and bright.
        </p>

        <!-- Service Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="service in services" :key="service.id" class="bg-white p-6 rounded-lg shadow-md text-center">
            <!-- <img :src="service.icon" :alt="service.name" class="h-16 mx-auto mb-4" /> -->
          
            <i :class="service.icon + ' text-5xl'"></i>
  
            <h3 class="text-xl font-semibold text-gray-700 mb-2">{{ service.name }}</h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const services = [
    {
      id: 1,
      name: 'General Dentistry',
      icon: 'flaticon flaticon-dentist-1', // Replace with the actual path to your icon
      description: 'Regular check-ups, cleaning, and preventive care for a healthy smile.',
    },
    {
      id: 2,
      name: 'Dental Implants',
      icon: 'flaticon flaticon-dental-implant',
      description: 'Replace missing teeth with durable and natural-looking implants.',
    },
    {
      id: 3,
      name: 'Dental Surgery',
      icon: 'flaticon flaticon-patient',
      description: 'Advanced surgical procedures including wisdom tooth removal.',
    },
    {
      id: 4,
      name: 'Teeth Alignment',
      icon: 'flaticon flaticon-aligner',
      description: 'Straighten your teeth with braces or clear aligners for a perfect smile.',
    },
    {
      id: 5,
      name: 'Teeth Whitening',
      icon: 'flaticon flaticon-dental-veneer',
      description: 'Brighten your smile with our safe and effective whitening treatments.',
    },
    {
      id: 6,
      name: 'Braces & Aligners',
      icon: 'flaticon flaticon-braces',
      description: 'Metal, ceramic, and invisible aligners to correct misaligned teeth.',
    },
    {
      id: 7,
      name: 'Prosthesis',
      icon: 'flaticon flaticon-dental-implant-1',
      description: 'Custom-made dentures, crowns, and bridges to restore functionality.',
    },
    {
      id: 8,
      name: 'Teeth Protection',
      icon: 'flaticon flaticon-tooth',
      description: 'Night guards, sports mouthguards, and treatments to protect your teeth from damage.',
    },
  ]
  </script>
  
  <style scoped>

  </style>