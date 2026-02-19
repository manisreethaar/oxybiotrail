
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GrantBadge } from "@/components/GrantBadge";
import { Handshake, Building2, Microscope, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Partner = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        org: "",
        type: "",
        email: "",
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (value: string) => {
        setFormData(prev => ({ ...prev, type: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = `Partnership Inquiry: ${formData.type} - ${formData.org}`;
        const body = `Name: ${formData.name}%0D%0AOrganization: ${formData.org}%0D%0AType: ${formData.type}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

        window.location.href = `mailto:oxygenbioinnovations@gmail.com?subject=${subject}&body=${body}`;

        toast({
            title: "Opening Email Client",
            description: "Please complete your submission in the email draft.",
        });
    };

    return (
        <Layout>
            <div className="pt-24 pb-16">
                <div className="container mx-auto px-4 text-center mb-16">
                    <GrantBadge label="Collaboration First" className="mb-4 mx-auto" />
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Partner for <span className="gradient-text">Impact</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Join forces with Oxygen BioInnovations and TBI-ACE to co-create the future of sustainable biotechnology.
                    </p>
                </div>

                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 max-w-6xl">

                    {/* Partnership Types */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold mb-6">Collaboration Models</h2>

                        <div className="glass-card p-6 rounded-xl flex gap-4 hover-lift">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                                <Microscope size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Joint Research (R&D)</h3>
                                <p className="text-sm text-muted-foreground">
                                    Collaborate on fermentation trials, strain isolation, or efficacy testing using our TBI labs.
                                </p>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-xl flex gap-4 hover-lift">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center shrink-0">
                                <Building2 size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Institutional Grants</h3>
                                <p className="text-sm text-muted-foreground">
                                    Partner with us for government (DBT/DST) or international sustainability grants.
                                </p>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-xl flex gap-4 hover-lift">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center shrink-0">
                                <Handshake size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Strategic Investment</h3>
                                <p className="text-sm text-muted-foreground">
                                    Support our seed stage growth as we move from prototype to pilot manufacturing.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Inquiry Form */}
                    <div className="glass-card p-8 rounded-xl border-t-4 border-t-primary">
                        <h2 className="text-2xl font-bold mb-6">Partnership Inquiry</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Name</label>
                                <Input required name="name" placeholder="Dr. Jane Smith" onChange={handleInputChange} />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Organization / University</label>
                                <Input required name="org" placeholder="Institute of Science" onChange={handleInputChange} />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Collaboration Type</label>
                                <Select onValueChange={handleSelectChange} required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Academic Research">Academic Research</SelectItem>
                                        <SelectItem value="Grant Consortium">Grant Consortium</SelectItem>
                                        <SelectItem value="Investment">Investment</SelectItem>
                                        <SelectItem value="Vendor/Supply">Vendor / Supply Chain</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <Input required name="email" type="email" placeholder="jane@institute.edu" onChange={handleInputChange} />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Proposal / Message</label>
                                <Textarea
                                    required
                                    name="message"
                                    placeholder="Briefly describe how we can work together..."
                                    className="min-h-[100px]"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <Button type="submit" className="w-full gap-2">
                                <Send size={16} />
                                Send Proposal
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Partner;
