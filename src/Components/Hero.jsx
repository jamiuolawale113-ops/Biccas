import { FiPlay } from 'react-icons/fi';
import heroPhoto from '../assets/hero-photo.jpg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">We're here to Increase your Productivity</h1>

        <svg width="357" height="34" viewBox="0 0 487 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.00104 30C73.6317 10.3798 266.915 -17.0885 483.001 30" stroke="#54BD95" stroke-width="8" stroke-linecap="round"/>
        </svg>



        <p className="hero__description">
          Let's make your work more organize and easily using the Tasks
          Dashboard with many of the latest features in managing work every day.
        </p>

        <div className="hero__actions">
          <button className="hero__btn-primary">Try free trial</button>
          <button className="hero__btn-secondary">
            <FiPlay /> View Demo
          </button>
        </div>
      </div>

      <div className="hero__visual">
        <img src={heroPhoto} alt="Person using the app" className="hero__photo" />

        <div className="hero__card hero__card--amount">
          <div>
            <span className="hero__card-label">Enter amount</span>
            <span className="hero__card-value">$450.00</span>
          </div>
          <button className="hero__send-btn">Send</button>
        </div>

        <div className="hero__card hero__card--income">
          <span className="hero__card-label">Total Income</span>
          <div className="hero__card-value-row">
              <span className="hero__card-value">$245.00</span>
              
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 16.6666V8.33325" stroke="#52BD94" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 16.6666V3.33325" stroke="#52BD94" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5 16.6667V11.6667" stroke="#52BD94" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
        </div>
       

        <div className="hero__credit-card">
          <p className="hero__credit-card-label">Credit Card</p>
          <p className="hero__credit-card-number">**** 1234</p>
          <p className="hero__credit-card-expiry">09/25</p>
        </div>

        <div className="hero__badge hero__badge--top" >
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_0_39)">
            <path d="M13.1102 9.02761C17.1112 10.0997 20.6443 9.8876 21.0017 8.55394C21.359 7.22027 18.4053 5.27004 14.4043 4.19798C10.4033 3.12592 6.87016 3.33799 6.5128 4.67165C6.15545 6.00532 9.1092 7.95554 13.1102 9.02761Z" stroke="#F8F8FA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.4915 14.1887C19.1334 15.5249 15.6247 15.7408 11.6 14.6624C7.57527 13.5839 4.64453 11.6426 5.00256 10.3064" stroke="#F8F8FA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.51233 4.67188L3.49277 15.941C3.13474 17.2772 6.06548 19.2186 10.0902 20.297C14.1149 21.3754 17.6236 21.1595 17.9817 19.8233L21.0012 8.55416" stroke="#F8F8FA" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_0_39">
            <rect width="20" height="20" fill="white" transform="translate(5.17639) rotate(15)"/>
            </clipPath>
            </defs>
          </svg>

        </div>

        <div className="hero__badge hero__badge--mid" >
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_0_33)">
            <path d="M18.8449 16.6033C18.7305 17.0303 18.4511 17.3943 18.0683 17.6153C17.6855 17.8363 17.2306 17.8962 16.8036 17.7818L7.14438 15.1936L3.0619 17.5507L6.51282 4.67164C6.62722 4.24468 6.90655 3.88065 7.28936 3.65963C7.67217 3.43862 8.12709 3.37873 8.55406 3.49313L19.8232 6.51269C20.2502 6.62709 20.6142 6.90642 20.8352 7.28923C21.0562 7.67204 21.1161 8.12696 21.0017 8.55393L18.8449 16.6033Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_0_33">
            <rect width="20" height="20" fill="white" transform="translate(5.17639) rotate(15)"/>
            </clipPath>
            </defs>
          </svg>
        </div>

        <div className="hero__badge hero__badge--bottom">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_0_33)">
            <path d="M18.8449 16.6033C18.7305 17.0303 18.4511 17.3943 18.0683 17.6153C17.6855 17.8363 17.2306 17.8962 16.8036 17.7818L7.14438 15.1936L3.0619 17.5507L6.51282 4.67164C6.62722 4.24468 6.90655 3.88065 7.28936 3.65963C7.67217 3.43862 8.12709 3.37873 8.55406 3.49313L19.8232 6.51269C20.2502 6.62709 20.6142 6.90642 20.8352 7.28923C21.0562 7.67204 21.1161 8.12696 21.0017 8.55393L18.8449 16.6033Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_0_33">
            <rect width="20" height="20" fill="white" transform="translate(5.17639) rotate(15)"/>
            </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;