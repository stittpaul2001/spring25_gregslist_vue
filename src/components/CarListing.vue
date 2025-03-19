<script setup>
import { AppState } from '@/AppState.js';
import { Car } from '@/models/Car.js';
import { carsService } from '@/services/CarsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';

defineProps({
  carProp: { type: Car, required: true }
})

const account = computed(() => AppState.account)

async function deleteCar(carId) {
  try {
    const confirmed = await Pop.confirm('Are you sure you want to delete this car?', 'It will be gone forever!', 'Yes I am sure', "I've changed my mind")

    if (!confirmed) {
      return
    }

    await carsService.deleteCar(carId)
  } catch (error) {
    Pop.error(error, 'Could not delete car')
    logger.error('COULD NOT DELETE CAR', error)
  }
}
</script>


<template>
  <div class="row shadow-lg mb-4 car-border">
    <div class="col-md-5 px-0">
      <img :src="carProp.imgUrl" :alt="`A picture of a ${carProp.year} ${carProp.make} ${carProp.model}`" class="w-100">
    </div>
    <div class="col-md-7">
      <div class="p-3 h-100 d-flex flex-column justify-content-between">
        <div>
          <div class="d-flex justify-content-between">
            <p class="fs-3">{{ carProp.year }}
              {{ carProp.make }} {{ carProp.model }}</p>
            <small>{{ carProp.createdAt.toLocaleDateString() }}</small>
          </div>
          <p class="fs-3">{{ '$' + carProp.price.toLocaleString() }}</p>
          <p v-if="carProp.description">{{ carProp.description }}</p>
          <p v-else>A lovely car</p>
          <p>Engine: {{ carProp.engineType }}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <!-- <button v-if="account && carProp.creatorId == account?.id" @click="deleteCar(carProp.id)" -->
            <!-- NOTE elvis operator (?) evaluates if a property is null/undefined before drilling into it -->
            <button v-if="carProp.creatorId == account?.id" @click="deleteCar(carProp.id)"
              class="btn btn-outline-danger" type="button">
              Delete Car
            </button>
          </div>
          <div class="d-flex align-items-center gap-3">
            <p class="mb-0">{{ carProp.creator.name }}</p>
            <img :src="carProp.creator.picture" alt="" class="creator-img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.creator-img {
  height: 3.7em;
  aspect-ratio: 1/1;
  border-radius: 50%;
}

img {
  height: 45dvh;
  object-fit: cover;
}

.car-border {
  border-style: solid;
  border-width: thick;
  // NOTE accesses the color from the carProp
  border-color: v-bind('carProp.color');
}
</style>