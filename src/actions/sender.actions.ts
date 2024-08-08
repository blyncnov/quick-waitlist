"use server";

// resend_lib
import resend from "@/lib/resend";

// Wailist email template
import { WaitlistEmailTemplate } from "@/components/waitlist.email";

export const sendWaitlistEmail = async (payload: { email: string }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Quick Waitlist <info@jeremytechie.com>",
      to: [payload.email],
      subject: "Welcome onboard!",
      react: WaitlistEmailTemplate({
        email: payload.email as string,
      }),
    });

    if (error) {
      return {
        status: "error",
        message: error.message,
      };
    }

    return {
      status: "ok",
      message: data?.id,
    };
  } catch (error) {
    return {
      status: "error",
      message: "Internal Error Occured!",
    };
  }
};
