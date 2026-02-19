import { Layout } from '@/components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock, FlaskConical, Rocket, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type Category = 'all' | 'science' | 'building';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: 'science' | 'building';
    readTime: string;
    featured?: boolean;
    week: string;
}

const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        title: "Why we built Oxygen: The Indian nutrition gap nobody is honestly addressing",
        excerpt:
            "The observation that started it all. The data behind India's nutrition crisis. Why existing health drinks fail. And what Oxygen will do differently. This is the story of why we exist.",
        date: "Feb 20, 2026",
        author: "Founder",
        category: "building",
        readTime: "6 min read",
        featured: true,
        week: "Week 1",
    },
    {
        id: 2,
        title: "What chelated minerals are — and why every major Indian health drink uses cheaper forms",
        excerpt:
            "Chelation isn't a marketing word. It's a chemistry process that determines whether your body absorbs 8% or 28% of the minerals you consume. The cost difference per serving? About ₹2.",
        date: "Feb 20, 2026",
        author: "Research Team",
        category: "science",
        readTime: "8 min read",
        week: "Week 1",
    },
    {
        id: 3,
        title: "Lion's Mane mushroom: What the research actually says (and what it doesn't)",
        excerpt:
            "Hericenones, erinacines, and nerve growth factor. The science is promising, but incomplete. Here's an honest look at what Lion's Mane can and cannot do — and why we still chose it.",
        date: "Feb 27, 2026",
        author: "Research Team",
        category: "science",
        readTime: "10 min read",
        week: "Week 2",
    },
    {
        id: 4,
        title: "We analyzed the ingredients in India's 10 most popular health drinks. Here is what we found.",
        excerpt:
            "Horlicks. Complan. Bournvita. Ensure. Protinex. Boost. We looked at their vitamin forms, actual doses, sugar content, and artificial ingredients. The results were... revealing.",
        date: "Feb 27, 2026",
        author: "Research Team",
        category: "science",
        readTime: "12 min read",
        week: "Week 2",
    },
    {
        id: 5,
        title: "Week 1 at TBI: What startup incubation actually looks like",
        excerpt:
            "No glamorous office. No Silicon Valley pitch deck. Just a lab bench, a formulation spreadsheet, and a lot of questions. Here's what the first week of building Oxygen actually involved.",
        date: "Mar 6, 2026",
        author: "Founder",
        category: "building",
        readTime: "4 min read",
        week: "Week 3",
    },
    {
        id: 6,
        title: "Ragi: Why India forgot about its most nutritious grain",
        excerpt:
            "Finger millet has more calcium than milk, more iron than spinach, and a glycemic index lower than rice. It fed generations of Indians. Then we abandoned it. The story of why — and the science of its revival.",
        date: "Mar 6, 2026",
        author: "Research Team",
        category: "science",
        readTime: "9 min read",
        week: "Week 3",
    },
    {
        id: 7,
        title: "The MTHFR gene: Why synthetic folic acid might not work for you",
        excerpt:
            "About 40% of Indians carry an MTHFR variant that impairs folic acid conversion. If you're one of them, your supplement might not be doing what you think. Here's what the science says.",
        date: "Mar 13, 2026",
        author: "Research Team",
        category: "science",
        readTime: "8 min read",
        week: "Week 4",
    },
    {
        id: 8,
        title: "Our clinical study design: Why we're testing before launching",
        excerpt:
            "135 participants. 8 weeks. Three arms. Most supplement brands never test their products on humans. We designed a clinical study before our first commercial batch. Here's why and how.",
        date: "Mar 13, 2026",
        author: "Founder",
        category: "building",
        readTime: "6 min read",
        week: "Week 4",
    },
];

const TABS: { label: string; value: Category; icon: React.ReactNode }[] = [
    { label: "All Articles", value: "all", icon: <BookOpen size={16} /> },
    { label: "Nutrition Science", value: "science", icon: <FlaskConical size={16} /> },
    { label: "Building Oxygen", value: "building", icon: <Rocket size={16} /> },
];

const Blog = () => {
    const [activeTab, setActiveTab] = useState<Category>("all");

    const featuredPost = BLOG_POSTS.find((p) => p.featured);
    const filteredPosts = BLOG_POSTS.filter(
        (p) => !p.featured && (activeTab === "all" || p.category === activeTab)
    );

    return (
        <Layout>
            <div className="pt-32 pb-20">
                {/* Header */}
                <div className="container-width px-4 text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-6">
                            <BookOpen size={12} /> Development Journal & Research
                        </span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-slate-900 dark:text-white">
                            The Oxygen <span className="text-primary">Blog</span>
                        </h1>
                        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Science deep-dives, ingredient breakdowns, and honest updates from the lab. Building India's first precision nutrition system — in public.
                        </p>
                    </motion.div>
                </div>

                {/* Featured Article Hero */}
                {featuredPost && (
                    <div className="container-width px-4 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="group relative grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Featured Image Placeholder */}
                            <div className="h-64 md:h-auto bg-gradient-to-br from-primary/10 via-amber-500/10 to-emerald-500/10 flex items-center justify-center relative overflow-hidden">
                                <div className="text-center space-y-3">
                                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                                        <Rocket size={40} className="text-primary" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Featured</span>
                                </div>
                                {/* Decorative circles */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 border border-primary/10 rounded-full" />
                                <div className="absolute -bottom-20 -left-10 w-60 h-60 border border-amber-500/10 rounded-full" />
                            </div>

                            {/* Featured Content */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                                        Building Oxygen
                                    </span>
                                    <span className="text-xs text-slate-400">{featuredPost.week}</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 text-xs text-slate-400">
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {featuredPost.date}</span>
                                        <span className="flex items-center gap-1"><User size={12} /> {featuredPost.author}</span>
                                        <span className="flex items-center gap-1"><Clock size={12} /> {featuredPost.readTime}</span>
                                    </div>
                                </div>
                                <Link to="#" className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-primary hover:gap-3 transition-all">
                                    Read Article <ArrowRight size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                )}

                {/* Category Tabs */}
                <div className="container-width px-4 mb-12">
                    <div className="flex items-center justify-center gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-full max-w-md mx-auto">
                        {TABS.map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setActiveTab(tab.value)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === tab.value
                                        ? "bg-white dark:bg-slate-700 text-primary shadow-sm"
                                        : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Article Grid */}
                <div className="container-width px-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                        >
                            {filteredPosts.map((post, i) => (
                                <ArticleCard key={post.id} post={post} index={i} />
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-slate-400">No articles in this category yet. Check back soon!</p>
                        </div>
                    )}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="container-width px-4 mt-24 text-center"
                >
                    <div className="p-12 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                        <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-slate-900 dark:text-white">
                            New article every week
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-lg mx-auto">
                            One science deep-dive. One building update. Join the waitlist and we'll send you the highlights.
                        </p>
                        <a
                            href="/#waitlist"
                            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                        >
                            Get updates <ArrowRight size={16} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </Layout>
    );
};

/* ─────────── Article Card ─────────── */
const ArticleCard = ({ post, index }: { post: BlogPost; index: number }) => {
    const categoryColor =
        post.category === "science"
            ? { bg: "bg-emerald-50 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-400", accent: "from-emerald-500/10 to-teal-500/10" }
            : { bg: "bg-amber-50 dark:bg-amber-900/20", text: "text-amber-700 dark:text-amber-400", accent: "from-amber-500/10 to-orange-500/10" };

    const categoryLabel = post.category === "science" ? "Nutrition Science" : "Building Oxygen";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
            {/* Card Image Placeholder */}
            <div className={`h-44 bg-gradient-to-br ${categoryColor.accent} flex items-center justify-center relative`}>
                <div className="w-12 h-12 bg-white/80 dark:bg-slate-800/80 rounded-xl flex items-center justify-center">
                    {post.category === "science" ? (
                        <FlaskConical size={24} className="text-emerald-600" />
                    ) : (
                        <Rocket size={24} className="text-amber-600" />
                    )}
                </div>
                <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 ${categoryColor.bg} ${categoryColor.text} text-[10px] font-bold uppercase tracking-widest rounded-full`}>
                        {categoryLabel}
                    </span>
                </div>
                <div className="absolute top-4 right-4">
                    <span className="px-2 py-0.5 bg-white/80 dark:bg-slate-800/80 text-[10px] font-medium text-slate-500 rounded-full">
                        {post.week}
                    </span>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={11} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                </div>

                <h3 className="text-lg font-display font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed line-clamp-3 flex-grow">
                    {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                        <User size={11} /> {post.author}
                    </span>
                    <Link to="#" className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:gap-2 transition-all">
                        Read <ArrowRight size={14} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Blog;
