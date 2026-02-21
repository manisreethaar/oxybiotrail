import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

const Terms = () => {
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
                                Terms and Conditions
                            </h1>
                            <p className="text-sm text-slate-500">
                                Oxygen Bioinnovations
                            </p>
                            <div className="flex items-center justify-center gap-4 mt-6 text-xs font-bold uppercase tracking-widest text-slate-400">
                                <span>Last updated: February 2026</span>
                            </div>
                        </div>
                        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h3:text-lg md:prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-relaxed prose-p:font-light prose-p:mb-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8 prose-li:leading-relaxed prose-li:font-light prose-li:my-2 prose-strong:font-bold prose-strong:text-slate-900 dark:prose-strong:text-white">

                            <h2>1. AGREEMENT TO TERMS</h2>
                            <p>
                                By accessing oxygenbioinnovations.com ('our website'), you agree to be bound by these Terms and Conditions.
                            </p>
                            <p>
                                If you disagree with any part of these terms, please do not use our websites.
                            </p>
                            <p>These terms apply to:</p>
                            <ul>
                                <li>All visitors to our websites</li>
                                <li>Waitlist subscribers</li>
                                <li>Newsletter subscribers</li>
                                <li>Future customers (post-launch)</li>
                            </ul>

                            <h2>2. ABOUT US</h2>
                            <p>
                                <strong>Oxygen Bioinnovations</strong><br />
                                Registered Office: [Address]<br />
                                Email: info@oxygenbioinnovations.com<br />
                                FSSAI License: [Number when issued]
                            </p>
                            <p>We develop and market precision nutrition products under the RIZE brand.</p>

                            <h2>3. PRE-LAUNCH STATUS</h2>
                            <div className="p-5 rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-900/10 dark:border-amber-800/50 my-8">
                                <h3 className="mt-0 text-amber-900 dark:text-amber-400 font-bold">IMPORTANT NOTICE:</h3>
                                <p className="text-amber-800 dark:text-amber-300 font-medium">
                                    As of February 2026, Oxygen Bioinnovations is a pre-launch company.
                                </p>
                                <p className="text-amber-800 dark:text-amber-300 font-medium">This means:</p>
                                <ul className="text-amber-800 dark:text-amber-300">
                                    <li>Products displayed are in development</li>
                                    <li>We do not yet accept purchase orders</li>
                                    <li>Specifications may change before launch</li>
                                    <li>Prices shown are indicative targets only</li>
                                    <li>Availability dates are estimates</li>
                                </ul>
                                <p className="text-amber-800 dark:text-amber-300 mb-0 font-medium">
                                    We will update this notice when products become available for purchase.
                                </p>
                            </div>

                            <h2>4. INTELLECTUAL PROPERTY</h2>

                            <h3>4.1 OUR INTELLECTUAL PROPERTY</h3>
                            <p>All content on our websites is owned by or licensed to Oxygen Bioinnovations, including:</p>
                            <ul>
                                <li>'Oxygen Bioinnovations' company name</li>
                                <li>'RIZE' brand name and all its sub-brands</li>
                                <li>Logo, visual identity, design system</li>
                                <li>All website text and copy</li>
                                <li>Blog articles and research content</li>
                                <li>Product formulation descriptions</li>
                                <li>All images, illustrations, graphics</li>
                                <li>Data, research and infographics</li>
                            </ul>

                            <h3>4.2 PERMITTED USE</h3>
                            <p>You may:</p>
                            <ul>
                                <li>View and read our website content</li>
                                <li>Share links to our articles (with credit)</li>
                                <li>Quote up to 100 words with clear attribution and link to source</li>
                                <li>Share our social media posts using platform sharing features</li>
                            </ul>
                            <p>You may NOT:</p>
                            <ul>
                                <li>Copy, reproduce, or republish our content without written permission</li>
                                <li>Use our brand names or logos without written permission</li>
                                <li>Scrape or extract data from our website</li>
                                <li>Use our content for commercial purposes without written permission</li>
                                <li>Remove copyright or attribution notices</li>
                            </ul>

                            <h3>4.3 PERMISSION REQUESTS</h3>
                            <p>
                                <strong>Email:</strong> info@oxygenbioinnovations.com<br />
                                <strong>Include:</strong> Content requested, intended use, your organization and contact details
                            </p>

                            <h2>5. HEALTH AND MEDICAL DISCLAIMER</h2>

                            <h3>5.1 NOT MEDICAL ADVICE</h3>
                            <p>The content on our websites is provided for informational and educational purposes only.</p>
                            <p>It is NOT:</p>
                            <ul>
                                <li>Medical advice</li>
                                <li>A substitute for professional medical consultation</li>
                                <li>A diagnosis of any condition</li>
                                <li>A treatment recommendation</li>
                            </ul>

                            <h3>5.2 PRODUCT STATUS</h3>
                            <p>RIZE products are food supplements regulated as food under the Food Safety and Standards Act 2006.</p>
                            <p>They are NOT:</p>
                            <ul>
                                <li>Medicines or drugs</li>
                                <li>Approved for treating any disease</li>
                                <li>Evaluated by any authority for therapeutic claims</li>
                            </ul>

                            <h3>5.3 INDIVIDUAL VARIATION</h3>
                            <p>Results from nutritional supplements vary between individuals based on:</p>
                            <ul>
                                <li>Current nutritional status</li>
                                <li>Diet and lifestyle factors</li>
                                <li>Genetics and health status</li>
                                <li>Consistency of use</li>
                            </ul>

                            <h3>5.4 CONSULT YOUR DOCTOR</h3>
                            <p>Please consult a qualified healthcare professional before using RIZE if you:</p>
                            <ul>
                                <li>Are pregnant or breastfeeding</li>
                                <li>Are under 18 years of age</li>
                                <li>Have any diagnosed medical condition</li>
                                <li>Take prescription medications</li>
                                <li>Are scheduled for surgery</li>
                                <li>Are receiving any medical treatment</li>
                            </ul>

                            <h2>6. USER CONDUCT</h2>
                            <p>By using our websites, you agree NOT to:</p>
                            <ul>
                                <li>Provide false or misleading information</li>
                                <li>Impersonate Oxygen Bioinnovations or any team member</li>
                                <li>Attempt to gain unauthorized access to any part of our systems</li>
                                <li>Upload viruses or malicious code</li>
                                <li>Use our contact forms for spam</li>
                                <li>Engage in any unlawful activity through our websites</li>
                                <li>Violate any applicable laws or regulations</li>
                            </ul>

                            <h2>7. THIRD PARTY LINKS</h2>
                            <p>Our websites may contain links to third-party websites (research papers, supplier websites, news articles).</p>
                            <p>We:</p>
                            <ul>
                                <li>Do not control third-party content</li>
                                <li>Are not responsible for their content, policies, or practices</li>
                                <li>Provide links for reference only</li>
                            </ul>
                            <p>We recommend reviewing the privacy policy of any third-party site you visit.</p>

                            <h2>8. LIMITATION OF LIABILITY</h2>
                            <p>To the maximum extent permitted by law, Oxygen Bioinnovations shall not be liable for:</p>
                            <ul>
                                <li>Any indirect or consequential loss</li>
                                <li>Loss of data or information</li>
                                <li>Decisions made based on our content</li>
                                <li>Technical issues or website downtime</li>
                                <li>Third-party website content</li>
                                <li>Any loss not directly caused by our proven negligence</li>
                            </ul>
                            <p>Our total liability for any claim shall not exceed the amount you paid to us in the 3 months before the claim.</p>

                            <h2>9. GOVERNING LAW AND DISPUTES</h2>
                            <h3>9.1 GOVERNING LAW</h3>
                            <p>These Terms are governed by and construed in accordance with the laws of India, without regard to conflict of law principles.</p>

                            <h3>9.2 DISPUTE RESOLUTION</h3>
                            <ul>
                                <li><strong>Step 1:</strong> Contact us at <a href="mailto:info@oxygenbioinnovations.com">info@oxygenbioinnovations.com</a>. We attempt to resolve all disputes amicably within 30 days.</li>
                                <li><strong>Step 2:</strong> If unresolved: Disputes shall be subject to the exclusive jurisdiction of courts in Hosur, India.</li>
                            </ul>

                            <h2>10. CHANGES TO THESE TERMS</h2>
                            <p>We may update these Terms as our business evolves.</p>
                            <p>We will:</p>
                            <ul>
                                <li>Post updated Terms on our website</li>
                                <li>Update the 'Last updated' date</li>
                                <li>Notify you of significant changes via email (if subscribed)</li>
                            </ul>
                            <p>Continued use of our website after changes constitutes acceptance.</p>

                            <h2>11. CONTACT</h2>
                            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 mb-8">
                                <p className="m-0 text-primary font-bold">Oxygen Bioinnovations</p>
                                <p className="m-0 mt-4 mb-1"><strong>Email:</strong> <a href="mailto:info@oxygenbioinnovations.com">info@oxygenbioinnovations.com</a></p>
                                <p className="m-0 mt-4"><strong>Postal Address:</strong></p>
                                <p className="m-0 text-slate-600 dark:text-slate-400">
                                    Technology Business Incubator (TBI)<br />
                                    Adhiyamaan College of Engineering<br />
                                    Dr. MGR Nagar, Hosur 635130<br />
                                    Tamil Nadu, India
                                </p>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default Terms;
