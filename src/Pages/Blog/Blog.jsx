import React from "react";

const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "The Future of Web Development",
            desc: "Discover the latest trends and technologies shaping the future of modern web applications.",
            date: "Aug 28, 2025",
            img: "https://source.unsplash.com/600x400/?technology,web",
        },
        {
            id: 2,
            title: "Top 10 Programming Languages in 2025",
            desc: "A detailed guide to the most in-demand programming languages for developers.",
            date: "Aug 20, 2025",
            img: "https://source.unsplash.com/600x400/?programming,code",
        },
        {
            id: 3,
            title: "Mastering Soft Skills as a Developer",
            desc: "Learn how teamwork, leadership, and problem-solving can boost your IT career.",
            date: "Aug 15, 2025",
            img: "https://source.unsplash.com/600x400/?teamwork,office",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#BBD2C5] via-[#536976] to-[#536976] text-teal-900">
        
            {/* কনটেন্ট শুরু হবে Navbar এর নিচ থেকে */}
            <div className="pt-20">
                {/* Header */}
                <div className="hero">
                    <div className="hero-content text-center py-10">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl font-bold text-teal-300">My Blog</h1>
                            <p className="py-4 text-lg text-teal-100">
                                Sharing knowledge, experiences, and stories from my journey.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Featured Blog */}
                <section className="max-w-6xl mx-auto px-4 py-12">
                    <h2 className="text-2xl font-bold mb-6 text-teal-200">✨ Featured Blog</h2>
                    <div className="card lg:card-side bg-white/10  border border-white/20 shadow-xl">
                        <figure>
                            <img
                                src="https://placehold.co/600x400"
                                alt="Featured Blog"
                                className="w-full lg:w-96 object-cover"
                            />
                        </figure>
                        <div className="card-body text-teal-100">
                            <h2 className="card-title text-teal-300">Exploring Web Development Trends</h2>
                            <p>
                                A deep dive into the latest web technologies, frameworks, and design principles.
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-teal-400 hover:bg-teal-600 border-none text-white">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="max-w-6xl mx-auto px-4 py-12">
                    <h2 className="text-2xl font-bold mb-6 text-teal-200">📚 Latest Blogs</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="card bg-white/10  border border-white/20 ">
                                <figure>
                                    <img
                                        src={blog.img}
                                        alt={blog.title}
                                        className="w-full h-48 object-cover"
                                    />
                                </figure>
                                <div className="card-body text-teal-100">
                                    <h3 className="card-title text-teal-300">{blog.title}</h3>
                                    <p>{blog.desc}</p>
                                    <span className="text-sm text-teal-200">{blog.date}</span>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-outline btn-sm border-teal-300 text-teal-300 hover:bg-teal-500 hover:text-white">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Categories */}
                <section className="bg-white/10  py-12">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6 text-teal-200">📂 Categories</h2>
                        <div className="flex flex-wrap gap-3">
                            {["Web Dev", "UI/UX", "JavaScript", "React", "Career", "Personal"].map(
                                (cat, index) => (
                                    <div key={index} className="badge badge-lg bg-teal-400 text-white hover:bg-teal-600">
                                        {cat}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <section className="max-w-6xl mx-auto px-4 py-12 text-center">
                    <h2 className="text-2xl font-bold mb-4 text-teal-200">📩 Subscribe to Newsletter</h2>
                    <p className="mb-6 text-teal-100">
                        Stay updated with the latest blogs, tutorials, and stories.
                    </p>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="input input-bordered join-item w-64 border-teal-300 focus:outline-none focus:ring focus:ring-teal-500"
                        />
                        <button className="btn bg-teal-400 hover:bg-teal-600 border-none text-white join-item">
                            Subscribe
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Blog;
