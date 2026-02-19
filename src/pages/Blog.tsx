import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GrantBadge } from '@/components/GrantBadge';

const BLOG_POSTS = [
    {
        id: 1,
        title: "The Hidden Cost of Food Waste in India",
        excerpt: "Why throwing away a banana peel is more expensive than you think. Exploring the economic and environmental toll of agri-waste.",
        date: "Feb 18, 2026",
        author: "Research Team",
        category: "Sustainability"
    },
    {
        id: 2,
        title: "Microbiome 101: Your Gut is Your Second Brain",
        excerpt: "Understanding the gut-brain axis and why psychobiotics are the future of mental wellness.",
        date: "Feb 10, 2026",
        author: "Dr. A. Sharma",
        category: "Science"
    },
    {
        id: 3,
        title: "Why 'Natural' Skincare Often Fails",
        excerpt: "Without bioavailability, natural ingredients can't penetrate the skin. Enter: Fermentation.",
        date: "Jan 25, 2026",
        author: "Formulation Lab",
        category: "Cosmetics"
    }
];

const Blog = () => {
    return (
        <Layout>
            <div className="pt-32 pb-20 container mx-auto px-4">
                <div className="text-center mb-16">
                    <GrantBadge label="Knowledge Hub" className="mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Insights & <span className="gradient-text">Education</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Deep dives into sustainability, fermentation science, and the future of wellness.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {BLOG_POSTS.map((post, i) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group glass-card rounded-2xl overflow-hidden hover:shadow-lg transition-all border border-slate-100 dark:border-slate-800"
                        >
                            {/* Placeholder Image */}
                            <div className="h-48 bg-slate-100 dark:bg-slate-900 group-hover:scale-105 transition-transform duration-500 relative">
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">
                                    {post.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                    <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <Link to="#" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                                    Read Article <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Blog;
