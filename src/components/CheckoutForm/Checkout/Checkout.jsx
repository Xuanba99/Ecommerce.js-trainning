import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, Button, CircularProgress, Divider } from '@material-ui/core'
import useStyles from './styles'
import { commerce } from '../../../lib/commerce';
import AddressForm from './../AddressForm';
import PaymentForm from './../PaymentForm';

const steps = ['Shipping address', 'Payment details']

function Checkout({ cart }) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [shippingData, setShippingData] = useState({});

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                console.log(token)
                setCheckoutToken(token);
            } catch (error) {
                console.log(error)
            }
        }

        generateToken();
    }, [cart]);

    const nextStep = () => setActiveStep((preActiveStep) => preActiveStep + 1);
    const backStep = () => setActiveStep((preActiveStep) => preActiveStep - 1);

    const next = (data) => {
        setShippingData(data);

        nextStep();
    }

    const Confirmation = () => (<div>
        confirmation
    </div>);

    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} next={next} />
        : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} />


    return (
        <>
            <div className={classes.toolbar}>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant='h4' align='cetner' >Checkout</Typography>
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                            {steps.map((step) => (
                                <Step key={step}>
                                    <StepLabel>{step}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                    </Paper>
                </main>
            </div>

        </>

    )
}

export default Checkout
