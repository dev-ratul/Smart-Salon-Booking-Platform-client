import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ChicBlog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [postData, setPostData] = useState({
    title: "",
    content: "",
  });

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Welcome to ChicBlog ✨",
      content: "এখানে সবাই নিজেদের blog লিখতে পারবে!",
    },
    {
      id: 2,
      title: "AI Suggestion Coming Soon 🤖",
      content: "Blog লেখার সময় AI সাহায্য করবে।",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Blog Post:", postData);

    const newPost = {
      id: posts.length + 1,
      title: postData.title,
      content: postData.content,
    };

    setPosts([newPost, ...posts]);
    setPostData({ title: "", content: "" });
    setIsOpen(false);
  };

  return (
    <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 min-h-screen overflow-hidden">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-pink-700/10 animate-pulse"></div>

      <div className="relative max-w-5xl mx-auto px-6">
        

        {/* Input Field to Open Slider Form */}
        <div className="text-center mb-10">
          <motion.input
            type="text"
            readOnly
            placeholder="Write a Blog..."
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-full max-w-lg mx-auto px-6 py-3 rounded-full font-medium text-base bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white placeholder-white/80 shadow-lg cursor-pointer hover:opacity-90 transition"
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
              className="bg-gray-900/60 backdrop-blur-md p-8 rounded-3xl shadow-[0_0_35px_rgba(236,72,153,0.5)] space-y-6 mb-12"
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
      </div>
    </section>
  );
};

export default ChicBlog;
