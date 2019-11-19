<template>
  <div id="app">
    <div class="pagination">
      <div class="pagination_item" v-scroll-to="'#section-1'">Section 1</div>
      <div class="pagination_item" v-scroll-to="{ el: '#section-2', offset: 100 }">Section 2 (offset)</div>
      <div class="pagination_item" v-scroll-to="{ el: '#section-3', bottom: true }">Section 3 (bottom)</div>
    </div>
    <div class="main">
      <div id="section-1" class="section section-1">Section 1</div>
      <div id="section-2" class="section section-2">Section 2</div>
      <div id="section-3" class="section section-3">Section 3</div>
      <div id="section-4" class="section section-4">Section 4</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {}
  }
</script>

<style lang="scss">
  body {
    margin: 0;
    color: #4b4b4b;
  }

  .pagination {
    position: fixed;
    padding: 8px 16px;
    left: 16px;
    top: 16px;
    background-color: #FFFDFA;
  }

  .pagination_item {
    padding: 2px;
    cursor: pointer;
  }

  .section {
    display: flex;
    height: 100vh;
    font-size: 32px;
    justify-content: center;
    align-items: center;
  }
  .section-1 { background-color: #B8C6D1; }
  .section-2 { background-color: #5A7285; }
  .section-3 { background-color: #D1C7B8; }
  .section-4 { background-color: #857967; }
</style>
