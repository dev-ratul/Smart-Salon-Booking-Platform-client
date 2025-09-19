import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import usePostData from "../../hooks/api/usePostData";
import useGetData from "../../hooks/api/useGetData";

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

const ChicBlog = () => {
	const { user } = useAuth();
	const [isOpen, setIsOpen] = useState(false);
	const [expanded, setExpanded] = useState(null);
  	const [posts, setPosts] = useState(fakeData);

	// Fake Data
	const createSlug = (title) => {
		return title
		.toLowerCase()
		.replace(/[^a-zA-Z0-9 ]/g, '') // Remove special characters
		.replace(/\s+/g, '-') // Replace spaces with hyphens
		.replace(/-+/g, '-'); // Remove consecutive hyphens
	};
	

	const { register, handleSubmit, reset, formState: { errors } } = useForm();
	const { 
		mutate: createPost, 
	} = usePostData('posts', 'https://smart-salon-server-new.onrender.com/api/blog/create');

	const { data: blog } = useGetData('blog', 'https://smart-salon-server-new.onrender.com/api/blog/get-all-blog');

	const onSubmit = (data) => {

		// Create new post object
		const newPost = {
			...data,
		slug:createSlug(data.title),
			image: data.image[0] ? URL.createObjectURL(data.image[0]) : "",
		};  

    createPost(newPost);

		// Update posts state with new post
		setPosts([newPost, ...posts]);

		// Reset form and close modal
		reset();
		setIsOpen(false);
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
							onSubmit={handleSubmit(onSubmit)}
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
									placeholder="Enter your blog title"
									className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
									{...register("title", {
										required: "Title is required",
									})}
								/>
								{errors.title && (
									<span className="text-red-500 text-sm mt-1">
										{errors.title.message}
									</span>
								)}
							</div>

							<div>
								<label className="block text-gray-300 mb-2">Author Name</label>
								<input
									type="text"
									placeholder="Enter your blog title"
									className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
									{...register("author", {
										required: "Author is required",
									})}
								/>
								{errors.author && (
									<span className="text-red-500 text-sm mt-1">
										{errors.author.message}
									</span>
								)}
							</div>

							<div>
								<label className="block text-gray-300 mb-2">
									Content
								</label>
								<textarea
									placeholder="Write your blog content"
									rows="4"
									className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
									{...register("content", {
										required: "Content is required",
									})}
								></textarea>
								{errors.content && (
									<span className="text-red-500 text-sm mt-1">
										{errors.content.message}
									</span>
								)}
							</div>

							<div>
								<label className="block text-gray-300 mb-2">
									Upload Image
								</label>
								<input
									type="file"
									accept="image/*"
									className="w-full px-4 py-3 cursor-pointer rounded-xl bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
									{...register("image")}
								/>
							</div>

							<div>
								<label className="block text-gray-300 mb-2">
									Category
								</label>
								<select
									className="w-full px-4 py-3 rounded-xl bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
									{...register("category", {
										required: "Please select a category",
									})}
								>
									<option value="">Select a category</option>
									<option value="Technology">Technology</option>
									<option value="Lifestyle">Lifestyle</option>
									<option value="Travel">Travel</option>
									<option value="Health">Health</option>
									<option value="Education">Education</option>
								</select>
								{errors.category && (
									<span className="text-red-500 text-sm mt-1">
										{errors.category.message}
									</span>
								)}
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
												expanded === idx
													? ""
													: "line-clamp-3"
											}`}
										>
											{post.content}
										</p>

										<button
											onClick={() =>
												setExpanded(
													expanded === idx
														? null
														: idx
												)
											}
											className="text-pink-400 cursor-pointer text-sm font-medium hover:underline"
										>
											{expanded === idx
												? "Show Less"
												: "Read More"}
										</button>

										{/* Author Info */}
										<div className="pt-3 border-t border-gray-700">
											<p className="text-xs text-gray-400">
												Posted by
											</p>
											<p className="text-sm font-medium text-white">
												{post.email}
											</p>
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
