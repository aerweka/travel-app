import React from "react";

import Button from "elements/Button";

import BrandIcon from "parts/IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto pt-3" style={{ width: 350 }}>
            <BrandIcon />
            <p className="brand-tagline">
              We kaboom your beauty holiday instanly and memorable
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item px-0 py-1">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item px-0 py-1">
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item px-0 py-1">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item px-0 py-1">
                <Button type="link" href="/careers">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item px-0 py-1">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item px-0 py-1">
                <Button type="link" href="/terms">
                  Terms and Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <h6 className="mt-2">Contact Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item px-0 py-1">
                <Button
                  isExternal
                  type="link"
                  href="mailto:support@staycation.id"
                >
                  support@staycation.id
                </Button>
              </li>
              <li className="list-group-item px-0 py-1">
                <Button isExternal type="link" href="tel:+622122081996">
                  021 - 2208 - 1996
                </Button>
              </li>
              <li className="list-group-item px-0 py-1">
                <span>Staycation, Kemang, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights"></div>
        </div>
      </div>
    </footer>
  );
}
