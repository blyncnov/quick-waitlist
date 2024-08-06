import * as React from "react";

interface WaitlistProps {
  email: string;
  fullName?: string;
}

export const WaitlistEmailTemplate: React.FC<Readonly<WaitlistProps>> = ({
  email,
  fullName,
}) => (
  <div>
    <h1>Welcome, {fullName ?? email}!</h1>
  </div>
);
