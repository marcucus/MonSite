"use server";
import { actionHandler } from "../lib/actionHandler";
import nodemailer from 'nodemailer';
import { generateEmailTemplate } from "../utils/emailTemplates";
import { generateEmailTemplateBase } from "../utils/emailTemplatesBase";

export const sendMailAction = actionHandler(async (name: string, email: string, message: string) => {
  let response: any;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `${name} <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `Nouveau message de ${name}`,
    text: message,
    html: generateEmailTemplate(name, message, email),
  };

  const autoReplyOptions = {
    from: `"noreply" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Contact - Adrien Marques - Merci de m\'avoir contacté !',
    text: `Bonjour ${name},\n\nMerci pour votre message. Je reviens vers vous très rapidement.\n\nCordialement,\nMarques Adrien`,
    html: generateEmailTemplateBase(name),
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);
    response = { success: true, message: 'Message sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    response = { success: false, message: 'Failed to send message' };
  }

  return response;
});