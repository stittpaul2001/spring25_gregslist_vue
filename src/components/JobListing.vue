<script setup>
import { Job } from '@/models/Job.js';


defineProps({
    jobProp: {
        type: Job, required: true
    }
})
</script>


<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <p>{{ jobProp.description }}</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>