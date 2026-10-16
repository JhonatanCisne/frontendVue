import { createRouter, createWebHistory} from 'vue-router'

import DashboardView from '../views/DashboardView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductFormView from '../views/ProductFormView.vue'
import CategoriesView from '../views/CategoriesView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: DashboardView},
        { path: '/products', component: ProductsView},
        { path: '/products/new', component: ProductFormView},
        { path: '/products/:id/edit', componenent: ProductFormView},
        { path: '/categories', component: CategoriesView},
    ],
})

export default router