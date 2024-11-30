import { Resend } from "resend";
import { redirect } from "next/navigation";

if (!process.env.RESEND_API_KEY) {
  console.error("Missing RESEND_API_KEY environment variable");
  throw new Error("Missing RESEND_API_KEY environment variable");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (formData: FormData) => {
  const message = formData.get("message")?.toString();
  const name = formData.get("name")?.toString();
  const senderEmail = formData.get("SenderEmail")?.toString();

  if (!message || !name || !senderEmail) {
    console.error("Validation failed: Missing required fields");
    throw new Error("Missing required fields: name, email, or message.");
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "waghshreyas22@gmail.com",
      subject: `${name} From Contact Form.`,
      replyTo: senderEmail,
      text: `Sender email: ${senderEmail}\n\nMessage:\n${message}`,
    });

    return redirect("/");
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
};
