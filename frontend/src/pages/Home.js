import { useEffect, useState } from "react";
import { API } from "../api";
import BlogCard from "../components/BlogCard";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.get("/blogs").then(res => setBlogs(res.data)).catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)}
      </div>
    </div>
  );
};

export default Home;
