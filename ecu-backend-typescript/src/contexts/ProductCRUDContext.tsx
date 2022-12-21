import React, {useState, useContext, createContext, Children, FormEvent } from 'react'
import {ProductItem2} from '../models/ProductModel'

interface IProductProviderProps {
    children: any
}

export interface IProductContext {
    product: ProductItem2,
    setProduct: React.Dispatch<React.SetStateAction<ProductItem2>>
    products: ProductItem2[],
    create: (e: React.FormEvent) => void,
    get: (articleNumber:number) => void,
    getAll: () => void,
    update: (e: React.FormEvent) => void,
    remove: (articleNumber:0) => void
}

export const  ProductCRUDContext = createContext<IProductContext | null >(null)
export const useProductContext = () => {
    return useContext(ProductCRUDContext)
}


const ProductCRUDProvider = ({children}: IProductProviderProps) => {
    const baseUrl = 'http://localhost:5000/api/products'

    
    const defaultValues: ProductItem2 = {articleNumber: 0, name: '',  category: '', price: 0, imageName:''}

    const [product, setProduct] = useState<ProductItem2>(defaultValues)
    const [products, setProducts] = useState<ProductItem2[]>([])

    const create = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch (`${baseUrl}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })

        if (result.status=== 201) {
            setProduct(defaultValues)
        } else {
            console.log('error')
        }
    }

    const get = async (articleNumber : number) => {

        const result = await fetch (`${baseUrl}/${articleNumber}`, {})
           
        if (result.status=== 201) {
                setProduct(await result.json())
            }

    }


    const getAll = async () => {
        const result = await fetch (`${baseUrl}`, {})
           
        if (result.status=== 200) {
                setProducts(await result.json())
            }

    }

    const update = async (e: React.FormEvent) => {
        e.preventDefault()


        const result = await fetch (`${baseUrl}/${product.articleNumber}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })

        if (result.status=== 200) {
           setProduct(await result.json())
        }
    }


    const remove = async (articleNumber: number) => {
        const result = await fetch (`${baseUrl}/${articleNumber}`, {
            method: 'delete'
        })

        if (result.status=== 204) {
           setProduct(defaultValues)
        }
    }


     
    return (
        <div>
            {/* value säger vad som ska vara tillgängligt för children */}
            <ProductCRUDContext.Provider value={{product, setProduct, products, create, get, getAll, update, remove}}>
                {children}
            </ProductCRUDContext.Provider>
        </div>
      )


}

export default ProductCRUDProvider