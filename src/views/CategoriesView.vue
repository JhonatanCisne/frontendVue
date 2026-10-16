<script setup>
import {ref, onMounted} from 'vue'
import {useCAtegoriesStore} from '../stores/categories'

const store = useCategoriesStore()
const name = ref('')
const description = ref('')
const editingId = ref(null)
const error = ref('')

onMounted(()=> store.fecthCtegories())

function edit(category){
    editingId.value = category.id
    name.value = category.name
    description.value = category.description || ''
}

async function save() {
    error.value = ''
    if (!name.value.trim()) {
        error.value = 'El nombre es obligatorio'
        return
    }

    try{
        const data = {name: name.value, description:description.value}
        if (editingId.value) {
            await store.updateCategory(editingId.value, data)
        }else{
            await store.createCategory(data)
        }
        name.value=''
        description.value=''
        editingId.value=null
        await store.fetchCategories()
    }catch(e){
        error.value='No se puede guardar la categoria'
    }
    
}

async function reome(id) {
    if(!confirm('Eliminar categoria?')) return
    try{
        await store.deleteCategory(id)
        await store.fetchCategories()
    }catch(e){
        error.value='NO se pudo eliminar la categoria'
    }
}
</script>

<template>
    <section class="space-y-5">
        <h1 class="text-3x1 font-bold">Categorias</h1>

        <form @submit.prevent="save" class="space-y-3">
            <input v-model="name" placeholder="Nombre" class="border p-2 round3d w-full"/>
            <textarea v-model="description" placeholder="Descripcion" class="border p-2 rounded w-full"/>
            <button class="bg-blue-600 text-white px-4 py-2 rounded">
                {{editingId?'Actualizar':'Crear'}}
            </button>
        </form>

        <p v-if="error" class="text-red-600">{{error}}</p>

        <div v-for="category in store.categories":key="category.id" 
            class="border p-4 rounded flex justify-between items-center">
            <div>
                <strong>{{category.name}}</strong>
                <p>{{category.description}}</p>
            </div>
            <div class="flex gap-3">
                <button @click="edit(category)" class="text-blue-600">Editar</button>
                <button @click="remove(category.id)" class="text-red-600">Eliminar</button>
            </div>
        </div>
    </section>
</template>