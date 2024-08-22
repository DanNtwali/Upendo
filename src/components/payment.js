import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

export default function Pay() {
  const config = {
    public_key: 'FLWPUBK_TEST-08bedf839328e4be41b96a974b872439-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'kubaholinne@gmail.com',
       phone_number: '0787854593',
      name: 'Kubaho Linne Heaven',
    },
    customizations: {
      title: 'This plan',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
     {/* <h1>Hello Test user</h1> */}

      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              if(response.status === 'completed') {
                console.log('success')
              } else {
                console.log('Failed');
              }
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {
              console.log('user closed it themselves')
            },
          });
        }}
      >
        Subscribe here
      </button>
    </div>
  );
}