import { Resend } from "resend";

// Init resend
const resend = new Resend(process.env.RESEND_API_KEY);

export default resend;
