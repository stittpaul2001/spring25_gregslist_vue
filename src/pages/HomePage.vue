<script setup>


</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <div class="text-center mt-4">
          <div class="fs-1 d-flex gap-4 justify-content-center">
            <span class="mdi mdi-car-convertible"></span>
            <span class="mdi mdi-home-variant"></span>
            <span class="mdi mdi-briefcase"></span>
          </div>
          <h1 class="display-1">
            Gregslist
            <br>
            <span class="mdi mdi-vuejs text-vue"></span>
          </h1>
          <div class="d-flex justify-content-center align-items-center gap-4">
            <!-- NOTE ⚠️ code small test small ESPECIALLY when using router links-->
            <RouterLink :to="{ name: 'Cars' }">
              <button class="btn btn-outline-vue fs-2" type="button">
                Cars
              </button>
            </RouterLink>
            <RouterLink :to="{ name: 'Houses' }">
              <button class="btn btn-outline-vue fs-2" type="button">
                Houses
              </button>
            </RouterLink>
            <RouterLink :to="{ name: 'Jobs' }">
              <button class="btn btn-outline-vue fs-2" type="button">
                Jobs
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
