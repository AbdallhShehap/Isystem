import React from "react";
import "../assests/Subscribe.css";
import Button from "@mui/material/Button";
import { MDBInput } from "mdb-react-ui-kit";
function Subscribe() {
  return (
    <div>
     <div className="subscrib">
  <div className="text">
    <div className="box_subscribe">
      <h3>
        {/* Subscribe to our newsletter and be the first who benefits from our
        offers. Promotions and new product launches straight to your
        mailbox. */}
        Special Offers
      </h3>
    </div>

    <div className="subscribe">
      <MDBInput
        placeholder="Enter your email"
        id="form1 send"
        type="text"
      />

      <Button variant="contained">Subscribe</Button>
    </div>
  </div>
</div>

    </div>
  );
}

export default Subscribe;
