import axios from  'axios'

const api=axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    Headers:{
        Accept: ' application/json',
        'Content-Type':'application/json'
        
    },
    timeout:10000,
})

api.interceptors.response.use(
    (response)=>response,
    (error)=>{
        let message = 'ocurrio un error inesperado'

        if(!error.response){
            message='No se pudo conectar con el servidor'
        }else{
            const status = error.response.status

        if(status == 422){
            message = 'verifica los datos ingresados'
        }else if(status == 404){
            message = 'El recurso solicitado no existe'
        }else if(status >= 500){
            message = 'Error interno del servidor'
        }else{
            message = error.response.data?.message||message
        }
        }

        error.userMessage = message
        return Promise.reject(error)
    }
)
export default api