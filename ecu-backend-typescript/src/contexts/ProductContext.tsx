import {createContext, useContext, useState} from 'react'
import { ProductItem } from '../models/ProductModel'

interface ProductProviderType{
    children: any
}

export interface ProductContextType {
    product: ProductItem,
    products: ProductItem[],
    featuredProducts: ProductItem[],
    getProduct: (articleNumber?: string) => void,
    getProducts: (take?: number) => void,
    getFeaturedProducts: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)

export const useProductContext = () => {
    return useContext(ProductContext)
}

const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    const EMPTY_PRODUCT: ProductItem = {
        articleNumber:'',
        name:'',
        category:'',
        price: 0,
        imageName:''
    }

    const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT)
    const [products, setProducts] = useState<ProductItem[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<ProductItem[]>([])

    const baseUrl: string = 'https://win22-webapi.azurewebsites.net/api/products'


    const getProduct = async (articleNumber?: string) => {
        if (articleNumber !==undefined) {
            const res = await fetch(baseUrl + `/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getProducts = async (take = 0) => {
        let url = baseUrl

        if (take !==0) {
            url = baseUrl + `?take=${take}`
        } 
        const res = await fetch(url)
        setProducts(await res.json())
    }

    
    const getFeaturedProducts = async (take = 0) => {
        let url = baseUrl

        if (take !==0) {
            url = baseUrl + `?take=${take}`
        } 
        const res = await fetch(url)
        setFeaturedProducts(await res.json())
    }


    return <ProductContext.Provider value={{product, products, getProduct, getProducts, featuredProducts, getFeaturedProducts}}>{children}</ProductContext.Provider>
}

export default ProductProvider
