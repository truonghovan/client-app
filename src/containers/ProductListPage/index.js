import React from 'react'
import { Layout } from '../../components/Layout'
import getParams from '../../utils/getParams'
import ClothingAndAccessories from './ClothingAndAccessories'
import { ProductPage } from './ProductPage'
import  {ProductStore}  from './ProductStore'
import './style.css'

/**
* @author
* @function ProductListPage
**/

export const ProductListPage = (props) => {
    const renderProduct=()=>{
        let content=null
        const params=getParams(props.location.search)
        switch(params.type){
            case 'store':
                content=<ProductStore {...props} />
                break
            case 'page':
                content=<ProductPage {...props} />
                break
            default:
                content=<ClothingAndAccessories {...props}/>
        }
        return content
    }
   
    return (
        <Layout>
            {renderProduct()}
        </Layout>
    )

}