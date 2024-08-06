import * as React from "react";

interface WaitlistProps {
  email: string;
}

export const WaitlistEmailTemplate: React.FC<Readonly<WaitlistProps>> = ({
  email,
}) => (
  <div>
    <h1>Welcome, {email}!</h1>
  </div>
);
