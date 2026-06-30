import type { Request, Response } from 'express';

export const sendContact = async (req: Request, res: Response) => {
  const { name, email, message } = req.body as { name: string; email: string; message: string };

  if (!name || !email || !message) {
    res.status(400).json({ error: 'Tous les champs sont requis.' });
    return;
  }

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      sender: { name: 'Portfolio Devflix', email: process.env.MAIL_FROM },
      to: [{ email: process.env.MAIL_TO }],
      replyTo: { email, name },
      subject: `[Portfolio] Message de ${name}`,
      htmlContent: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('Brevo API error:', error);
    res.status(500).json({ error: 'Erreur lors de l\'envoi du mail.' });
    return;
  }

  console.log(`Mail envoyé à ${process.env.MAIL_TO}`);
  res.json({ success: true });
};
