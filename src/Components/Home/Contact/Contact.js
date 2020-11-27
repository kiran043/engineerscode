import React, { Component } from "react";
import "./Contact.css";
export default class Contact extends Component {
  render() {
    return (
      <>
        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" class="section-bg">
          <div class="container" data-aos="fade-up">
            <div class="section-header mt-5">
          <h1 className='text-center'>Connect Us</h1>
          {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p> */}
        </div>

            <div class="row contact-info mt-5">
              <div class="col-md-4">
                <div class="contact-address">
                  <i class="ion-ios-location-outline"></i>
                  <h3>Address</h3>
                  <address>
                    <a href='/'>Bangalore, Karnataka ,INDIA</a>{" "}
                  </address>
                </div>
              </div>

              <div class="col-md-4">
                <div class="contact-phone">
                  <i class="ion-ios-telephone-outline"></i>
                  <h3>Phone Number</h3>
                  <p>
                    <a href="tel:+91 8105244777">+91 7204864277</a>
                  </p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="contact-email">
                  <i class="ion-ios-email-outline"></i>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:info@makemydigital.in">
                      engineeringscode1729@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Contact Section --> */}
      </>
    );
  }
}
