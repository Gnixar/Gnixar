import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const sendPaymentSuccessSMS = async (phone, name) => {
  await client.messages.create({
    body: `Hi ${name}, your payment for Gnixar Mock Interview was successful. We will contact you soon.`,
    from: process.env.TWILIO_PHONE,
    to: phone.startsWith("+") ? phone : `+91${phone}`,
  });
};
