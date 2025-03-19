<script setup>
import { AppState } from '@/AppState.js';
import HouseListing from '@/components/HouseListing.vue';
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const houses = computed(() => AppState.houses)

onMounted(() => {
    getHouses()
})

async function getHouses() {
    try {
        await housesService.getHouses()
    } catch (error) {
        Pop.error(error, 'Could not get houses')
        logger.error('COULD NOT GET HOUSES!', error)
    }
}

</script>

<template>
    <section class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <h1 class="display-3">Houses</h1>

                </div>
            </div>
        </div>
    </section>
    <section class="container justify-content-center">
        <div class="row d-flex">
            <div v-for="house in houses" :key="house.id" class="col-12">
                <HouseListing :house-prop="house" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
body {
    background-color: black;
}
</style>