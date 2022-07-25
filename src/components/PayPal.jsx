import React, { useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import shopActions from "../redux/actions/shopActions";


export default function Paypal() {
    // HOOKS
    // const [success, setSuccess] = useState(false);
    // const [orderID, setOrderID] = useState(false);
    // const [ErrorMessage, setErrorMessage] = useState("");

    // console.log(1, orderID);
    // console.log(2, success);
    // console.log(3, ErrorMessage);

    const dispatch = useDispatch()

    useEffect(() => {

        PayPalCheckOut()//LLamo al cdn de PayPal cada vez que cambia el carrito

        // eslint-disable-next-line
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
        // console.log(data)
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

        return actions.order.capture()
            .then(function (details) {

                const { payer } = details;

                var transaction = details.purchase_units[0].payments.captures[0];

                toast(
                    `Transaction ${transaction.status}\n\nThanks for your purchase ${payer.name.given_name} ${payer.name.surname}`,
                    {
                        duration: 7000,
                    }
                );

                if (transaction.status === 'COMPLETED') {
                    dispatch(shopActions.deleteAllToShop())
                }
            });
    };

    const onCancel = (data) => {
        toast.error('You have cancelled the payment!');
    }

    const onError = (data, actions) => { //Capturo error en caso de que exista
        toast.error('No products in cart')
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