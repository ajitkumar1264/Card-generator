import React from "react";
import {NavLink} from 'react-router-dom'

const Events = () => {
  return (
    <div>
      <header className="event-sec">
        <center>
          <div className="e-title">News For Upcoming Events</div>
          <div className="e-sub-title">
            Join the amazing events and show the Nation
          </div>
          <div className="e-sub-title">Be the face of your Art</div>
        </center>
      </header>
      <main>
        <div className="e-list">
        <NavLink to="/form">
          <div className="card">
            <div className="card-img">
              <img src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/event1.jpg" />
              <div className="time">
                24 <br /> Nov
              </div>
            </div>
            <div className="card-info">
              <div className="info-loc">Rajkot</div>
              <div className="info-t">Gujarat Dance Festival</div>
              <div className="info-des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate voluptatum ad alias minus dolores, consequuntur
                repellendus culpa nam, quaerat.
              </div>
              <div className="join btns">Join Now</div>
            </div>
          </div>
          </NavLink>
          <div className="card">
            <div className="card-img">
              <img src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/event-2.jpg" />
              <div className="time">
                12 <br /> Jan
              </div>
            </div>
            <div className="card-info">
              <div className="info-loc">Surat</div>
              <div className="info-t">Local Cultural Fest</div>
              <div className="info-des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate voluptatum ad alias minus dolores, consequuntur
                repellendus culpa nam, quaerat.
              </div>
              <div className="join btns">Join Now</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;
