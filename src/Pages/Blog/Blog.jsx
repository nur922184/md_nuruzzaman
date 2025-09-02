import React from "react";
import code from "../../assets/prg_code.jpg"
import web_tecnology from "../../assets/web_tecnology.png"
import teamwork from "../../assets/teamwork-in-office-stockcake.jpg"
import web_devolop from "../../assets/web-development-south-africa.jpg"
import blog_hero from "../../assets/blog_hero.png"

const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "The Future of Web Development",
            desc: "Discover the latest trends and technologies shaping the future of modern web applications.",
            date: "Aug 28, 2025",
            img: web_tecnology,
        },
        {
            id: 2,
            title: "Top 10 Programming Languages in 2025",
            desc: "A detailed guide to the most in-demand programming languages for developers.",
            date: "Aug 20, 2025",
            img: code,
        },
        {
            id: 3,
            title: "Mastering Soft Skills as a Developer",
            desc: "Learn how teamwork, leadership, and problem-sonlving can boost your IT career.",
            date: "Aug 15, 2025",
            img: teamwork,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#BBD2C5] via-[#536976] to-[#536976] text-teal-900">

            <div className="md:pt-20">
                <div
                    style={{
                        backgroundImage: `url(${blog_hero})`,
                    }}
                    className="flex h-64 md:h-96 w-full mx-auto px-4 md:px-20 flex-col bg-top bg-cover items-center justify-center text-center"
                >
                    <div className="py-6 md:py-10">
                        <div className="max-w-2xl mx-auto">
                            <h1 className="text-2xl md:text-4xl font-bold text-teal-300">
                                {/* My Blog */}
                            </h1>
                            <p className="py-2 md:py-4 text-sm md:text-lg text-gray-100">
                                {/* Sharing knowledge, experiences, and stories from my journey. */}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Featured Blog */}
                <section className="max-w-6xl mx-auto px-4 py-12">
                    <h2 className="text-2xl font-bold mb-6 text-teal-200">✨ Featured Blog</h2>
                    <div className="md:flex bg-white/10  border border-white/20 shadow-xl">
                        <figure>
                            <img
                                src={web_devolop}
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
                            <div key={blog.id} className=" bg-white/10  border border-white/20 ">
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
                <section className="bg-white/10 py-12">
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
                    <form className="flex justify-center items-center space-x-2">
                        <div class="input-container">
                            <input className="px-4 py-1 rounded-md bg-teal-950 text-white focus:outline-none focus:ring-2 focus:ring-teal-300 w-72" placeholder="Email" type="email" required />
                        </div>
                        <button
                            type="submit"
                            // className="glowbutton"
                            className=" py-2 btn btn-sm w-26 bg-teal-300 text-black font-medium rounded-md hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Subscription
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Blog;
