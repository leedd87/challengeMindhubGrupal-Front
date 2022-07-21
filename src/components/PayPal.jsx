import React from "react";
import {PayPalScriptProvider, PayPalButtons} from '@paypal/react-paypal-js'


export default function Paypal(){
 
    //CDN
    const initialOptions={
        'client-id': 'AQNs4aLkZG4-jD319sRvEnf0itmOm4qN1OF8wXTOfn32-_VQPbZLF6G7e4Qf4VX8zDlNR9SLHkZGGuKp',
        currency:'usd',
        intent:'capture'
    }
    return(
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
            />
        </PayPalScriptProvider>
    )
}