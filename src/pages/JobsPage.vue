<script setup>
import { AppState } from '@/AppState.js';
import JobListing from '@/components/JobListing.vue';
import { jobsServices } from '@/services/JobsServices.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const jobs = computed(() => AppState.jobs)

onMounted(() => {
    getJobs()
})

async function getJobs() {
    try {
        await jobsServices.getJobs()
    } catch (error) {
        Pop.error(error, 'Could not get jobs')
        logger.error('COULD NOT GET JOBS!', error)
    }
}
</script>


<template>
    <section class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center">
                    <h1 class="display-3">Jobs</h1>
                </div>
            </div>
        </div>
    </section>
    <section class="container">
        <div class="row">
            <div v-for="job in jobs" :key="job.id" class="col-12">
                <JobListing :job-prop="job" />
            </div>
        </div>
    </section>

</template>


<style lang="scss" scoped></style>