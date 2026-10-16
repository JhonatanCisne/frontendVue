<template>
    <div class="space-y-6">
        <h1 class="text-3x1 font-bold">DASHBOARD</h1>
        <P>Panel de gestion de Productos y categorias</P>

        <div class="flex gap-4">
            <RouterLink to="/products" class="bg-blue-600 text-white px-5 py-3 rounded">
                Ver Productos
            </RouterLink>
            <RouterLink to="/categories" class="bg-gray-800 text-white px-5 py-3 rounded">
                Ver Categoria
            </RouterLink>
        </div>
    </div>
</template>