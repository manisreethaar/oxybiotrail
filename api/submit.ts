import { Resend } from 'resend';

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '4mb',
        },
    },
};

const resend = new Resend(process.env.RESEND_API_KEY);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const data = req.body;
        console.log("Received payload:", Object.keys(data));

        let htmlContent = `<h2>New Website Submission</h2><ul>`;
        for (const [key, value] of Object.entries(data)) {
            if (key !== 'attachment' && key !== 'access_key') {
                htmlContent += `<li><strong>${key}:</strong> ${value}</li>`;
            }
        }
        htmlContent += `</ul>`;

        const attachments = [];
        if (data.attachment && data.attachment.content) {
            console.log("Processing attachment:", data.attachment.name);
            attachments.push({
                filename: data.attachment.name || 'document.pdf',
                content: data.attachment.content
            });
        }

        console.log("Attempting to send email via Resend...");
        const { data: emailData, error } = await resend.emails.send({
            from: 'Oxygen Bioinnovations <onboarding@resend.dev>',
            to: ['careers@oxygenbioinnovations.com'],
            subject: data.subject || 'New Website Submission',
            html: htmlContent,
            attachments: attachments.length > 0 ? attachments : undefined
        });

        if (error) {
            console.error("Resend API Error:", error);
            return res.status(400).json({ success: false, error });
        }

        console.log("Email sent successfully:", emailData);
        return res.status(200).json({ success: true, data: emailData });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error("Serverless Function Error:", error);
        return res.status(500).json({ success: false, error: error.message || 'Internal Server Error', details: error });
    }
}
