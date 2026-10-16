<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <div class="min-h-screem bg-gray-50 text-gray-900">
    <header class= "border-b border-gray-200 bg-white">
      <nav class="mx-auto flex max-w-6x1 items-center justify-between p-5">
        <h1 class="text-x1 font-bold">Gestion de Inventario</h1>

        <div class="flex gap-6 text-sm font-blue-600">
          <RouterLink to="/" class="hover:text-blue-600">
            Dashboard
          </RouterLink>
          <RouterLink to="/products" class="hover:text-blue=600">
            Productos
          </RouterLink>
          <RouterLink to="/categories" class="hover:text-blue=600">
            Categorias
          </RouterLink>
        </div>
      </nav>
    </header>

    <main class="mx-auto max-w6x1 p-6">
      <RouterView/>
    </main>
  </div>
  </template>
