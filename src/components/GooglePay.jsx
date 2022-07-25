import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import GooglePayButton from '@google-pay/button-react'

export default function GooglePay(){
    const carrito = useSelector(store => store.shopReducer.productsInShop);
    // console.log(carrito)
    const priceTotal = carrito.reduce((total, producto) => total + producto.price, 0)
    
    return(
        <>
            <GooglePayButton
                environment="TEST"
                buttonSizeMode="fill"
                paymentRequest={{
                    apiVersion:2,
                    apiVersionMinor:0,
                    allowedPaymentMethods:[
                        {
                            type:'CARD',
                            parameters:{
                                allowedAuthMethods:['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                allowedCardNetworks:["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "MIR", "VISA"],
                            },
                            tokenizationSpecification: {
                                type:'PAYMENT_GATEWAY',
                                parameters: {
                                    gateway:'example',
                                    gatewayMerchantId:'exampleGatewayMerchantId',
                                },
                            },
                        },
                    ],
                    merchantInfo: {
                        merchantId:carrito.id,
                        merchantName:carrito.name
                    },
                    transactionInfo: {
                        totalPriceStatus:'FINAL',
                        totalPriceLabel:'Total',
                        totalPrice:`${priceTotal}`,
                        currencyCode:'USD',
                        countryCode:'US'
                    },
                }}
                onLoadPaymentData= {paymenData=>{
                    console.log(paymenData.paymentMethodData)
                }}
            
            />
        </>
    )
}