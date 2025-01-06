import { contactSchema, ContactSchema } from "@/utils/schemas";
import axios from "axios";
import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import qs from "qs";
import {z} from "zod";

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY is not defined");
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request: Request) {
  const body: unknown = await request.json();
  const ip = request.headers.get('x-forwarded-for') || undefined;
 
  // console.log('body', body)
  const result: z.SafeParseReturnType<ContactSchema, ContactSchema> = contactSchema.safeParse(body);
  let formData = result.data as ContactSchema & { reCaptchaScore: number | string };
  let errors = {};
  console.log("result:", result)
  console.log("body", body)

  // if(!result.success) {
  // return new Response(JSON.stringify(result), {
  //   status: 402,
  //   headers: { 'content-type': 'application/json' }
  // })
  // }
  const recaptchaResponse = await axios.post('https://www.google.com/recaptcha/api/siteverify', qs.stringify({
    secret: process.env.RECAPTCHA_SECRET_KEY,
    response: result.data?.recaptchaToken,
    remoteip: ip
  }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  });

  // console.log("secret:", process.env.RECAPTCHA_SECRET_KEY, "token:", result.data?.recaptchaToken, "ip:", ip);
  console.log(result.data)
  if (!recaptchaResponse.data?.success || recaptchaResponse.data?.score < 0.5) {
    errors = { ...errors, "reCaptcha": 'reCaptcha Verification Failure' };
    return new Response(JSON.stringify({ message: `reCaptcha Failure` }), {
      status: 418,
      headers: { 'content-type': 'application/json' }
    })
  }
  formData = { ...formData, ip: ip, reCaptchaScore: recaptchaResponse.data.score }


  console.log(result);


  if (!result.success) {
    result.error.issues.forEach((issue) => {
      errors = { ...errors, [issue.path[0]]: issue.message };
    });
    // console.log(errors);
  }
  let emailContent = `<h1>You have a new contact form submission</h1>`;
  for (const [key, value] of Object.entries(formData)) {
    emailContent += `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</p>`;
  }
  // console.log('ip address: ', ip)
  const msg = {
    to: 'tomgw1@gmail.com', // Recipient's email address
    from: 'tom@tomwheatley.media', // Your verified sender email address
    subject: 'new contact form message',
    text: 'hello',
    html: `<div>${emailContent}
  <p>ip: ${ip}</p>
  </div>`,
  };

  try {
    await sgMail.send(msg);
    console.log('email sent')
    // return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    errors = { ...errors, "Mail Error": "Failed to send" };
    // return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }



  return NextResponse.json(
    Object.keys(errors).length > 0 ? { errors: errors } : { success: true },
  );
}