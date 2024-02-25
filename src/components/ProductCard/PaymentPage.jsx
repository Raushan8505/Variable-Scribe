import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentPage.css'
import { RiWalletLine, RiFlashlightFill } from "react-icons/ri";
import visa from '../../assets/Home_Imgs/visa.png';
import mastercard from '../../assets/Home_Imgs/mastercard.png';
import paypal from '../../assets/Home_Imgs/paypal.png';
import stripe from '../../assets/Home_Imgs/stripe.png';
const PaymentPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const total  = searchParams.get('total');
    console.log(total);
  return (
    <>
      <section className="payment-section">
        <div className="fw29-061-container">
          <div className="payment-wrapper">
            <div className="payment-left">
              <div className="payment-header">
                <div className="payment-header-icon">
                  <RiFlashlightFill />
                </div>
                <div className="payment-header-title">Order Summary</div>
              </div>
              <div className="payment-content">
                <div className="payment-body">
                  <div className="payment-plan">
                    
                    <div className="payment-plan-info">
                    </div>
                  </div>
                  <div className="payment-summary">
                    <div className="payment-summary-item payment-summary-total">
                      <div className="payment-summary-name">Total</div>
                      <div className="payment-summary-price">    ₹{total}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="payment-right">
              <form action="" className="payment-form">
                <h1 className="payment-title">Payment Details</h1>
                <div className="payment-method">
                  <input type="radio" name="payment-method" id="method-1" checked />
                  <label htmlFor="method-1" className="payment-method-item">
                    <img src={visa} alt="" />
                  </label>
                  <input type="radio" name="payment-method" id="method-2" checked />
                  <label htmlFor="method-2" className="payment-method-item">
                    <img src= {mastercard} alt="" />
                  </label>
                  <input type="radio" name="payment-method" id="method-3" checked />
                  <label htmlFor="method-3" className="payment-method-item">
                    <img src= {paypal} alt="" />
                  </label>
                  <input type="radio" name="payment-method" id="method-4" checked />
                  <label htmlFor="method-4" className="payment-method-item">
                    <img src= {stripe} alt="" />
                  </label>
                </div>
                <div className="payment-form-group">
                  <input type="email" placeholder=" " className="payment-form-control" id="email" />
                  <label htmlFor="email" className="payment-form-label payment-form-label-required">
                    Email Address
                  </label>
                </div>
                <div className="payment-form-group">
                  <input type="text" placeholder=" " className="payment-form-control" id="card-number" />
                  <label htmlFor="card-number" className="payment-form-label payment-form-label-required">
                    Card Number
                  </label>
                </div>
                <div className="payment-form-group-flex">
                  <div className="payment-form-group">
                    <input type="date" placeholder=" " className="payment-form-control" id="expiry-date" />
                    <label htmlFor="expiry-date" className="payment-form-label payment-form-label-required">
                      Expiry Date
                    </label>
                  </div>
                  <div className="payment-form-group">
                    <input type="text" placeholder=" " className="payment-form-control" id="cvv" />
                    <label htmlFor="cvv" className="payment-form-label payment-form-label-required">
                      CVV
                    </label>
                  </div>
                </div>
                <button onClick={()=>navigate('/triloHome/paymentsuccess')}  id='payment' type="submit" className="payment-button">
                  <RiWalletLine />
                  Pay
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentPage;
