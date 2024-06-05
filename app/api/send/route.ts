import { EmailTemplate } from "../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const fromEmail = process.env.fromEmail;

export async function POST(req: any, res: any) {
  try {
    const { name, email, subject, message } = await req.json();
    const { data, error } = await resend.emails.send({
      from: `${name} <${email}>`,
      to: ["khanhnkb@gmail.com"],
      subject: "Thank you for your email!",
      react: EmailTemplate({
        name,
        email,
        subject,
        message,
      }) as React.ReactElement,
    });

    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
