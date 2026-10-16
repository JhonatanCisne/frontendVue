import {defineStore} from 'pinia'
import {ref} from 'vue'
import api from '../services/api'

export const userProductsStore = defineStore('products',()=>{
    const products = ref([])
    const loading = ref(false)
    const error = ref(null)
    
    async function fecthProducts() {
        loading.value=true
        error.value=null

        try{
            const response = await api.get('/products')
            products.value=response.data.data
        }catch(err){
            error.value=err.userMessage
            throw err
        }finally{
            loading.value=false
        }
    }
    async function createProducts(product){
        return (await api.post('/products', product)).data
    }

    async function updateProduct(id,product){
        return (await api.put(`/products/${id}`, product)).data
    }

    async function deleteProduct(id){
        return (await api.delete(`/products/${id}`)).data
    }

    async function getProduct(id){
        return (await api.get(`/products/${id}`)).data
    }

    return{
        products,
        loading,
        error,
        fecthProducts,
        createProducts,
        updateProduct,
        deleteProduct,
        getProduct
    }
})