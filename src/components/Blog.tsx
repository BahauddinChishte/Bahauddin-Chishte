import React, { useState, useMemo } from 'react';
import { Clock, Tag, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data';

const tags = ["all", "tech", "productivity", "thought", "book-review", "resources"];

export default function Blog() {
  const [activeTag, setActiveTag] = useState("all");

  const filteredPosts = useMemo(() => {
    if (activeTag === "all") return blogPosts;
    return blogPosts.filter(post => post.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50" id="blog">
      <div className="max-w-2xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
          Blog
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-50" />
        </h2>
        <p className="text-slate-400 text-lg mt-4">
          Thoughts, tutorials, and insights on technology and development.
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`
              px-4 py-2 rounded-lg text-sm font-medium transition-all
              ${activeTag === tag 
                ? 'bg-blue-500 text-white' 
                : 'bg-slate-900/50 text-slate-400 hover:text-white hover:bg-slate-800'}
            `}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.map(post => (
          <article 
            key={post.id}
            className="group bg-slate-900/50 rounded-lg overflow-hidden border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              
              {/* Tags Overlay */}
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">{post.author.name}</p>
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <a 
                href={`#blog/${post.id}`}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium group/link"
              >
                Read More
                <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}