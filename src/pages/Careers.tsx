
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 max-w-6xl">

                    {/* Job Openings */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Briefcase className="text-primary h-6 w-6" />
                            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight">Current Openings</h2>
                        </div>

                        <div className="glass-card p-8 rounded-xl border-l-4 border-primary/50 relative overflow-hidden group hover-lift">
                            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                2 Vacancies
                            </div>
                            <h3 className="text-xl font-bold mb-2">Junior Researcher (Bio/Food Tech)</h3>
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
                                    <li>Strong willingness to work in a dynamic Startup environment.</li>
                                </ul>

                                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-100 dark:border-slate-700 space-y-2">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-muted-foreground">Salary:</span>
                                        <div className="text-right">
                                            <span className="font-bold text-foreground block">₹18,000 - ₹25,000 / month</span>
                                            <span className="text-xs text-muted-foreground block font-normal">(Based on skill and knowledge)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg mb-4 text-center border border-slate-100 dark:border-slate-800">
                                <p className="text-sm text-muted-foreground mb-1">Send your CV/Resume to:</p>
                                <a href="mailto:careers@oxygenbioinnovations.com" className="text-primary font-bold hover:underline">
                                    careers@oxygenbioinnovations.com
                                </a>
                            </div>

                            <Button className="w-full" asChild>
                                <a href="mailto:careers@oxygenbioinnovations.com?subject=Application%20for%20Junior%20Researcher">
                                    Apply Now
                                </a>
                            </Button>
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

                            <Button type="submit" className="w-full gap-2">
                                <Send size={16} />
                                Submit Application (via Email)
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Careers;
