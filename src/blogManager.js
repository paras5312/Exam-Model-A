const BlogManager = (() => {
    let posts = [];

    function addBlogPost(post) {
        if (!post.title || !post.author || !post.content || !post.datePublished) {
            throw new Error("Missing required fields");
        }
        if (posts.some(p => p.title === post.title)) {
            throw new Error("Title must be unique");
        }
        posts.push(post);
    }

    function readBlogPost(title) {
        const post = posts.find(p => p.title === title);
        return post || "Post not found";
    }

    function updateBlogPost(title, updatedDetails) {
        const post = posts.find(p => p.title === title);
        if (!post) return "Post not found";
        Object.assign(post, updatedDetails);
    }

    function deleteBlogPost(title) {
        const index = posts.findIndex(p => p.title === title);
        if (index === -1) return "Post not found";
        posts.splice(index, 1);
    }

    return {
        addBlogPost,
        readBlogPost,
        updateBlogPost,
        deleteBlogPost
    };
})();

module.exports = BlogManager;
