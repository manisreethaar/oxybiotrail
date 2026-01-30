
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
    return (
        <Layout>
            <section className="py-24 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                            Join Our <span className="gradient-text">Mission</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We are building the future of sustainable biotechnology. If you are passionate about
                            science, innovation, and making a real-world impact, we want to hear from you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Culture Card */}
                        <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Sparkles size={120} />
                            </div>
                            <Briefcase size={40} className="text-primary mb-6" />
                            <h3 className="text-2xl font-bold font-display mb-4">Why Oxygen Bio?</h3>
                            <ul className="space-y-3 text-muted-foreground mb-8">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    Work on cutting-edge bioprocess innovations
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    Collaborative research environment
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    Impact-driven culture
                                </li>
                            </ul>
                        </div>

                        {/* Openings Card */}
                        <div className="glass-card p-8 rounded-2xl relative overflow-hidden flex flex-col justify-center text-center">
                            <div className="mb-6 mx-auto w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                                <Mail size={32} className="text-foreground" />
                            </div>
                            <h3 className="text-2xl font-bold font-display mb-2">No Openings Right Now</h3>
                            <p className="text-muted-foreground mb-6">
                                We are not actively hiring at the moment, but we are always looking for exceptional talent.
                            </p>
                            <Button variant="outline" asChild className="w-full">
                                <Link to="/contact">
                                    Send Your Resume
                                    <ArrowRight size={16} className="ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Careers;
