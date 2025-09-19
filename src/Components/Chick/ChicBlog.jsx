import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useAuth from "../../hooks/useAuth";

const ChicBlog = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(null); // কোন ব্লগ read more ক্লিক করেছে

  // Fake Data
  // Fake Data
  const fakeData = [
    {
      title: "AI Revolution in Bangladesh",
      content:
        "Bangladesh is rapidly adopting AI technology across education, healthcare, and finance sectors. AI is already being used in financial fraud detection, hospital management, and education platforms. Within the next 5 years, local startups are predicted to integrate AI in agriculture and transport as well.",
      image: "https://i.ibb.co/mVMwmNp7/young-man-barbershop-trimming-hair.jpg",
      category: "Technology",
      email: "technews@mail.com",
    },
    {
      title: "Fashion Trends 2025",
      content:
        "Minimalist and sustainable fashion is taking over the Bangladeshi market this year. Local brands are now focusing on eco-friendly fabrics, reducing wastage, and prioritizing slow fashion movements.",
      image: "https://source.unsplash.com/600x400/?fashion,clothes",
      category: "Fashion",
      email: "fashionworld@mail.com",
    },
    {
      title: "Travel Guide: Cox’s Bazar",
      content:
        "Cox’s Bazar remains the top tourist attraction with new luxury resorts opening. From beach sports to seafood restaurants, the tourism industry is booming. Tourists are especially drawn to Saint Martin’s Island and Marine Drive.",
      image: "https://source.unsplash.com/600x400/?beach,travel",
      category: "Travel",
      email: "travelblog@mail.com",
    },
  ];

  const [posts, setPosts] = useState(fakeData);
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
    category: "",
    author: user?.email || "anonymous@mail.com",
  });

  // handle form inputs
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setPostData({ ...postData, image: URL.createObjectURL(files[0]) });
    } else {
      setPostData({ ...postData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const newPost = {
    ...postData,
    email: user?.email || "anonymous@mail.com",
  };

  try {
    const res = await fetch("https://smart-salon-server-new.onrender.com/api/blog/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });

    const data = await res.json();

    if (res.ok) {
      setPosts([data, ...posts]); // ব্লগ লিস্ট আপডেট
      setPostData({ title: "", content: "", image: "", category: "", email: user?.email || "anonymous@mail.com" }); // ফর্ম রিসেট
      setIsOpen(false); // ফর্ম বন্ধ করা
    } else {
      console.error("Failed to create post:", data.message);
    }
  } catch (error) {
    console.error("Error creating post:", error);
  }
};



  return (
    <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 min-h-screen overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-pink-700/10 animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Input to Open Slider */}
        <div className="text-center mb-10">
          <motion.input
            type="text"
            readOnly
            placeholder="Write a Blog..."
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-full max-w-2xl mx-auto px-6 py-3 rounded-full font-medium text-base bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white placeholder-white/80 shadow-lg cursor-pointer hover:opacity-90 transition"
          />
        </div>

        {/* Slider Form */}
        <AnimatePresence>
          {isOpen && (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/70 backdrop-blur-md p-8 rounded-3xl shadow-[0_0_35px_rgba(236,72,153,0.5)] space-y-6 mb-12"
            >
              <div>
                <label className="block text-gray-300 mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={postData.title}
                  onChange={handleChange}
                  placeholder="Enter your blog title"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Content</label>
                <textarea
                  name="content"
                  value={postData.content}
                  onChange={handleChange}
                  placeholder="Write your blog content"
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Upload Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full px-4 py-3 cursor-pointer rounded-xl bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Category</label>
                <select
                  name="category"
                  value={postData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Technology">Technology</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Travel">Travel</option>
                  <option value="Health">Health</option>
                  <option value="Education">Education</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:opacity-90 transition"
              >
                Post Blog
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Blog List */}
        <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 min-h-screen overflow-hidden">
      {/* Background Glow */}
       {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-pink-700/10 animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Blog List in Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-gray-800 hover:border-pink-500/40 transition"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-600 text-xs px-3 py-1 rounded-full font-semibold">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <h2 className="text-lg font-bold text-white line-clamp-2">
                  {post.title}
                </h2>

                <p
                  className={`text-gray-300 text-sm ${
                    expanded === idx ? "" : "line-clamp-3"
                  }`}
                >
                  {post.content}
                </p>

                <button
                  onClick={() =>
                    setExpanded(expanded === idx ? null : idx)
                  }
                  className="text-pink-400 cursor-pointer text-sm font-medium hover:underline"
                >
                  {expanded === idx ? "Show Less" : "Read More"}
                </button>

                {/* Author Info */}
                <div className="pt-3 border-t border-gray-700">
                  <p className="text-xs text-gray-400">Posted by</p>
                  <p className="text-sm font-medium text-white">{post.email}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
      </div>
    </section>
  );
};

export default ChicBlog;


