import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export const Payment = (props) => {
  const navigate = useNavigate();
  const navigateToPaymentPage = () => {
    navigate('/productpay');
  };
  return (
    <div id="payment" className='text-center'>

      <div className='col-md-10 col-md-offset-1 section-title'>
        <h2>Payment</h2>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="embed-responsive embed-responsive-16by9">
                <Card.Img variant="top" src="../../public/img/card.jpeg" />
              </div>
              <div class="card-body">
                <Card.Body>
                  <Card.Title>Set of 5 stocks</Card.Title>
                  <Card.Text>
                    This would have 5 stocks
                  </Card.Text>
                  <Button variant="primary" onClick={navigateToPaymentPage}>Buy this Product</Button>
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
                  <Card.Title>Set of 10 stocks</Card.Title>
                  <Card.Text>
                    This would have 10 stocks
                  </Card.Text>
                  <Button variant="primary" onClick={navigateToPaymentPage}>Buy this Product</Button>
                </Card.Body>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
