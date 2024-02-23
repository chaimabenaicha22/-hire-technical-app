<template>
    <div class="container">
      <Header />
      <h2 class="page-title">Bienvenue sur Tipeee</h2>
      <div class="content">
        <section class="grid">
          <div class="card">
            <AddItem />
          </div>
          <div class="card">
            <List />
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  import AddItem from '@/components/list/addItem'
  import List from '@/components/list/list'
  import Header from '@/components/list/Header'
  
  export default {
    name: 'IndexPage',
    components: { AddItem, List, Header }
  }
  </script>
  
  <style scoped>
  h2 {
    background-image: linear-gradient(90deg,#86b3e4,#6f8fe7);
    color: white;
}
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .page-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .content {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .card {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
  }
  </style>
  