import React from "react";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="flex-container">
          <div className="flex-item flex-item1">
            <div className="footer-title">morent</div>
            <p className="footer-description">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <div className="flex-item">
            <div className="footer-link-title">About</div>
            <div className="footer-links">
              <ul>
                <li><a href="#">How it works       </a></li>
                <li><a href="#">Partnership        </a></li>
                <li><a href="#">Bussiness Relation </a></li>
              </ul>
            </div>
          </div>
          <div className="flex-item">
          <div className="footer-link-title">Community</div>
            <div className="footer-links">
              <ul>
                <li><a href="#">Events         </a></li>
                <li><a href="#">Blog           </a></li>
                <li><a href="#">Podcast        </a></li>
                <li><a href="#">Invite a friend</a></li>
              </ul>
            </div>
          </div>
          <div className="flex-item">
          <div className="footer-link-title">Socials</div>
            <div className="footer-links">
              <ul>
                <li><a href="#">Discord  </a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter  </a></li>
                <li><a href="#">Facebook </a></li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <div className="footer-flex-container">
          <div className="footer-flex-item copyright">2022 MORENT. All rights reserved</div>
          <div className="footer-flex-item links">
            <ul>
              <li><a href="#">Privacy & Policy</a></li>
              <li><a href="#">Terms & Condition</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
