
import emailjs from '@emailjs/browser';

// EmailJS configuration
const SERVICE_ID = 'service_z67lcuy';
const TEMPLATE_ID = 'template_575tyzh';
const PUBLIC_KEY = 'your_public_key'; // You'll need to replace this with your actual public key

export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  subject?: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'غير محدد',
      service: data.service || 'غير محدد',
      subject: data.subject || 'رسالة جديدة',
      message: data.message,
      to_name: 'طارق ويب',
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);
    return response.status === 200;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Initialize EmailJS (should be called once in your app)
export const initEmailJS = () => {
  emailjs.init(PUBLIC_KEY);
};
