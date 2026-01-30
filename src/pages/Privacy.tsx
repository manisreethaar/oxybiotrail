
import { Layout } from "@/components/layout/Layout";

const Privacy = () => {
    return (
        <Layout>
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-4">
                            <span>🔒</span> Your Data & Trust
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                            Privacy <span className="gradient-text">Policy</span>
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Transparency is at the core of our science. Here is how we handle your data.
                        </p>
                    </div>

                    <div className="glass-card p-8 md:p-12 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-display font-bold text-foreground">1. Information We Collect</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We believe in collecting only what is necessary to improve your experience and our products.
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                                <li><strong>Personal Identity:</strong> Name, email address, and phone number when you place an order or contact us.</li>
                                <li><strong>Professional Role:</strong> Information you voluntarily provide (e.g., "Investor", "Researcher") to help us categorize your needs.</li>
                                <li><strong>Usage Data:</strong> Anonymous analytics on how you navigate our site to help us optimize performance.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-display font-bold text-foreground">2. How We Use Your Data</h2>
                            <p className="text-slate-600 leading-relaxed">
                                Your data fuels efficiency, not ads.
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                                <li><strong>processing Orders:</strong> To deliver your biocosmetics and functional foods.</li>
                                <li><strong>Communication:</strong> To respond to your inquiries or send you the "Bio-Revolution" newsletter (only if you opt-in).</li>
                                <li><strong>Research:</strong> Aggregated data may be used to identify market trends for our sustainable innovation pipeline.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-display font-bold text-foreground">3. Data Security & Sharing</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We use industry-standard encryption to protect your information. We <strong>never sell</strong> your personal data.
                                We only share necessary details with trusted partners (e.g., payment processors, shipping logistics) to fulfill your service.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-display font-bold text-foreground">4. Your Rights</h2>
                            <p className="text-slate-600 leading-relaxed">
                                You have full control. You can request to access, update, or delete your personal data at any time by contacting us at <a href="mailto:info@oxygenbio.com" className="text-primary hover:underline">info@oxygenbio.com</a>.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-slate-200">
                            <p className="text-sm text-muted-foreground">
                                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Privacy;
