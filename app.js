const BlogManager = require("./src/blogManager");

// Add a new blog post
BlogManager.addBlogPost({
    title: "Understanding JavaScript Closures",
    author: { name: "Jane Doe", email: "jane@example.com" },
    content: "A closure is...",
    datePublished: "2024-10-09",
    likes: 120,
    comments: [
        { user: "John Doe", message: "Great post!", date: "2024-10-10" }
    ],
    tags: ["JavaScript", "Closures", "Functions"]
});

// Read the blog post
console.log(BlogManager.readBlogPost("Understanding JavaScript Closures"));

// Update the blog post
BlogManager.updateBlogPost("Understanding JavaScript Closures", { likes: 150 });
console.log(BlogManager.readBlogPost("Understanding JavaScript Closures"));

// Delete the blog post
BlogManager.deleteBlogPost("Understanding JavaScript Closures");
console.log(BlogManager.readBlogPost("Understanding JavaScript Closures")); // Should print "Post not found"
