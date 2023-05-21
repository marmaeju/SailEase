import { useLocation, Link } from 'react-router-dom';
import './ReviewReservationActivity.css';
// import editLogo from '../../assets/edit.png';
import place from '../../assets/reserveInfo-ex/place.png';

export default function ReviewReservationActivity() {
  const location = useLocation();
  const activity = location.state.activity;
  const excursions = location.state.excursions;

  return (
    <div className='flex-ctr-ctr flex-col'>
      <div className='width-396 cities-div flex flex-col'>
      <Link to="/activityDetails" state={{ excursions, activity }}>
        <img src="https://cdn-icons-png.flaticon.com/512/9312/9312237.png" alt="" className='icon-btn back-btn' />
      </Link>
      <h1>Review Reservation</h1>
      <div className='flex-ctr-ctr flex-col'>

        {/* <div className='flex-ctr-ctr reserve-prop-card space-between'>
          <div className='flex-ctr-ctr'>
            <img src="https://cdn-icons-png.flaticon.com/512/3177/3177361.png" className='icon-btn' alt="" />
            <h3>Place</h3>
          </div>
          <h4>{activity.name}</h4>
          <img src="https://cdn-icons-png.flaticon.com/512/1159/1159876.png" className='icon-btn' alt="" />
        </div> */}
        <img src={ place } alt="" className='img-reserve-prop' />

        <div className='flex-ctr-ctr reserve-prop-card space-between'>
          <div className='flex-ctr-ctr'>
            <img src="https://cdn-icons-png.flaticon.com/512/992/992700.png" className='icon-btn' alt="" />
            <h3>Time</h3>
          </div>
          <h3>7:00 P.M.</h3>
          <img src="https://cdn-icons-png.flaticon.com/512/1159/1159876.png" className='icon-btn' alt="" />
        </div>

        <div className='flex-ctr-ctr reserve-prop-card space-between'>
          <div className='flex-ctr-ctr'>
            <img src="https://cdn-icons-png.flaticon.com/512/10436/10436682.png" className='icon-btn' alt="" />
            <h3>Accessible</h3>
          </div>
          <p>Yes</p>
          <img src="https://cdn-icons-png.flaticon.com/512/1159/1159876.png" className='icon-btn' alt="" />
        </div>

        <div className='flex-ctr-ctr reserve-prop-card space-between'>
          <div className='flex-ctr-ctr'>
            <img src="https://cdn-icons-png.flaticon.com/512/3394/3394744.png" className='icon-btn' alt="" />
            <h3>Guests</h3>
          </div>
          <p>Party of 4</p>
          {/* <img src={ } className='icon-btn' alt="" /> */}
        </div>
        <div>
          <div className='flex-ctr-ctr space-between width-396'>
            <h2>Subtotal</h2>
            <h2>$232.00</h2>
          </div>
          <div className='flex-ctr-ctr space-between width-396'>
            <h2>Tax</h2>
            <h2>$18.60</h2>
          </div>
          <div className='flex-ctr-ctr space-between width-396'>
            <h2>Total</h2>
            <h2>$250.60</h2>
          </div>
        </div>

      </div>
      <Link to="/confirmActivity" className="black-btn width-396" state={activity}>Confirm Payment</Link>
      <h3>This will be charged to your payment method</h3>
      </div>
    </div>
  )
}
