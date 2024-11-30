"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SendEmail } from "@/components/SendEmail";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    // "use server";
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await SendEmail(formData);
      setSuccess(true);
    } catch (error) {
      setError("Failed to send email. Please try again.");
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <form
        action={async (formData) => {
          await handleSubmit(formData);
        }}
      >
        <CardHeader>
          <CardTitle className="icon_underline">Send me a mail.</CardTitle>
          <CardDescription>
            Once form is submitted, you will be redirected to the home page.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="SenderEmail"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="message">Your Message</Label>
            <textarea
              placeholder="Your message here..."
              name="message"
              required
              className="resize-none flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
          </div>
          {error && (
            <p className="text-red-500 mt-2 text-sm">{error}</p>
          )}
          {success && (
            <p className="text-green-500 mt-2 text-sm">
              Email sent successfully!
            </p>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
