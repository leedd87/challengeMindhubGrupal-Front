import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { useSelector } from 'react-redux';

export default function Paypal() {
    // HOOKS
    const [success, setSuccess] = useState(false);
    const [orderID, setOrderID] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");

    console.log(1, orderID);
    console.log(2, success);
    console.log(3, ErrorMessage);

    useEffect(() => {

        PayPalCheckOut()//LLamo al cdn de PayPal cada vez que cambia el carrito

    }, []);

    // DATOS DE MI CARRITO

    const carrito = useSelector(store => store.shopReducer.productsInShop); // GUARDO MI CARRITO

    const priceTotal = carrito.reduce((total, producto) => total + producto.price, 0) // CALCULA EL PRECIO TOTAL DEL CARRITO

    // console.log(priceTotal)

    //CDN
    const initialOptions = {
        'client-id': 'AQNs4aLkZG4-jD319sRvEnf0itmOm4qN1OF8wXTOfn32-_VQPbZLF6G7e4Qf4VX8zDlNR9SLHkZGGuKp',
        currency: 'USD',
        intent: 'capture'
    }

    const createOrder = (data, actions) => {
        //Creo la orden de con los datos, esta puede ser general o con detalle de items
        console.log(data)
        return actions.order.create({
            purchase_units: [
                {
                    description: "items",
                    amount: {
                        value: priceTotal,
                    },

                },


            ],


        });
    };



    const onApprove = (data, actions) => { //recibo el resultado de mi operacion

        console.log(data)

        return actions.order.capture()
            .then(function (details) {

                const { payer } = details;
                
                setSuccess(true);
                console.log('Capture result', details, JSON.stringify(details, null, 2)); //veo los datos en consola

                var transaction = details.purchase_units[0].payments.captures[0];

                alert('Transaction ' + transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');

                console.log(details)

                setOrderID(transaction.id)
            });
    };

    const onCancel = (data) => {
        console.log('You have cancelled the payment!', data);
    }

    const onError = (data, actions) => { //Capturo error en caso de que exista
        setErrorMessage("An Error occured with your payment ");
    };



    const PayPalCheckOut = () => {
        return (
            <PayPalScriptProvider options={initialOptions}> {/*Inicializo el CDN*/}

                {/*Inicializo los botones*/}
                <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                    onCancel={onCancel}
                />
            </PayPalScriptProvider>
        )
    }

    return (
        <PayPalCheckOut />
    );
}