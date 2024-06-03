import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div>
    <h1>Thank you for reaching out to me, {name}!</h1>
    <h2> {subject} </h2>
    <p> This email is from {email} </p>
    <p> {message} </p>
  </div>
);
