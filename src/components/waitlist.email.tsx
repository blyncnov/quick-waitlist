import * as React from "react";

interface WaitlistProps {
  email: string;
}

export const WaitlistEmailTemplate: React.FC<Readonly<WaitlistProps>> = ({
  email,
}) => (
  <div>
    <h2>Welcome onboard, {email}!</h2>
    <p>
      Big welcome and thanks for subscribing to Quick Waitlist
      <br />
      <br />
      🚀 The mission is to send out a stylish and simple newsletter that help
      busy creatives to stay updated without cluttering their inbox.
      <br />
      🛳 All new AI resources and tools are carefully curated, with only a
      handful of the best being shipped.
      <br />
      <br />
      Expect a new shipment every Tuesday!
    </p>
  </div>
);
