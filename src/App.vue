<template>
  <div id="app">
    <div>
      <b-button v-b-toggle="'my-collapse'" id="open" class="when-closed">Open</b-button>
      <b-collapse id="my-collapse">
        <b-card>
          <b-button v-b-toggle="'my-collapse'" id="close">Close</b-button>
          <p class="card-text">Collapse contents Here</p>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.not-collapsed.when-closed {
  display: none;
}
</style>
