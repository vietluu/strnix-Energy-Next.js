import React from 'react';
import CountUp from 'react-countup';

export default function CounterUp() {
  return (
    <div className="sub-recent-projects ">
      <div className="bgsecond "></div>

      <div className="content ">
        <div className="method " data-aos="fade-up">
          <ul>
            <li className="col-lg-3 col-md-6 col-sm-12">
              <span className="method-icon ">
                <i className="fas fa-bolt "></i>
              </span>
              <h2>
                {
                  <CountUp
                    className="counter"
                    redraw
                    start={0}
                    enableScrollSpy={true}
                    scrollSpyDelay={0}
                    end={24}
                    duration={3}
                    scrollSpyOnce={true}
                  />
                }

                {'+ Years'}
              </h2>
              <p>Of Experience & Record</p>
            </li>

            <li className="col-lg-3 col-md-6 col-sm-12">
              <span className="method-icon ">
                <i className="fas fa-bolt "></i>
              </span>
              <h2>
                {
                  <CountUp
                    className="counter"
                    redraw
                    start={0}
                    enableScrollSpy={true}
                    scrollSpyDelay={0}
                    end={3500}
                    duration={3}
                    scrollSpyOnce={true}
                  />
                }

                {'+'}
              </h2>
              <p>System Installed</p>
            </li>
            <li className="col-lg-3 col-md-6 col-sm-12">
              <span className="method-icon ">
                <i className="fas fa-bolt "></i>
              </span>
              <h2>
                {
                  <CountUp
                    className="counter"
                    redraw
                    start={0}
                    enableScrollSpy={true}
                    scrollSpyDelay={0}
                    end={6.5}
                    decimals={1}
                    duration={3}
                    scrollSpyOnce={true}
                  />
                }

                {'k Watt'}
              </h2>
              <p>Energy Financing Done</p>
            </li>
            <li className="col-lg-3 col-md-6 col-sm-12">
              <span className="method-icon ">
                <i className="fas fa-bolt "></i>
              </span>
              <h2>
                {
                  <CountUp
                    className="counter"
                    redraw
                    start={0}
                    enableScrollSpy={true}
                    scrollSpyDelay={0}
                    end={2700}
                    duration={3}
                    scrollSpyOnce={true}
                  />
                }

                {'+'}
              </h2>
              <p>Hours Of Inspection</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
