import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import BlogPreview from '../components/BlogPreview';
import Footer from '../components/Footer';


const Home = () => {
  const features = [
    {
      imageSrc: '/assets/write-freely.webp',
      title: 'Write Freely',
      description: 'Create posts with a powerful editor.',
    },
    {
      imageSrc: '/assets/community.jpg',
      title: 'Community Driven',
      description: 'Interact with a vibrant community.',
    },
    {
      imageSrc: '/assets/learn-grow.jpg',
      title: 'Learn & Grow',
      description: 'Read content that makes you smarter.',
    },
  ];

  const blogPosts = [
    {
      imageSrc: '/assets/react.jpg',
      title: 'React Tips and Tricks',
      excerpt: 'Improve your React skills with these expert tips.',
      author: 'Alice',
    },
    {
      imageSrc: '/assets/tailwind.webp',
      title: 'Understanding Tailwind CSS',
      excerpt: 'Tailwind makes styling easy and fun. Learn why.',
      author: 'Bob',
    },
    {
      imageSrc: '/assets/vercel.png',
      title: 'Deploying with Vercel',
      excerpt: 'Steps to easily deploy your React app on Vercel.',
      author: 'Clara',
    },
  ];

  return (
    <div>
      <HeroSection />

      {/* Features */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Blogify?</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Previews */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Latest Blog Posts</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {blogPosts.map((post, idx) => (
              <BlogPreview key={idx} {...post} />
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
