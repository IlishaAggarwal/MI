import React, { useState, useEffect } from "react";
import "../productpay.css";
import axios from 'axios';

const ProductDisplay = () => (
	<section>
	  <div className="product">
		<img
		  src="https://i.imgur.com/EHyR2nP.png"
		/>
		<div className="description">
		<h3>5 Stocks</h3>
		<h5>$100.00</h5>
		</div>
	  </div>
	  {/* <form action="http://localhost:3001/create-checkout-session" method="POST"> */}
		<button onClick={stripepay} type="submit">
		  Checkout
		</button>
	  {/* </form> */}
	</section>
  );
  
  const stripepay = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3000/create-checkout-session");
  };

  const Message = ({ message }) => (
	<section>
	  <p>{message}</p>
	</section>
  );

const ProductPay = () => {
	const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);
  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
};

export default ProductPay;