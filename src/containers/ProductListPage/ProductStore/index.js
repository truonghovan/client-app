import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProductsBySlug } from '../../../actions/product'
import Card from '../../../components/UI/Card'
import { generatePublicUrl } from '../../../urlConfig'
import './style.css'

/**
* @author
* @function ProductStore
**/

export const ProductStore = (props) => {
    const product = useSelector(state => state.product)
    const [priceRange, setPriceRange] = useState({
        under10tr: 10000000,
        under15tr: 15000000,
        under25tr: 25000000,
        under35tr: 35000000,
    })
    const dispatch = useDispatch()
    console.log(product)
    useEffect(() => {
        const { match } = props
        dispatch(getProductsBySlug(match.params.slug))
    }, [])
    return (
        <>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <Card 
                            headerLeft={`${props.match.params.slug} under ${priceRange[key]}`}
                            headerRight={<button>View All</button>}
                            style={{
                                width:'calc(100%-20px)',
                                margin:'20px'
                            }}
                        >
                            {/* <div className="cardHeader">
                                <div>{props.match.params.slug} under {priceRange[key]}</div>
                                <button>View All</button>
                            </div> */}
                            <div style={{ display: 'flex' }}>

                                {
                                    product.productsByPrice[key].map(product =>
                                        <Link to={`/${product.slug}/${product._id}/p`} style={{display:'block'}} className="productContainer">
                                            <div className="productImgContainer">
                                                <img src={generatePublicUrl(product.productPicture[0].img)} alt="" />
                                            </div>
                                            <div className="productInfo">
                                                <div style={{ margin: '5px 0' }}>{product.name}</div>
                                                <div>
                                                    <span>4.3</span>
                                                    <span>3333</span>
                                                </div>
                                                <div className="productPrice">{product.price}</div>
                                            </div>
                                        </Link>)
                                }


                            </div>

                        </Card>
                    )
                })
            }
        </>
    )

}