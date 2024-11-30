import { Resend } from "resend";
import { redirect } from "next/navigation";

// Initialize Resend instance with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (formdata: FormData) => {
  // Extract form data
  const message = formdata.get("message")?.toString();
  const name = formdata.get("name")?.toString();
  const SenderEmail = formdata.get("SenderEmail")?.toString();

  // Validate required fields
  if (!message || !name || !SenderEmail) {
    console.error("Validation failed: Missing required fields");
    return {
      error: "Missing required fields: name, email, or message.",
    };
  }

  // Check for API key
  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable");
    return {
      error: "Server configuration error. Please contact support.",
    };
  }

  try {
    // Send the email
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", 
      to: "waghshreyas22@gmail.com", 
      subject: `${name} From Contact Form.`,
      replyTo: SenderEmail,
      text: `Sender email: ${SenderEmail}\n\nMessage:\n${message}`,
    });

    // Redirect to the home page on success
    return redirect("/");
  } catch (error) {
    // Log and handle errors gracefully
    console.error("Failed to send email:", error);
    return {
      error: "Failed to send the email. Please try again later.",
    };
  }
};
