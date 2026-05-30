import type { NextFunction, Request, Response } from 'express';
import { Router } from "express";
import { sendMail } from '../libs/sendMail.js';

const router: Router = Router();
export default router;


router.post('/sendMail', async (req: Request, res: Response) => {
  try {
    const {
      email,
      phone,
      message,
      name
    }: {
      email?: string;
      name?: string;
      phone?: string;
      message?: string;
    } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required',
      });
    }

    if (!name) {
      return res.status(400).json({
        success: false,
        message: 'Name is required',
      });
    }

    // Mail to you
    await sendMail({
      to: 'ritishdas116@gmail.com',
      subject: 'New Website Contact',
      body: `
        <div>
          <h1>New Contact Request</h1>

          <p>
            <strong>Name:</strong>
              ${name}
          </p>

          <p>
            <strong>Email:</strong>
            <a href="mailto:${email}">
              ${email}
            </a>
          </p>

          ${phone
          ? `
                <p>
                  <strong>Phone:</strong>
                  <a href="tel:${phone}">
                    ${phone}
                  </a>
                </p>
              `
          : ''
        }

          ${message
          ? `
                <div>
                  <strong>Message:</strong>
                  <p>${message}</p>
                </div>
              `
          : ''
        }
        </div>
      `,
    });

    // Acknowledgement to user
    await sendMail({
      to: email,
      subject: 'Thanks for contacting me',
      body: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="text-align:center; margin-bottom:20px;">
    <img
      src="https://ritish.site/assets/logo.png"
      alt="Ritish Logo"
      width="120"
      style="max-width:120px; height:auto;"
    />
  </div>

  <h2>Thank you for reaching out.</h2>

  <p>
    I have received your message and will get back to you as soon as possible.
  </p>

  <p style="margin-top:24px;">
    Regards,<br/>
    <strong>Ritish Das</strong>
  </p>
</div>      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: 'Failed to send message',
    });
  }
});
