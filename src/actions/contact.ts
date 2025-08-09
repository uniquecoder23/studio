"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
      success: false,
    };
  }
  
  // This is where you would integrate with an email service like Resend, SendGrid, etc.
  // The user requested emails to be sent to "engtechno25@gmail.com".
  console.log("Form data submitted, notionally sending to engtechno25@gmail.com:");
  console.log(validatedFields.data);

  return {
    message: "Thank you for your message! We will get back to you shortly.",
    success: true,
    errors: {},
  };
}
