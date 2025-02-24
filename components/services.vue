<template>
    <section class="bg-gray-100 py-16 px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our Dental Services
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed mb-8">
          We offer a wide range of dental services to keep your smile healthy and bright.
        </p>
  
        <!-- Service Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.id" class="bg-white p-6 rounded-lg shadow-md text-center">
            <img :src="service.icon" :alt="service.name" class="h-16 mx-auto mb-4" />
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
      icon: '/icons/general-dentistry.png', // Replace with the actual path to your icon
      description: 'Regular check-ups, cleaning, and preventive care for a healthy smile.',
    },
    {
      id: 2,
      name: 'Dental Implants',
      icon: '/icons/implants.png',
      description: 'Replace missing teeth with durable and natural-looking implants.',
    },
    {
      id: 3,
      name: 'Dental Surgery',
      icon: '/icons/dental-surgery.png',
      description: 'Advanced surgical procedures including wisdom tooth removal.',
    },
    {
      id: 4,
      name: 'Teeth Alignment',
      icon: '/icons/alignment.png',
      description: 'Straighten your teeth with braces or clear aligners for a perfect smile.',
    },
    {
      id: 5,
      name: 'Teeth Whitening',
      icon: '/icons/whitening.png',
      description: 'Brighten your smile with our safe and effective whitening treatments.',
    },
    {
      id: 6,
      name: 'Teeth Protection',
      icon: '/icons/teeth-protection.png',
      description: 'Custom-made mouthguards to protect your teeth from damage.',
    },
  ]
  </script>
  
  <style scoped>
  /* Add any additional styling if needed */
  </style>