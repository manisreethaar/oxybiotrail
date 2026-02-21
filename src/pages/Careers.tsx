
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { GrantBadge } from "@/components/GrantBadge";
import { Briefcase, GraduationCap, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Careers = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        college: "",
        degree: "",
        year: "",
        interest: "",
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (value: string) => {
        setFormData(prev => ({ ...prev, interest: value }));
    };



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const subject = `Internship Application - ${formData.name} (${formData.degree})`;
        const body = `Name: ${formData.name}\nCollege: ${formData.college}\nDegree: ${formData.degree}\nYear of Passing: ${formData.year}\nArea of Interest: ${formData.interest}\n\nMessage/Cover Letter:\n${formData.message}`;

        window.location.href = `mailto:careers@oxygenbioinnovations.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        toast({
            title: "Opening Email Client...",
            description: "Please complete your application in your email app.",
        });
        setFormData({ name: "", college: "", degree: "", year: "", interest: "", message: "" });
    };

    return (
        <Layout>
            <div className="pt-24 pb-16">
                {/* Header */}
                <div className="container mx-auto px-4 text-center mb-16">
                    <GrantBadge label="Join Our Mission" className="mb-4 mx-auto" />
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[1.05] tracking-tighter">
                        Build the Future of <span className="gradient-text">Bio-Innovation</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                        We are looking for passionate researchers and students to join our team at TBI, Adhiyamaan College of Engineering.
                    </p>
                </div>

                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mb-16">

                    {/* Job Openings */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Briefcase className="text-primary h-6 w-6" />
                            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight">Current Openings</h2>
                        </div>

                        <div className="glass-card p-6 md:p-8 rounded-xl border-l-4 border-primary/50 relative group">
                            <h3 className="text-xl font-bold mb-2">Junior Research Associate / Research Associate (Bio/Food Technology)</h3>
                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
                                <span className="flex items-center gap-1"><Briefcase size={14} /> Full Time</span>
                                <span>•</span>
                                <span>0–1 Year Exp</span>
                                <span>•</span>
                                <span>Hosur, Tamil Nadu</span>
                            </div>

                            <div className="space-y-4">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    We are building a next-generation bio-innovation platform at the intersection of probiotic science, functional nutrition, and bio-based cosmetic technology.
                                </p>

                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="details" className="border-slate-200 dark:border-slate-800">
                                        <AccordionTrigger className="text-sm font-bold text-primary hover:no-underline">
                                            View Full Description & Requirements
                                        </AccordionTrigger>
                                        <AccordionContent className="space-y-6 pt-4 text-sm text-muted-foreground">
                                            <p className="leading-relaxed">
                                                We are seeking ambitious and research-driven individuals who aspire to build—not just join—a company. This opportunity is ideal for candidates who are passionate about deep-tech innovation and are prepared to grow as the organization scales from laboratory research to full-scale commercialization.
                                            </p>
                                            <div className="p-3 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-lg">
                                                <p className="text-sm text-amber-800 dark:text-amber-300 font-medium">
                                                    This is not a routine laboratory role. It is a high-ownership position within a performance-driven startup ecosystem, where scientific rigor meets entrepreneurial execution.
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="font-bold text-foreground mb-2">Role Overview</h4>
                                                <p className="leading-relaxed">
                                                    As a Junior Research Associate / Research Associate, you will contribute to the development, validation, and scale-up of advanced probiotic formulations, functional beverages, nutraceutical systems, and bio-fermented cosmetic products. You will work across R&D, regulatory alignment, pilot production, and commercialization strategy.
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="font-bold text-foreground mb-2">Key Responsibilities</h4>
                                                <ul className="space-y-2 list-disc pl-4">
                                                    <li>Design and develop innovative probiotic and functional food formulations grounded in fermentation science.</li>
                                                    <li>Develop and optimize bio-fermented cosmetic and skincare systems with stability and efficacy focus.</li>
                                                    <li>Execute laboratory-scale fermentation studies, formulation optimization, and analytical validation.</li>
                                                    <li>Conduct structured shelf-life, stability, and sensory evaluation studies following scientific protocols.</li>
                                                    <li>Prepare and maintain SOPs, batch manufacturing records, and regulatory documentation (FSSAI/CDSCO aligned).</li>
                                                    <li>Support pilot-scale trials, technology transfer, and scale-up processes.</li>
                                                    <li>Contribute to IP documentation, technical dossiers, and innovation pipeline development.</li>
                                                    <li>Actively participate in research problem-solving, process refinement, and continuous improvement initiatives.</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="font-bold text-foreground mb-2">Who We Are Looking For</h4>
                                                <ul className="space-y-2 list-disc pl-4">
                                                    <li>B.Tech / B.Sc. / M.Sc. in Food Technology, Biotechnology, Cosmetic Science, or a related discipline.</li>
                                                    <li>Strong foundation in microbial fermentation, food process engineering, or emulsion chemistry.</li>
                                                    <li>Analytical thinker with strong documentation discipline and scientific integrity.</li>
                                                    <li>Entrepreneurial mindset with willingness to work in a fast-paced, evolving startup environment.</li>
                                                    <li>Self-driven, adaptable, and motivated to take ownership beyond defined job boundaries.</li>
                                                    <li>Candidates who aspire to build long-term leadership roles as the company grows.</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="font-bold text-foreground mb-2">What We Offer</h4>
                                                <ul className="space-y-2 list-disc pl-4">
                                                    <li><strong>Deep-Tech Innovation Exposure:</strong> Work on high-impact R&D projects with real commercialization pathways.</li>
                                                    <li><strong>Accelerated Career Growth:</strong> Performance-based responsibility expansion with leadership opportunities as the organization scales.</li>
                                                    <li><strong>End-to-End Product Development Experience:</strong> From lab-scale concept to regulatory approval and market launch.</li>
                                                    <li><strong>Innovation & IP Participation:</strong> Exposure to patent drafting, technology validation, and research-driven commercialization.</li>
                                                    <li><strong>Founder-Level Mentorship:</strong> Direct collaboration with leadership in a high-visibility growth environment.</li>
                                                    <li><strong>Performance-Linked Incentives:</strong> Competitive compensation aligned with capability, contribution, and company milestones.</li>
                                                    <li><strong>Opportunity to Build, Not Just Execute:</strong> Be part of the foundational team shaping a scalable bio-innovation enterprise.</li>
                                                </ul>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                            </div>
                        </div>
                    </div>

                    {/* Internship Form */}
                    <div className="glass-card p-8 rounded-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <GraduationCap className="text-primary h-6 w-6" />
                            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight">Student Internship Portal</h2>
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground mb-6 font-light">
                            Open to Final Year B.Tech / B.Sc Students. Work on live R&D projects.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Full Name</label>
                                    <Input required name="name" placeholder="John Doe" onChange={handleInputChange} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Year of Passing</label>
                                    <Input required name="year" placeholder="2026" onChange={handleInputChange} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">College / University</label>
                                <Input required name="college" placeholder="Adhiyamaan College of Engineering" onChange={handleInputChange} />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Degree & Branch</label>
                                <Input required name="degree" placeholder="B.Tech Biotechnology" onChange={handleInputChange} />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Area of Interest</label>
                                <Select onValueChange={handleSelectChange} required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Area" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Research (Fermentation)">Research (Fermentation)</SelectItem>
                                        <SelectItem value="Product Formulation">Product Formulation</SelectItem>
                                        <SelectItem value="Marketing & Design">Marketing & Design</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message / Cover Letter</label>
                                <Textarea
                                    required
                                    name="message"
                                    placeholder="Why do you want to intern with us?"
                                    className="min-h-[100px]"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </form>
                    </div>
                </div>

                {/* Common Call to Action Section */}
                <div className="container mx-auto px-4 max-w-4xl mt-12">
                    <div className="glass-card p-8 md:p-12 rounded-3xl text-center bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 border-primary/20">
                        <h2 className="text-3xl font-display font-bold mb-4">Ready to Build With Us?</h2>
                        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                            Whether you are applying for the Junior Research position or an internship, we want to hear from you. Send us your CV or application details via email.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="w-full sm:w-auto gap-2 shadow-lg hover:shadow-xl transition-all" asChild>
                                <a href="mailto:careers@oxygenbioinnovations.com?subject=Job%20Application%20-%20Junior%20Research%20Associate">
                                    Apply for Job Role
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-primary/20 hover:bg-primary/5" onClick={handleSubmit}>
                                <Send size={16} /> Submit Internship Portal Form
                            </Button>
                        </div>

                        <p className="text-sm text-muted-foreground mt-6">
                            Direct email: <a href="mailto:careers@oxygenbioinnovations.com" className="text-primary font-bold hover:underline">careers@oxygenbioinnovations.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Careers;
