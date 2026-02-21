import { Resend } from 'resend';

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '4mb',
        },
    },
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const data = req.body;

        let htmlContent = `<h2>New Website Submission</h2><ul>`;
        for (const [key, value] of Object.entries(data)) {
            if (key !== 'attachment' && key !== 'access_key') {
                htmlContent += `<li><strong>${key}:</strong> ${value}</li>`;
            }
        }
        htmlContent += `</ul>`;

        const attachments = [];
        if (data.attachment && data.attachment.content) {
            attachments.push({
                filename: data.attachment.name || 'document.pdf',
                content: data.attachment.content
            });
        }

        const { data: emailData, error } = await resend.emails.send({
            from: 'Oxygen Bioinnovations <onboarding@resend.dev>',
            to: ['careers@oxygenbioinnovations.com'],
            subject: data.subject || 'New Website Submission',
            html: htmlContent,
            attachments: attachments.length > 0 ? attachments : undefined
        });

        if (error) {
            return res.status(400).json({ success: false, error });
        }

        return res.status(200).json({ success: true, data: emailData });
    } catch (error) {
        return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}
