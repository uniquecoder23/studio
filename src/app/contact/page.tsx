"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContactForm } from "@/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    subject?: string[];
    message?: string[];
  };
  success: boolean;
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
      <span style={{fontFamily: 'Qwigley, cursive'}} className="text-3xl">{pending ? "Sending..." : "Send Message"}</span> <Send className="ml-2 h-4 w-4" />
    </Button>
  );
}

export default function ContactPage() {
  const initialState: ContactFormState = { message: "", errors: {}, success: false };
  const [state, dispatch] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Success!",
        description: state.message,
      });
      const form = document.querySelector('form');
      form?.reset();
    } else if (state.message && Object.keys(state.errors ?? {}).length > 0) {
        toast({
            variant: "destructive",
            title: "Error",
            description: state.message,
        });
    }
  }, [state, toast]);

  return (
    <div className="bg-background">
      <div className="pt-24 lg:pt-32">
        <section className="py-16 lg:py-24 bg-secondary dark:bg-card">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-5xl lg:text-6xl text-primary">Get In Touch</h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground">
              Have a question or ready to start planning? We're here to help.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-headline text-4xl text-primary mb-8">Contact Form</h2>
                <form action={dispatch} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" type="text" placeholder="Your Name" required />
                    {state.errors?.name && <p className="text-sm font-medium text-destructive mt-1">{state.errors.name[0]}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                     {state.errors?.email && <p className="text-sm font-medium text-destructive mt-1">{state.errors.email[0]}</p>}
                  </div>
                   <div>
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 234 567 8900" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" type="text" placeholder="Regarding my event" required />
                     {state.errors?.subject && <p className="text-sm font-medium text-destructive mt-1">{state.errors.subject[0]}</p>}
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Tell us about your event..." rows={5} required />
                     {state.errors?.message && <p className="text-sm font-medium text-destructive mt-1">{state.errors.message[0]}</p>}
                  </div>
                  <SubmitButton />
                </form>
              </div>
              <div className="space-y-8">
                <h2 className="font-headline text-4xl text-primary">Contact Information</h2>
                 <p className="text-lg text-muted-foreground leading-relaxed">
                  Feel free to reach out to us through any of the following methods. We are eager to hear from you and help bring your event to life. Our team is available to answer any questions you may have.
                </p>
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-full text-primary"><MapPin /></div>
                        <div>
                            <h3 className="font-semibold text-lg">Our Office</h3>
                            <p className="text-muted-foreground">123 Event Lane, Celebration City, 12345</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                         <div className="bg-primary/10 p-3 rounded-full text-primary"><Mail /></div>
                         <div>
                            <h3 className="font-semibold text-lg">Email Us</h3>
                            <p className="text-muted-foreground">engtechno25@gmail.com</p>
                        </div>
                    </div>
                     <div className="flex items-start space-x-4">
                         <div className="bg-primary/10 p-3 rounded-full text-primary"><Phone /></div>
                         <div>
                            <h3 className="font-semibold text-lg">Call Us</h3>
                            <p className="text-muted-foreground">+1 234 567 8900</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
