import React from 'react';
import './appointment.css';

class Appointment extends React.Component {
  render() {
    return (
      <div className="banner3">
        <div className="banner" style={{backgroundImage: 'url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/form-banners/banner2/banner-bg.jpg)'}}>
          <div className="container">
            <div className="row">
              <div className="text-container">
                <h3 className="my-3 text-white font-weight-medium text-uppercase"
                style={{ color: 'Black',fontSize:'34px', fontWeight: 'bold' }}
                >Book Appointment</h3>
                <div className="bg-white">
                  <div className="form-row border-bottom">
                    <div className="p-4 left border-right w-50">
                      <label className="text-inverse font-12 text-uppercase">First Name</label>
                      <input type="text" className="input-field1" placeholder="Your First Name" />
                    </div>
                    <div className="p-4 right w-50">
                      <label className="text-inverse font-12 text-uppercase">Last Name</label>
                      <input type="text" className="input-field1" placeholder="Your Last Name" />
                    </div>
                  </div>
                  <div className="form-row border-bottom p-4">
                    <label className="text-inverse font-12 text-uppercase">Email Address</label>
                    <input type="text" className="input-field2" placeholder="Enter your Email Address" />
                  </div>
                  <div className="form-row border-bottom p-4">
                    <label className="text-inverse font-12 text-uppercase">Phone Number</label>
                    <input type="text" className="input-field3" placeholder="Enter your Phone Number" />
                  </div>
                  <div className="form-row border-bottom p-4 position-relative">
                    <label className="text-inverse font-12 text-uppercase">Booking Date</label>
                    <div className="input-group date">
                      <input type="text" className="input-field4" id="dp" placeholder="Select the Appointment Date" />
                      <label className="mt-2" htmlFor="dp"><i className="icon-calendar mt-1"></i></label>
                    </div>
                  </div>
                  <div className="form-row border-bottom p-4">
                    <label className="text-inverse font-12 text-uppercase">Message</label>
                    <textarea col="1" row="1" className="input-field5" placeholder="Write Down the Message"></textarea>
                  </div>
                  <div>
                    <button className="m-0 border-0 py-4 font-14 font-weight-medium btn btn-danger-gradiant btn-block position-relative rounded-0 text-center text-white text-uppercase">
                      <span>Book Your Appointment Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointment;
