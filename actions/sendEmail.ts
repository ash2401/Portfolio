"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    console.log('Running on server');
    console.log(formData.get("senderEmail"));

    resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "akshatsrivastav7@gmail.com",
        subject: "Message from contact form",
        text: "Hello World"
    })
}