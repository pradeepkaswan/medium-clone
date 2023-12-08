// import Blog from '../models/Blog.js';

// export const getBlogs = async (req, res) => {
// 	try {
// 		const blogs = await Blog.find();
// 		res.status(200).json(blogs);
// 	} catch (error) {
// 		res.status(500).json({ error: error.message });
// 	}
// };

// export const getBlogById = async (req, res) => {
// 	try {
// 		const blog = await Blog.findById(req.params.id);
// 		res.status(200).json(blog);
// 	} catch (error) {
// 		res.status(500).json({ error: error.message });
// 	}
// };

// export const createBlog = async (req, res) => {
// 	const { title, content } = req.body;

// 	try {
// 		const newBlog = new Blog({ title, content });
// 		const savedBlog = await newBlog.save();
// 		res.status(201).json(savedBlog);
// 	} catch (error) {
// 		res.status(500).json({ error: error.message });
// 	}
// };

// export const updateBlog = async (req, res) => {
// 	try {
// 		const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
// 			new: true,
// 		});
// 		res.status(200).json(updatedBlog);
// 	} catch (error) {
// 		res.status(500).json({ error: error.message });
// 	}
// };

// export const deleteBlog = async (req, res) => {
// 	try {
// 		const deletedBlog = await Blog.findByIdAndRemove(req.params.id);
// 		res.status(200).json(deletedBlog);
// 	} catch (error) {
// 		res.status(500).json({ error: error.message });
// 	}
// };
