<script setup>
import { House } from '@/models/House.js';


defineProps({
    houseProp: {
        type: House, required: true

    }
})
</script>


<template>
    <div class="container">
        <div class="row border border-black p-3">
            <div class="col-md-5 border-solid border-black">
                <img :src="houseProp.imgUrl" :alt="`A picture of a`" class="w-100" />
            </div>
            <div class="col-md-7">
                <div class="d-flex flex-column justify-content-between h-100">
                    <card class="d-flex flex-column justify-content-between h-100 border border-danger rounded p-3">
                        <h2>{{ houseProp.price }}</h2>
                        <div class="flex h- 80">

                            <p>{{ houseProp.description }}</p>
                            <div class="flex h- 80">

                                <p>{{ houseProp.location }}</p>
                                <p>{{ houseProp.bedrooms }}</p>
                                <p>{{ houseProp.levels }}</p>
                            </div>


                        </div>

                    </card>
                </div>

            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
img {
    height: 45dvh;
    object-fit: cover;
    border: solid thick 1px black;
    border-radius: 10px;
}

template {
    background-color: black;
}
</style>