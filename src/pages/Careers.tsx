
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GrantBadge } from "@/components/GrantBadge";
import { Briefcase, GraduationCap, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct Mailto Link
        const subject = `Internship Application - ${formData.name} (${formData.degree})`;
        const body = `Name: ${formData.name}%0D%0ACollege: ${formData.college}%0D%0ADegree: ${formData.degree} (${formData.year})%0D%0AArea of Interest: ${formData.interest}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

        window.location.href = `mailto:oxygenbioinnovations@gmail.com?subject=${subject}&body=${body}`;

        toast({
            title: "Opening Email Client",
            description: "Please attach your CV/Resume in the email draft.",
        });
    };

    return (
        <Layout>
            <div className="pt-24 pb-16">
                {/* Header */}
                <div className="container mx-auto px-4 text-center mb-16">
                    <GrantBadge label="Join Our Mission" className="mb-4 mx-auto" />
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
                        Build the Future of <span className="gradient-text">Bio-Innovation</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We are looking for passionate researchers and students to join our team at TBI, Adhiyamaan College of Engineering.
                    </p>
                </div>

                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 max-w-6xl">

                    {/* Job Openings */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Briefcase className="text-primary h-6 w-6" />
                            <h2 className="text-3xl font-display font-bold">Current Openings</h2>
                        </div>

                        <div className="glass-card p-8 rounded-xl border-l-4 border-primary/50 relative overflow-hidden group hover-lift">
                            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                2 Vacancies
                            </div>
                            <h3 className="text-xl font-display font-bold mb-2">Junior Researcher (Bio/Food Tech)</h3>
                            <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                                <span>Full Time</span>
                                <span>•</span>
                                <span>0-1 Years Exp</span>
                                <span>•</span>
                                <span>Hosur, TN</span>
                            </div>

                            <div className="space-y-4 mb-6">
                                <p className="text-sm">We are seeking a <strong>Junior Researcher</strong> to join our R&D team at TBI. You will work on developing novel probiotic foods and bio-cosmetic formulations.</p>

                                <h4 className="font-bold text-sm">Key Responsibilities:</h4>
                                <ul className="text-sm space-y-2 list-disc pl-4 text-muted-foreground">
                                    <li>Formulation of probiotic yogurts, drinks, and functional foods.</li>
                                    <li>Development of variants for bio-fermented skincare serums.</li>
                                    <li>Conducting shelf-life studies and sensory evaluation.</li>
                                    <li>Documentation for patent filing and FSSAI/CDSCO compliance.</li>
                                </ul>

                                <h4 className="font-bold text-sm">Requirements:</h4>
                                <ul className="text-sm space-y-2 list-disc pl-4 text-muted-foreground">
                                    <li>B.Tech / M.Sc in Food Technology, Biotechnology, or Cosmetic Science.</li>
                                    <li>Knowledge of bacterial fermentation and emulsion chemistry.</li>
                                    <li>Willingness to work in a startup environment.</li>
                                </ul>

                                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-100 dark:border-slate-700 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Compensation:</span>
                                        <span className="font-bold text-foreground">₹18,000 - ₹22,000 / month</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Probation Period:</span>
                                        <span className="font-bold text-foreground">6 Months - 1 Year</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-2">
                                        *Full-time confirmation subject to performance during probation.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg mb-4 text-center border border-slate-100 dark:border-slate-800">
                                <p className="text-sm text-muted-foreground mb-1">Send your CV/Resume to:</p>
                                <a href="mailto:oxygenbioinnovations@gmail.com" className="text-primary font-bold hover:underline">
                                    oxygenbioinnovations@gmail.com
                                </a>
                            </div>

                            <Button className="w-full" asChild>
                                <a href="mailto:oxygenbioinnovations@gmail.com?subject=Application for Junior Researcher&body=Dear Hiring Team,%0D%0A%0D%0AI am writing to apply for the Junior Researcher position. Please find my CV attached...">
                                    Apply Now
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Internship Form */}
                    <div className="glass-card p-8 rounded-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <GraduationCap className="text-primary h-6 w-6" />
                            <h2 className="text-3xl font-display font-bold">Student Internship Portal</h2>
                        </div>
                        <p className="text-sm text-muted-foreground mb-6">
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

                            <Button type="submit" className="w-full gap-2">
                                <Send size={16} />
                                Submit Application
                            </Button>
                            <p className="text-xs text-center text-muted-foreground mt-2">
                                * Clicking submit will open your email client to send the application.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Careers;
