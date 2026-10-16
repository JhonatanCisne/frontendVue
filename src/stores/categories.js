import {defineStore} from 'pinia'
import {ref} from'vue'
import api from '../services/api'

export const useCategoriesStore = defineStore('categories', ()=>{
    const categories = ref([])
    const loading = ref(false)
    const error = ref(null)
    
    async function fetchCategories() {
        loading.value=true
        error.value=null

        try{
            const response = await api.get('/categories')
            categories.value=response.data.data
        }catch(err){
            error.value = err.userMessage
            throw err
        }finally{
            loading.value = false
        }
    }

    async function createCategory(category){
        return (await api.post('/categories', category)).data
    }

    async function updateCategory(id,category){
        return (await api.put(`/categories/${id}`, category)).data
    }

    async function deleteCategory(id){
        return (await api.delete(`/categories/${id}`)).data
    }

    async function getCategory(id){
        return (await api.get(`/categories/${id}`)).data
    }

    return{
        categories,
        loading,
        error,
        fetchCategories,
        createCategory,
        updateCategory,
        deleteCategory,
        getCategory
    }
})