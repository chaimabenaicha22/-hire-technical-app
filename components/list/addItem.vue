<template>
    <form @submit.prevent="addItem" action="/projects" method="post">
      <h3>Ajouter une page</h3>
      <div>
        <label>Nom :</label>
        <input
          class="mb-16"
          id="name"
          v-model="fields.name"
          type="text"
          required
        />
      </div>
      <div>
        <label>Slug :</label>
        <input
          class="mb-16"
          id="slug"
          v-model="fields.slug"
          type="text"
          required
        />
      </div>
      <button class="btn btn-primary" type="submit">Ajouter</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fields: {
          name: null,
          slug: null
        }
      };
    },
    methods: {
        async addItem() {
  const name = this.fields.name;
  const slug = this.fields.slug;

  console.log('Data to send:', { name, slug });

  try {
    const response = await fetch('http://localhost:8000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, slug })
    });

    if (response.ok) {
      const data = await response.json(); 
 
      this.$store.dispatch('addPage', data);

      this.fields.name = null;
      this.fields.slug = null;
    } else {
      console.log('Error during request:', response.statusText);
    }
  } catch (error) {
    console.log('Error during request:', error);
  }
}
 }
  };
  </script>
  
  <style scoped>
  input:not([type="radio"]):not([type="checkbox"]) {
      border: 1px solid #e8e8e8;
      border-radius: 4px;
      box-shadow: 1px 1px 0 0 #e8e8e8;
      color: #535657;
      font-size: 1rem;
      font-weight: 400;
      padding: 0.5rem;
      transition: all .1s ease;
  }
  input:not([type="radio"]):not([type="checkbox"]):focus {
      border-color: #4dc4d6;
      box-shadow: inset 0 0 0 3px #b6e5ec;
      outline: 0;
  }
  .btn {
      background-color: #16ba16;
      color: white;
      border-radius: 2px;
  }
  </style>
  