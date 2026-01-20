import nodemailer from "nodemailer";


console.log("EMAIL_USER =", process.env.EMAIL_USER);
console.log("EMAIL_PASS =", process.env.EMAIL_PASS ? "LOADED" : "NOT LOADED");


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendPaymentSuccessEmail = async (toEmail, name) => {
  try {
    console.log("📧 Trying to send email to:", toEmail);

    const info = await transporter.sendMail({
      from: `"Gnixar" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: "Payment Successful – Gnixar Mock Interview",
      html: `
        <h2>Payment Successful 🎉</h2>
        <p>Hi <b>${name}</b>,</p>
        <p>Your payment was successful.</p>
        <p>Our team will contact you soon for your mock interview.</p>
        <br/>
        <p>Thanks,<br/>Gnixar Team</p>
      `,
    });

    console.log("✅ Email sent successfully:", info.messageId);

  } catch (error) {
    console.error("❌ EMAIL ERROR:", error);
    throw error;
  }
};
