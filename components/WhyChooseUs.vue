<template>
    <section id="why-choose-us" class="py-16 px-6 bg-blue-50 relative" >
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Why Choose Us?
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed mb-8">
          We are dedicated to providing the best dental care experience. Here's why our patients trust us with their smiles.
        </p>
        <i class="flaticon flaticon-sparkle-1 text-4xl absolute top-1/2 left-0 starPulse"></i>
        <!-- Benefits Grid Around the Image -->
        <div class="relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 mt-12">
  
          <!-- Left Benefits -->
          <div class="flex flex-col space-y-8 md:space-y-12">
            <div v-for="benefit in leftBenefits" :key="benefit.id" class="bg-gray-100 p-6 rounded-lg shadow-md flex items-center justify-between sm:flex-row flex-col sm:text-left text-center">
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-700 mb-2">{{ benefit.title }}</h3>
                <p class="text-gray-600">{{ benefit.description }}</p>
              </div>
              <i :class="benefit.icon" class="text-blue-500 text-5xl mt-4 sm:mt-0 sm:ml-4" />
            </div>
          </div>
  
          <!-- Center Image -->
          <div class="flex items-center justify-center">
            <img src="/images/toothWhyChooseUs.png" alt="Tooth Icon" class="w-124 h-124" />
          </div>
  
          <!-- Right Benefits -->
          <div class="flex flex-col space-y-8 md:space-y-12">
            <div v-for="benefit in rightBenefits" :key="benefit.id" class="bg-gray-100 p-6 rounded-lg shadow-md flex items-center justify-between sm:flex-row-reverse flex-col sm:text-right text-center">
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-700 mb-2">{{ benefit.title }}</h3>
                <p class="text-gray-600">{{ benefit.description }}</p>
              </div>
              <i :class="benefit.icon" class="text-blue-500 text-5xl mt-4 sm:mt-0 sm:mr-4" />
            </div>
          </div>
  
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const leftBenefits = [
    {
      id: 1,
      title: "Experienced Dentists",
      icon: 'flaticon flaticon-dentist',
      description: "Our highly qualified team ensures expert dental care for all patients.",
    },
    {
      id: 2,
      title: "Advanced Technology",
      icon: "flaticon flaticon-online-appointment",
      description: "We use state-of-the-art equipment for precise and comfortable treatments.",
    },
    {
      id: 3,
      title: "Personalized Treatment",
      icon: "flaticon flaticon-anesthesia",
      description: "We create tailored dental plans to meet your unique needs.",
    },
  ]
  
  const rightBenefits = [
    {
      id: 4,
      title: "Comfortable Environment",
      icon: "flaticon flaticon-patient",
      description: "Our clinic offers a relaxing and friendly environment for all patients.",
    },
    {
      id: 5,
      title: "Emergency Services",
      icon: "flaticon flaticon-dentistry",
      description: "We offer prompt emergency dental care for urgent situations.",
    },
    {
      id: 6,
      title: "Strict Hygiene Protocols",
      icon: "flaticon flaticon-dental-insurance",
      description: "We follow the highest standards of hygiene and sterilization for your safety.",
    },
  ]
  </script>
  
  <style scoped>
  /* Ensures icons stay on the left for small screens */
  @media (max-width: 640px) {
    .benefit-icon {
      order: -1 !important;
      margin-bottom: 1rem;
    }
  }

  @keyframes starPulse {
    0% { font-size: 36px; }
    50% { font-size: 100px; }
    100% { font-size: 36px; }
}

.starPulse {
    display: inline-block;
    font-size: 36px;
    font-weight: bold;
    animation: starPulse 2s infinite ease-in-out;
}
  </style>
  