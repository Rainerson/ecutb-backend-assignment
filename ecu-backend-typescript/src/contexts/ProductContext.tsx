import {createContext, useContext, useState} from 'react'
import { ProductItem } from '../models/ProductModel'

interface ProductProviderType{
    children: any
}

export interface ProductContextType {
    product: ProductItem,
    products: ProductItem[],
    featuredProducts: ProductItem[],
    fourTwentyProducts: ProductItem[],
    fourFortyProducts: ProductItem[],
    getProduct: (articleNumber?: string) => void,
    getProducts: () => void,
    getFeaturedProducts: (take?: number) => void,
    getFourTwentyProducts: (take?: number) => void,
    getFourFortyProducts: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)

export const useProductContext = () => {
    return useContext(ProductContext)
}

const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    const EMPTY_PRODUCT: ProductItem = {
        tag:'',
        articleNumber:'',
        description:'',
        name:'',
        category:'',
        price: 0,
        imageName:''
    }

    const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT)
    const [products, setProducts] = useState<ProductItem[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<ProductItem[]>([])
    const [fourTwentyProducts, setFourTwentyProducts] = useState<ProductItem[]>([])
    const [fourFortyProducts, setFourFortyProducts] = useState<ProductItem[]>([])

    const baseUrl: string = 'http://localhost:5000/api/products'


    const getProduct = async (articleNumber?: string) => {
        if (articleNumber !==undefined) {
            const res = await fetch(baseUrl + `/product/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getProducts = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }

    
    const getFeaturedProducts = async (take = 0) => {
        let url = baseUrl + `/featured`

        if (take !==0) {
            url += `/${take}`
        } 
        const res = await fetch(url)
        setFeaturedProducts(await res.json())
    }

    const getFourTwentyProducts = async (take = 0) => {
        let url = baseUrl + `/twenty`

        if (take !==0) {
            url += `/${take}`
        } 
        const res = await fetch(url)
        setFourTwentyProducts(await res.json())
    }

    const getFourFortyProducts = async (take = 0) => {
        let url = baseUrl + `/forty`

        if (take !==0) {
            url += `/${take}`
        } 
        const res = await fetch(url)
        setFourFortyProducts(await res.json())
    }

    return <ProductContext.Provider value={{product, products, fourTwentyProducts, fourFortyProducts, getProduct, getProducts, featuredProducts, getFeaturedProducts, getFourTwentyProducts, getFourFortyProducts }}>{children}</ProductContext.Provider>
}

export default ProductProvider
