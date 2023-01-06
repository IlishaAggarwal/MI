import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Payment = (props) => {
  const PaymentFor15 = () => {
    fetch("https://www.elanest.xyz/create-checkout-session-15", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 1 },
         
        ],
      }),
    })
      .then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
      })
      .then(({ url }) => {
        window.location = url
      })
      .catch(e => {
        console.error(e.error)
      })

  };
  const PaymentFor5 = () => {
    fetch("/create-checkout-session-5", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { id: 2, quantity: 1 },
        ],
      }),
    })
      .then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
      })
      .then(({ url }) => {
        window.location = url
      })
      .catch(e => {
        console.error(e.error)
      })

  };
  return (
    <div id="payment" className='text-center'>

      <div className='col-md-10 col-md-offset-1 section-title'>
        <h2>Payment</h2>
        <br />
        <p>We are excited to offer 2 innovative products that can help you achieve your financial goals. Whether you are a beginner investor or an experienced professional, our products have something to offer for everyone. If you would like to learn more about what our products have to offer, simply click on the product links to access more information. You can find detailed descriptions, pricing, and available options for each product on their respective pages. We are confident that you will find our products to be valuable tools in your financial journey.</p>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="embed-responsive embed-responsive-16by9">
                <Card.Img variant="top" src="../../public/img/card.jpeg" />
              </div>
              <div class="card-body">
                <Card.Body>
                  <Card.Title>My 15 Stocks</Card.Title>
                  <Card.Text>
                    Our top performing 15 stocks
                  </Card.Text>
                  <Button variant="primary" onClick={PaymentFor15}>Buy this Product</Button>
                </Card.Body>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="embed-responsive embed-responsive-16by9">
                <Card.Img variant="top" src="../../public/img/card.jpeg" />
              </div>
              <div class="card-body">
                <Card.Body>
                  <Card.Title>My 5 Stocks</Card.Title>
                  <Card.Text>
                    Our top performing 5 stocks
                  </Card.Text>
                  <Button variant="primary" onClick={PaymentFor5}>Buy this Product</Button>
                </Card.Body>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
