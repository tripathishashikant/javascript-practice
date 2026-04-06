<template>
  <div class="layout-main">
    <header class="layout-header">
      <h1>
        <router-link to="/">JavaScript Practice Lab</router-link>
      </h1>
    </header>
    <main class="layout-content">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.layout-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.layout-header h1 {
  font-size: 2rem;
  font-weight: 600;
  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
