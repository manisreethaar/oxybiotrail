import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, FlaskConical, Rocket, Share2 } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';

// Note: In a real app, this would come from an API or separate data file.
// For this prototype, we are replicating the data from Blog.tsx
const BLOG_POSTS = [
    {
        id: 1,
        title: "Why we built Oxygen: The Indian nutrition gap nobody is honestly addressing",
        excerpt: "The observation that started it all. The data behind India's nutrition crisis. Why existing health drinks fail. And what Oxygen will do differently. This is the story of why we exist.",
        date: "Feb 20, 2026",
        author: "Founder",
        category: "building",
        readTime: "6 min read",
        featured: true,
        week: "Week 1",
        content: `
            <p>We didn't start Oxygen because we wanted to create a supplements company. We started it because we looked closely at the numbers, and the numbers were terrifying.</p>
            <p>According to the most recent National Family Health Survey (NFHS-5), over 70% of urban, affluent Indians—people who believe they are eating well—are severely deficient in at least one micronutrient. Vitamin D, B12, Iron, and Magnesium are the most common culprits. This isn't just a low-income issue; it's a structural failure in how modern food is processed, grown, and distributed.</p>
            <h3>The Illusion of Health Drinks</h3>
            <p>If you walk down the aisle of any Indian supermarket, you'll see a dozen "health drinks." We analyzed the top ten. What we found was a masterclass in marketing over science.</p>
            <ul>
                <li>Most use synthetic, poorly absorbed forms of vitamins (like folic acid instead of methylfolate).</li>
                <li>They use dosages so low that they are clinically insignificant—just enough to legally print the ingredient on the label.</li>
                <li>The first or second ingredient is almost always sugar or a disguised maltodextrin.</li>
            </ul>
            <h3>A First-Principles Approach</h3>
            <p>Oxygen is our response to this gap. We decided to build a daily nutrition system that doesn't compromise. Every ingredient is chosen based on peer-reviewed clinical data. Every dosage maps to actual effective ranges used in studies. And every form of the nutrient is the most bioavailable version we could source.</p>
            <p>This is precisely why we started with a Millet Matrix as our base, rather than a cheap whey or soy isolate. It's why we use chelated minerals. And it's why we are so obsessed with bioavailability.</p>
            <p>We are building the product we wished existed for our own families.</p>
        `
    },
    {
        id: 2,
        title: "What chelated minerals are — and why every major Indian health drink uses cheaper forms",
        excerpt: "Chelation isn't a marketing word. It's a chemistry process that determines whether your body absorbs 8% or 28% of the minerals you consume. The cost difference per serving? About ₹2.",
        date: "Feb 20, 2026",
        author: "Research Team",
        category: "science",
        readTime: "8 min read",
        week: "Week 1",
        content: `
            <p>Minerals are tricky. If you swallow a rock, you won't absorb its minerals. To absorb a mineral like Magnesium or Zinc, it has to be attached to something your body recognizes.</p>
            <p>Most commercial supplements use "inorganic" forms of minerals (like Magnesium Oxide or Zinc Sulfate). Why? Because they are incredibly cheap and take up very little physical space in a capsule or scoop. The problem is, their bioavailability (how much actually reaches your bloodstream) is abysmal. For Magnesium Oxide, absorption can be as low as 4%.</p>
            <h3>The Chelation Solution</h3>
            <p>In Nature, minerals don't exist in isolation; they are bound to amino acids in plants and animals. This is called chelation (from the Greek 'chele', meaning claw). A chelated mineral is one that has been molecularly bonded to an amino acid in a lab, mimicking this natural state.</p>
            <p>For example, Magnesium Bisglycinate is magnesium attached to two molecules of the amino acid glycine. Because your body aggressively absorbs amino acids in the digestive tract, it pulls the magnesium right along with it. The result? Absorption rates jump dramatically, often 4x to 5x higher than commercial inorganic forms.</p>
            <h3>Why the Industry Doesn't Use Them</h3>
            <p>If chelation is so much better, why doesn't everyone use it? Two reasons:</p>
            <ol>
                <li><strong>Cost</strong>: Chelated minerals cost significantly more to manufacture. When a company is optimizing for margin across millions of units, switching from Zinc Oxide to Zinc Bisglycinate destroys their profitability.</li>
                <li><strong>Space</strong>: Chelated molecules are physically larger. It's much harder to fit a meaningful dose into a small scoop or pill.</li>
            </ol>
            <p>At Oxygen, we use chelated minerals exclusively. Because what matters isn't what's on the label—it's what makes it into your cells.</p>
        `
    }
];

export default function BlogPost() {
    const { id } = useParams();
    const postId = parseInt(id || "1", 10);

    // In a real app, handle fetching missing data. Here we have a limited dataset for demonstration.
    const post = BLOG_POSTS.find(p => p.id === postId) || BLOG_POSTS[0];

    // Security catch-all for the future date check on individual pages
    const isFutureDate = new Date(post.date) > new Date();
    if (isFutureDate) {
        return <Navigate to="/blog" replace />;
    }

    const categoryLabel = post.category === "science" ? "Nutrition Science" : "Building Oxygen";
    const CategoryIcon = post.category === "science" ? FlaskConical : Rocket;

    return (
        <Layout>
            <article className="pt-32 pb-20">
                <div className="container-width px-4 max-w-3xl mx-auto">
                    {/* Back Button */}
                    <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors mb-8 group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to all articles
                    </Link>

                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                                <CategoryIcon size={12} /> {categoryLabel}
                            </span>
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                                {post.week}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white leading-[1.05] tracking-tighter mb-6">
                            {post.title}
                        </h1>

                        <p className="text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-8">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between py-6 border-y border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-bold">
                                        {post.author.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">{post.author}</p>
                                        <p className="text-xs text-slate-500">{post.date}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                                <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-primary">
                                    <Share2 size={16} />
                                </button>
                            </div>
                        </div>
                    </header>

                    {/* Content */}
                    <div
                        className="prose prose-slate dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-p:font-light prose-p:leading-relaxed prose-a:text-primary max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content || "<p>This is a placeholder for the full article content. In the live version, this content will be loaded dynamically from the CMS.</p><p>We are currently writing this highly detailed documentation about the science and formulation architecture of Oxygen. Check back shortly for the complete read.</p>" }}
                    />
                </div>
            </article>
        </Layout>
    );
}
