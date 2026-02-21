import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

const Privacy = () => {
    return (
        <Layout>
            <div className="pt-32 pb-24 bg-slate-50/50 dark:bg-slate-900/50 min-h-screen">
                <div className="container-width px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto bg-white dark:bg-slate-950 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm"
                    >
                        <div className="mb-12 border-b border-slate-100 dark:border-slate-800 pb-8 text-center">
                            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6">
                                Legal
                            </span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-[1.05] tracking-tighter">
                                Privacy Policy
                            </h1>
                            <p className="text-sm text-slate-500">
                                Oxygen Bioinnovations<br />
                                Brand: RIZE
                            </p>
                            <div className="flex items-center justify-center gap-4 mt-6 text-xs font-bold uppercase tracking-widest text-slate-400">
                                <span>Last updated: October 2026</span>
                                <span>•</span>
                                <span>Effective from: October 2026</span>
                            </div>
                        </div>
                        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h3:text-lg md:prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-relaxed prose-p:font-light prose-p:mb-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8 prose-li:leading-relaxed prose-li:font-light prose-li:my-2 prose-strong:font-bold prose-strong:text-slate-900 dark:prose-strong:text-white">

                            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 mb-12">
                                <h2 className="mt-0 text-2xl md:text-3xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-4">Summary in Plain Language</h2>
                                <p className="text-slate-600 dark:text-slate-400 font-light">
                                    Before the legal details — here is what matters in simple words:
                                </p>
                                <ul className="text-slate-600 dark:text-slate-400 space-y-2 mt-4">
                                    <li>We collect your email and name when you join our waitlist.</li>
                                    <li>We use it only to send you RIZE updates.</li>
                                    <li>We do not sell your data. We do not share it with advertisers. We do not do anything weird with it.</li>
                                    <li>You can ask us to delete it anytime. We will. Within 72 hours. No questions.</li>
                                </ul>
                            </div>

                            <h2>1. Who We Are</h2>
                            <p>This Privacy Policy is issued by:</p>
                            <p>
                                <strong>Oxygen Bioinnovations</strong><br />
                                ('Oxygen Bioinnovations', 'RIZE', 'we', 'us', 'our')
                            </p>
                            <p className="mt-6 mb-2">
                                <strong>Principal Place of Business:</strong><br />
                                TBI, Adhiyamaan College of Engineering, Hosur, Tamil Nadu
                            </p>
                            <p className="mt-0">
                                <strong>Email:</strong> info@oxygenbioinnovations.com
                            </p>
                            <p>We develop precision nutrition products under the brand name RIZE.</p>
                            <p>This policy applies to all personal data collected through:</p>
                            <ul>
                                <li>Our website: www.oxygenbioinnovations.com</li>
                                <li>Any forms, surveys, or communications operated by us</li>
                                <li>Any future mobile applications</li>
                            </ul>

                            <h2>2. What Data We Collect</h2>
                            <p>We only collect data that we actually need. Here is exactly what we collect and why:</p>

                            <h3>2.1 Waitlist Registration Data</h3>
                            <div className="overflow-x-auto my-6 border border-slate-200 dark:border-slate-800 rounded-xl">
                                <table className="w-full text-left text-sm m-0">
                                    <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                                        <tr>
                                            <th className="p-4 font-bold">What we collect</th>
                                            <th className="p-4 font-bold border-l border-slate-200 dark:border-slate-800">Why we need it</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                        <tr>
                                            <td className="p-4 align-top">First name</td>
                                            <td className="p-4 border-l border-slate-200 dark:border-slate-800">To address you personally in our communications</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 align-top">Email address</td>
                                            <td className="p-4 border-l border-slate-200 dark:border-slate-800">To send you launch updates, development news, and your early access notification</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 align-top">City (if you share it)</td>
                                            <td className="p-4 border-l border-slate-200 dark:border-slate-800">To understand where our audience is located and plan future distribution</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 align-top">Product interest (which formula)</td>
                                            <td className="p-4 border-l border-slate-200 dark:border-slate-800">To understand which RIZE formula interests you most and improve our products</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3>2.2 Newsletter Subscription Data</h3>
                            <p>If you subscribe to The RIZE Report (our newsletter), we collect:</p>
                            <div className="overflow-x-auto my-6 border border-slate-200 dark:border-slate-800 rounded-xl">
                                <table className="w-full text-left text-sm m-0">
                                    <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                                        <tr>
                                            <th className="p-4 font-bold">What we collect</th>
                                            <th className="p-4 font-bold border-l border-slate-200 dark:border-slate-800">Why we need it</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                        <tr>
                                            <td className="p-4 align-top">Email address</td>
                                            <td className="p-4 border-l border-slate-200 dark:border-slate-800">To send you The RIZE Report</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 align-top">Name</td>
                                            <td className="p-4 border-l border-slate-200 dark:border-slate-800">To personalize your emails</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 align-top">Preferences</td>
                                            <td className="p-4 border-l border-slate-200 dark:border-slate-800">To send relevant content</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3>2.3 Contact Form Data</h3>
                            <p>If you contact us through our website, we collect:</p>
                            <div className="overflow-x-auto my-6 border border-slate-200 dark:border-slate-800 rounded-xl">
                                <table className="w-full text-left text-sm m-0">
                                    <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                                        <tr>
                                            <th className="p-4 font-bold">What we collect</th>
                                            <th className="p-4 font-bold border-l border-slate-200 dark:border-slate-800">Why we need it</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                        <tr>
                                            <td className="p-4 align-top">Name</td>
                                            <td className="p-4 border-l border-slate-200 dark:border-slate-800">To respond to you properly</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 align-top">Email address</td>
                                            <td className="p-4 border-l border-slate-200 dark:border-slate-800">To send our response</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 align-top">Message content</td>
                                            <td className="p-4 border-l border-slate-200 dark:border-slate-800">To understand and address your query</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 align-top">Reason for contact</td>
                                            <td className="p-4 border-l border-slate-200 dark:border-slate-800">To route your query to the right person</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3>2.4 Automatic Website Data</h3>
                            <p>When you visit our website, we automatically collect certain technical data through cookies and analytics tools:</p>
                            <div className="overflow-x-auto my-6 border border-slate-200 dark:border-slate-800 rounded-xl">
                                <table className="w-full text-left text-sm m-0">
                                    <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                                        <tr>
                                            <th className="p-4 font-bold">What we collect</th>
                                            <th className="p-4 font-bold border-l border-slate-200 dark:border-slate-800">Why we need it</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                        <tr>
                                            <td className="p-4 align-top">IP address (anonymized)</td>
                                            <td className="p-4 border-l border-slate-200 dark:border-slate-800">Security and to understand approximate visitor location</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 align-top">Browser & Device type</td>
                                            <td className="p-4 border-l border-slate-200 dark:border-slate-800">To ensure our website works correctly on your device</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 align-top">Pages visited & Time</td>
                                            <td className="p-4 border-l border-slate-200 dark:border-slate-800">To understand which content is most useful to our visitors</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 align-top">Referring website</td>
                                            <td className="p-4 border-l border-slate-200 dark:border-slate-800">To understand how people find us</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="p-4 rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-900/10 dark:border-amber-800/50">
                                <p className="text-sm font-bold text-amber-800 dark:text-amber-400 m-0">IMPORTANT:</p>
                                <p className="text-sm text-amber-700 dark:text-amber-300 mt-1 mb-0">We anonymize IP addresses before processing. We cannot identify you personally from this automatic data alone.</p>
                            </div>

                            <h3>2.5 Data We Do Not Collect (Currently)</h3>
                            <p>We do NOT currently collect:</p>
                            <ul>
                                <li>Payment information (we do not sell yet)</li>
                                <li>Delivery addresses (we do not ship yet)</li>
                                <li>Phone numbers</li>
                                <li>Government ID numbers</li>
                                <li>Health or medical information</li>
                                <li>Biometric or Location tracking data</li>
                            </ul>
                            <p>When we begin selling products, this policy will be updated to include purchase-related data collection. You will be notified of any such updates.</p>

                            <h2>3. How We Use Your Data</h2>
                            <p>We use your personal data ONLY for the following purposes:</p>

                            <h3>3.1 To Communicate With You</h3>
                            <ul>
                                <li>Send waitlist updates about RIZE</li>
                                <li>Send The RIZE Report newsletter (only if you subscribed)</li>
                                <li>Respond to your questions or enquiries</li>
                                <li>Notify you when RIZE products launch</li>
                            </ul>

                            <h3>3.2 To Improve Our Products and Website</h3>
                            <ul>
                                <li>Understand what content interests you</li>
                                <li>Analyze website performance</li>
                                <li>Make product development decisions (e.g., which formula to launch first based on waitlist interest)</li>
                            </ul>

                            <h3>3.3 To Comply With Legal Requirements</h3>
                            <ul>
                                <li>Respond to legal requests from authorities</li>
                                <li>Maintain records as required by Indian law</li>
                            </ul>

                            <div className="p-5 rounded-xl border border-red-200 bg-red-50 dark:bg-red-900/10 dark:border-red-900/30 my-8">
                                <h4 className="text-red-800 dark:text-red-400 font-bold m-0 mb-3">WE DO NOT USE YOUR DATA TO:</h4>
                                <ul className="text-red-700 dark:text-red-300 m-0 space-y-1">
                                    <li>• Sell to any third party. Ever.</li>
                                    <li>• Share with advertisers or data brokers.</li>
                                    <li>• Create advertising profiles.</li>
                                    <li>• Send you marketing from other companies.</li>
                                    <li>• Make automated decisions about you.</li>
                                    <li>• Target you with third-party advertising.</li>
                                </ul>
                            </div>

                            <h2>4. Who We Share Your Data With</h2>
                            <p>We share your personal data ONLY with the following service providers who help us operate our business:</p>

                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                    <h4 className="font-bold text-slate-900 dark:text-white mt-0 mb-3">4.1 Email Service Provider</h4>
                                    <p className="text-sm m-0 mb-1"><strong>Provider:</strong> Mailchimp / Email Service</p>
                                    <p className="text-sm m-0 mb-1"><strong>Purpose:</strong> Sending emails and newsletters</p>
                                    <p className="text-sm m-0 mb-1"><strong>Data shared:</strong> Email address, first name</p>
                                    <p className="text-sm m-0"><strong>Location:</strong> USA / Global</p>
                                </div>

                                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                    <h4 className="font-bold text-slate-900 dark:text-white mt-0 mb-3">4.2 Website Analytics</h4>
                                    <p className="text-sm m-0 mb-1"><strong>Provider:</strong> Google Analytics 4</p>
                                    <p className="text-sm m-0 mb-1"><strong>Purpose:</strong> Understanding website usage</p>
                                    <p className="text-sm m-0 mb-1"><strong>Data shared:</strong> Anonymized browsing data</p>
                                    <p className="text-sm m-0"><strong>Location:</strong> USA / Global</p>
                                </div>

                                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                    <h4 className="font-bold text-slate-900 dark:text-white mt-0 mb-3">4.3 Website Hosting</h4>
                                    <p className="text-sm m-0 mb-1"><strong>Provider:</strong> Vercel Inc</p>
                                    <p className="text-sm m-0 mb-1"><strong>Purpose:</strong> Hosting our website</p>
                                    <p className="text-sm m-0 mb-1"><strong>Data shared:</strong> Standard web server logs</p>
                                    <p className="text-sm m-0"><strong>Location:</strong> USA / Global network</p>
                                </div>
                            </div>

                            <h3>4.4 Future Additions</h3>
                            <p>When we launch products, we may add payment processors (e.g., Razorpay), delivery partners, and customer support tools. This policy will be updated before any new data sharing begins, and you will be notified of such changes.</p>

                            <h3>4.5 Legal Requirements</h3>
                            <p>We may share your data with law enforcement or regulatory authorities if required by a valid court order, a legal obligation under Indian law, or a legitimate request from FSSAI or other regulatory body. If this happens, we will notify you unless legally prohibited from doing so.</p>

                            <h2>5. How Long We Keep Your Data</h2>
                            <p>We do not keep your data longer than necessary. Here are our specific retention periods:</p>

                            <div className="overflow-x-auto my-6 border border-slate-200 dark:border-slate-800 rounded-xl">
                                <table className="w-full text-left text-sm m-0">
                                    <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                                        <tr>
                                            <th className="p-4 font-bold">Data type</th>
                                            <th className="p-4 font-bold border-l border-slate-200 dark:border-slate-800">How long we keep it</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                        <tr>
                                            <td className="p-4 align-top">Waitlist & Newsletter</td>
                                            <td className="p-4 border-l border-slate-200 dark:border-slate-800">Until you unsubscribe + 30 days after (to process removal)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 align-top">Contact form messages</td>
                                            <td className="p-4 border-l border-slate-200 dark:border-slate-800">2 years from the date of your last message</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 align-top">Website analytics</td>
                                            <td className="p-4 border-l border-slate-200 dark:border-slate-800">14 months (Google Analytics default)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 align-top">Future purchase data</td>
                                            <td className="p-4 border-l border-slate-200 dark:border-slate-800">7 years from purchase (Indian tax law: GST records retention)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>After the retention period ends, your data is permanently deleted from our systems and from our service providers' systems.</p>

                            <h2>6. How We Protect Your Data</h2>

                            <h3>Technical Measures</h3>
                            <ul>
                                <li>SSL/TLS encryption on our website (your connection is always encrypted)</li>
                                <li>Secure, reputable service providers with their own security measures</li>
                                <li>Access controls: Only authorized team members can access your data</li>
                                <li>Password-protected accounts for all tools that contain your data</li>
                            </ul>

                            <h3>Organizational Measures</h3>
                            <ul>
                                <li>Limited access: Only essential team members can access personal data</li>
                                <li>No data stored on personal devices</li>
                                <li>Service providers chosen for their security standards</li>
                            </ul>

                            <h3>What We Cannot Guarantee</h3>
                            <p>No method of electronic storage or transmission is 100% secure. While we take all reasonable precautions, we cannot guarantee absolute security of your data.</p>

                            <h3>In Case of a Data Breach</h3>
                            <p>If we discover that your personal data has been compromised, we will notify you within 72 hours of discovery, explain what data was affected, tell you what steps we are taking, and report to relevant authorities as required under DPDP Act 2023.</p>

                            <h2>7. Your Rights</h2>
                            <p>Under Indian law, including the Digital Personal Data Protection Act 2023 and Information Technology Act 2000, you have the following rights:</p>

                            <div className="space-y-4 my-8">
                                <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                                    <h4 className="font-bold text-slate-900 dark:text-white m-0 tracking-wide text-sm">7.1 RIGHT TO ACCESS</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 mb-0">You can ask us what personal data we hold about you. We will provide it within 72 hours.</p>
                                </div>
                                <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                                    <h4 className="font-bold text-slate-900 dark:text-white m-0 tracking-wide text-sm">7.2 RIGHT TO CORRECTION</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 mb-0">You can ask us to correct any inaccurate or incomplete data. We will correct it within 72 hours.</p>
                                </div>
                                <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                                    <h4 className="font-bold text-slate-900 dark:text-white m-0 tracking-wide text-sm">7.3 RIGHT TO ERASURE (Deletion)</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 mb-0">You can ask us to permanently delete all your personal data from our systems. We will delete it within 72 hours.</p>
                                </div>
                                <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                                    <h4 className="font-bold text-slate-900 dark:text-white m-0 tracking-wide text-sm">7.4 RIGHT TO WITHDRAW CONSENT</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 mb-0">You can withdraw your consent for data processing at any time by unsubscribing or contacting us.</p>
                                </div>
                            </div>

                            <h3>How to Exercise Any Right</h3>
                            <p>Send an email to: <a href="mailto:info@oxygenbioinnovations.com">info@oxygenbioinnovations.com</a><br />
                                <strong>Subject line:</strong> 'Data Rights Request — [Your Name]'<br />
                                <strong>Include:</strong> Your name, your email address, and your specific request.</p>
                            <p><em>We will acknowledge within 24 hours. We will fulfill within 72 hours. No fees. No delays. No excuses.</em></p>

                            <h2>8. Cookies</h2>
                            <p>Our website uses cookies — small text files stored on your device — to help us understand how you use our website.</p>
                            <ul>
                                <li><strong>Essential Cookies:</strong> Required for our website to work (session management, security). You cannot disable these.</li>
                                <li><strong>Analytics Cookies:</strong> Help us understand website usage (Google Analytics). You can disable these in your browser settings.</li>
                            </ul>
                            <p>We do not currently use any advertising or marketing cookies. When we begin using additional cookies, this policy and our cookie consent banner will be updated before implementation.</p>

                            <h2>9. Children's Privacy</h2>
                            <p>Our website and future products are intended for persons aged 18 and above. We do not knowingly collect personal data from anyone under 18 years of age. If you are a parent or guardian and believe your child has provided personal data to us, please contact us immediately.</p>

                            <h2>10. Changes to This Policy</h2>
                            <p>We may update this Privacy Policy as our business grows and legal requirements evolve. Minor changes will be updated on this page. For significant changes (new data collection, sharing partners), we will send an email notification to all subscribers at least 15 days before changes take effect.</p>

                            <h2>11. Contact Us — Data Protection Officer</h2>
                            <p>For any privacy-related questions, concerns, or data rights requests:</p>
                            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 mb-8">
                                <p className="m-0 mb-1"><strong>Data Protection Officer:</strong></p>
                                <p className="m-0 text-primary font-bold">Privacy Team, Oxygen Bioinnovations</p>
                                <p className="m-0 mt-4 mb-1"><strong>Email:</strong> <a href="mailto:info@oxygenbioinnovations.com">info@oxygenbioinnovations.com</a></p>
                                <p className="m-0 mt-4"><strong>Postal Address:</strong></p>
                                <p className="m-0 text-slate-600 dark:text-slate-400">
                                    Technology Business Incubator (TBI)<br />
                                    Adhiyamaan College of Engineering<br />
                                    Hosur, Tamil Nadu, India
                                </p>
                            </div>

                            <h2>12. Legal Framework</h2>
                            <p>This Privacy Policy is governed by and compliant with the Information Technology Act 2000, DPDP Act 2023, and Food Safety and Standards Act 2006. Disputes arising from this policy shall be subject to the exclusive jurisdiction of courts in Hosur/Tamil Nadu, India.</p>

                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default Privacy;
