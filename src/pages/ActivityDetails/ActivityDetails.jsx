import { useLocation, Link } from 'react-router-dom';
import './ActivityDetails.css';

export default function ActivityDetails() {
  const location = useLocation();
  const activity = location.state.activity;
  const excursions = location.state.excursions;

  return (
    <div className='main-details-div'>
      <div className='width-396 cities-div flex flex-col'>
        <Link to="/activities" state={excursions}>
          <img src="https://cdn-icons-png.flaticon.com/512/9312/9312237.png" alt="" className='icon-btn back-btn' />
        </Link>
      </div>
      <h1>{activity.name}</h1>
      <img className='details-img' src={`${activity.picture}`} alt="" />
      <div className='details-price'>
        <h2>${activity.price}</h2>
        <span>per person</span>
      </div>
      <div>
        <Link to="/assistance" className="assist-btn margin-20" state={{activity, excursions}}>I need special assistance</Link>
      </div>
      <div className='width-396 details-div flex flex-col'>
        <h1>Description</h1>
        <p>{activity.description}</p>
        <Link to="/reviewActivityReserve" className="black-btn" state={{activity, excursions}}>Review Reservation</Link>
      </div>
    </div>

  )
}
