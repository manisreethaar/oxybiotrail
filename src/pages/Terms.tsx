
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const Terms = () => {
    const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <Layout>
            <section className="py-20 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10" />

                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600 mb-6">
                            <span>⚖️</span> Legal Document
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900">
                            Terms of <span className="text-primary">Service</span>
                        </h1>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                            Governing the use of Oxygen BioInnovations' digital platform, research services, and commercial products.
                        </p>
                        <p className="text-sm font-semibold text-slate-400 mt-4 uppercase tracking-wider">
                            Last Updated: {lastUpdated}
                        </p>
                    </div>

                    <div className="glass-card p-8 md:p-16 space-y-12 text-slate-700 leading-relaxed border-t-4 border-t-primary">

                        {/* Preamble */}
                        <div className="prose prose-slate max-w-none">
                            <p>
                                These Terms of Service (“Terms”) govern access to and use of the website and services of <strong>Oxygen Bioinnovations Private Limited</strong>,
                                a company incorporated under the laws of India and having its registered office in Tamil Nadu, India (“Company”, “we”, “us”, or “our”).
                            </p>
                            <p>
                                By accessing, browsing, or using this website or any related services (collectively, the “Services”), you acknowledge that you have read,
                                understood, and agreed to be bound by these Terms. If you do not agree, you must discontinue use of the Services.
                            </p>
                        </div>

                        <hr className="border-slate-100" />

                        {/* 1. Scope */}
                        <section id="section-1">
                            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">1. Scope & Applicability</h2>
                            <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                                <li>These Terms apply to all visitors, users, customers, partners, collaborators, and entities accessing the Services from India or any other jurisdiction.</li>
                                <li>
                                    The Services may include:
                                    <ul className="list-circle pl-6 mt-2 space-y-1 text-slate-600">
                                        <li>Informational and educational content</li>
                                        <li>Business-to-business (B2B) consulting and advisory services</li>
                                        <li>Research, development, and innovation showcases</li>
                                        <li>Pre-commercial, pilot, or future product and platform offerings</li>
                                        <li>E-commerce sales of functional foods and biocosmetics</li>
                                    </ul>
                                </li>
                                <li>Certain Services may be governed by separate written agreements (such as service agreements, NDAs, licensing agreements, or subscription terms). In case of conflict, such written agreements shall prevail.</li>
                            </ul>
                        </section>

                        {/* 2. Eligibility */}
                        <section id="section-2">
                            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">2. Eligibility & User Representations</h2>
                            <div className="space-y-4">
                                <p><strong>2.1. You represent that:</strong></p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>You are at least 18 years of age.</li>
                                    <li>You are legally competent to enter into binding contracts.</li>
                                    <li>If accessing the Services on behalf of an entity, you are duly authorized to bind that entity.</li>
                                </ul>
                                <p><strong>2.2. You agree that you will:</strong></p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Use the Services only for lawful purposes.</li>
                                    <li>Comply with all applicable Indian and international laws, including technology, intellectual property, data protection, biosafety, export control, and sector-specific regulations.</li>
                                </ul>
                            </div>
                        </section>

                        {/* 3. Acceptable Use */}
                        <section id="section-3">
                            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">3. Acceptable Use & Prohibited Activities</h2>
                            <p className="mb-4">You agree not to, directly or indirectly:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Use the Services for illegal, unethical, or fraudulent purposes.</li>
                                <li>Violate applicable laws, including biotechnology, pharmaceutical, environmental, or data protection regulations.</li>
                                <li>Upload or transmit malware, viruses, or harmful code.</li>
                                <li>Attempt unauthorized access to systems, servers, or data.</li>
                                <li>Misrepresent affiliation with the Company or misuse its brand.</li>
                                <li>Reverse engineer, copy, or commercially exploit proprietary content without authorization.</li>
                            </ul>
                            <p className="text-sm italic bg-slate-50 p-4 rounded-lg border border-slate-100">The Company reserves the right to suspend or terminate access for violations, without prejudice to other legal remedies.</p>
                        </section>

                        {/* 4. Bio Disclaimer - CRITICAL */}
                        <section id="section-4" className="bg-amber-50/50 p-6 rounded-xl border border-amber-100">
                            <h2 className="text-2xl font-display font-bold text-amber-900 mb-4 flex items-center gap-2">
                                <span className="text-amber-600">⚠️</span> 4. Nature of Content & Biotechnology Disclaimer
                            </h2>
                            <ul className="space-y-3 text-amber-900/80">
                                <li><strong>4.1.</strong> All content provided through the Services is for general informational, research, educational, and business purposes only.</li>
                                <li><strong>4.2.</strong> The Services do not:
                                    <ul className="list-disc pl-6 mt-1">
                                        <li>Constitute medical, clinical, diagnostic, therapeutic, or regulatory advice.</li>
                                        <li>Replace professional judgment or statutory approvals.</li>
                                        <li>Authorize clinical use, patient care, or commercial deployment unless expressly stated in writing.</li>
                                    </ul>
                                </li>
                                <li><strong>4.3.</strong> Any reference to research methods, technologies, processes, or innovations may relate to experimental or developmental work and should not be construed as validated, approved, or commercially deployable.</li>
                                <li><strong>4.4.</strong> Users are solely responsible for obtaining all required approvals, licenses, ethics clearances, and regulatory permissions before engaging in regulated activities.</li>
                            </ul>
                        </section>

                        {/* 5. IT Act */}
                        <section id="section-5">
                            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">5. Indian IT Act & Intermediary Compliance</h2>
                            <p className="mb-4">The Company operates in accordance with the Information Technology Act, 2000 and applicable rules, including the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, where relevant.</p>
                            <p>Users shall not upload, publish, or transmit content that is:</p>
                            <ul className="list-disc pl-6 space-y-1 mb-4">
                                <li>Unlawful, defamatory, obscene, misleading, or harmful.</li>
                                <li>In violation of intellectual property or confidentiality obligations.</li>
                                <li>Prohibited under Indian law or applicable foreign law.</li>
                            </ul>
                            <p>The Company reserves the right to remove or restrict access to content and to cooperate with lawful requests from competent authorities.</p>
                        </section>

                        {/* 6. Intellectual Property */}
                        <section id="section-6">
                            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">6. Intellectual Property Rights</h2>
                            <p className="mb-4">
                                All content, materials, software, data, designs, trademarks, logos, methodologies, documentation, and proprietary information made available through the Services (“Company IP”) are owned by or licensed to
                                <strong> Oxygen Bioinnovations Private Limited</strong> and are protected under applicable intellectual property laws.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Subject to these Terms, the Company grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services solely for lawful and intended purposes.</li>
                                <li>You shall not copy, modify, distribute, sell, sublicense, reverse engineer, or otherwise exploit any Company IP without prior written consent.</li>
                                <li>Any feedback, suggestions, improvements, or ideas provided by you in connection with the Services shall be deemed non-confidential and shall become the exclusive property of the Company.</li>
                            </ul>
                        </section>

                        {/* 7. Confidentiality */}
                        <section id="section-7">
                            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">7. Confidentiality & User Submissions</h2>
                            <p className="mb-2">Any non-public technical, scientific, commercial, or business information disclosed by the Company shall be treated as confidential unless expressly stated otherwise. You agree not to disclose, misuse, or exploit confidential information without prior written authorization.</p>
                            <p className="mb-2">If you submit content, data, documents, or materials to the Company (including inquiries, proposals, or research inputs), you represent that:</p>
                            <ul className="list-disc pl-6 space-y-1 mb-4">
                                <li>You have lawful rights to share such information; and</li>
                                <li>Such submission does not violate third-party rights or confidentiality obligations.</li>
                            </ul>
                            <p>Submission of materials does not create any obligation on the Company to enter into a business relationship unless agreed in writing.</p>
                        </section>

                        {/* ADDED E-COMMERCE SECTION */}
                        <section id="section-ecommerce" className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                            <h2 className="text-2xl font-display font-bold text-primary mb-4">
                                Terms of Sale (For Products)
                            </h2>
                            <div className="space-y-4 text-slate-700">
                                <p><strong>Use of Products:</strong> Our products, including functional foods and cosmetics, are intended for personal use or research use as specified. They are not intended for resale unless authorized.</p>
                                <p><strong>Pricing & Availability:</strong> Prices and availability of products are subject to change without notice. We reserve the right to limit quantities or cancel orders at our discretion.</p>
                                <p><strong>Returns & Refunds:</strong> Due to the perishable and hygienic nature of our products (biocosmetics and foods), we generally do not accept returns on opened items. Please review our detailed Return Policy applicable at checkout for specific conditions.</p>
                            </div>
                        </section>

                        {/* 8-12 Standard Legal Clauses */}
                        <section className="space-y-8">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 mb-2">8. Third-Party Links & External Services</h2>
                                <p>The Services may contain links to third-party websites. The Company does not control, endorse, or assume responsibility for them. Your interaction is at your own risk.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-slate-900 mb-2">9. Warranties & Disclaimers</h2>
                                <p>The Services are provided on an “as-is” and “as-available” basis. To the fullest extent permitted by law, the Company disclaims all warranties, including merchantability, fitness for a particular purpose, and non-infringement.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-slate-900 mb-2">10. Limitation of Liability</h2>
                                <p>The Company shall not be liable for indirect, incidental, or consequential damages. The Company’s total aggregate liability shall not exceed the amount paid by you to the Company, if any, during the twelve (12) months preceding the claim.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-slate-900 mb-2">11. Indemnification</h2>
                                <p>You agree to indemnify Oxygen Bioinnovations Private Limited from any claims arising out of your use of the Services, violation of these Terms, or any breach of applicable laws.</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-slate-900 mb-2">12. Suspension & Termination</h2>
                                <p>The Company reserves the right to suspend or terminate access for breach of Terms, legal/regulatory risks, or as required by law.</p>
                            </div>
                        </section>

                        {/* 13. Governing Law */}
                        <section id="section-13">
                            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">13. Governing Law & Dispute Resolution</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>These Terms shall be governed by the laws of <strong>India</strong>.</li>
                                <li>Any dispute shall be resolved by arbitration in accordance with the Arbitration and Conciliation Act, 1996.</li>
                                <li>The arbitration shall be conducted by a sole arbitrator, seated in <strong>Chennai, Tamil Nadu, India</strong>, in English.</li>
                                <li>The Company may seek interim relief from courts to protect IP or confidential information.</li>
                            </ul>
                        </section>

                        {/* 14. Privacy */}
                        <section id="section-14">
                            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">14. Privacy & Data Protection</h2>
                            <p>Use of the Services is subject to the Company’s <Link to="/privacy" className="text-primary underline">Privacy Policy</Link>. We process personal data in accordance with the Information Technology Act, 2000.</p>
                        </section>

                        {/* 15. Contact */}
                        <section id="section-15" className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg">
                            <h2 className="text-2xl font-display font-bold mb-6">15. Contact Information</h2>
                            <p className="mb-4 text-slate-300">For any questions or concerns regarding these Terms, please contact:</p>
                            <div className="space-y-2">
                                <p className="font-bold text-lg">Oxygen Bioinnovations Private Limited</p>
                                <p className="text-slate-300">Registered Office: Tamil Nadu, India</p>
                                <p className="text-slate-300">Email: <a href="mailto:info@oxygenbio.com" className="text-primary hover:text-white transition-colors">info@oxygenbio.com</a></p>
                            </div>
                        </section>

                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Terms;
