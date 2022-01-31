<template>
  <div id="app">
    <header>
      <nav>
        <h1>Employee Management System</h1>
      </nav>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  background-color: #006ca0;
  padding: 1rem;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;
}

a {
  text-decoration: none;
  font-weight: 700;
  color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

header h1 {
  font-size: 24px;
}
</style>
