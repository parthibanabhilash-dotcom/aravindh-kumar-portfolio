// EmailJS uses its public browser key; no Gmail password is stored in the app.
export async function sendContactEmail(formData, signal) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (!serviceId || !templateId || !publicKey) {
    throw new Error('Email service configuration is incomplete');
  }
  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    signal,
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        name: formData.name.trim(),
        email: formData.email.trim(),
        reply_to: formData.email.trim(),
        project: formData.projectType,
        title: formData.projectType,
        message: formData.details.trim(),
      },
    }),
  });
  if (!response.ok) throw new Error('Email service rejected the request');
}
