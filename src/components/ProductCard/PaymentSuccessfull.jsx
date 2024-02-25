
import { useLocation, useNavigate } from 'react-router-dom'
import  './PaymentSucess.css'
const PaymentSuccessfull = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const total  = searchParams.get('total');
    console.log(total);
    const navigate =useNavigate();
  return (
    <>
    <div className="container">
	<div className="row row-top row-bottom">
		<div className="col-sm-12">
			<div className="card">
				<div className="card-body">
					<div className="img-box text-center">
						<img                         src="https://studymasters.in/assets/uploads/settings/successfull.gif" /></div>
          <div className="col img-box">
            <h2 className="main-heading">Payment Successfull</h2>
              <p className="main-paragraph">Thanks You ! Your Paymnent has been received</p>
          </div>
              <div className="col img-box">
                <button onClick={() => navigate('/triloHome')} className="btn-primary1">Home Page</button>
              </div>
				</div>
			</div>
		</div>
	</div>
</div>
    </>
  )
}

export default PaymentSuccessfull