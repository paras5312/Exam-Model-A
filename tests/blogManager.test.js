const BlogManager = require("../src/blogManager");

describe("BlogManager", () => {
    beforeEach(() => {
        
        jest.resetModules();
    });

    test("should add a new blog post", () => {
        const post = {
            title: "Test Post",
            author: { name: "John Doe", email: "john@example.com" },
            content: "This is a test blog post.",
            datePublished: "2025-03-11",
            likes: 0,
            comments: [],
            tags: ["Test"]
        };

        BlogManager.addBlogPost(post);
        expect(BlogManager.readBlogPost("Test Post")).toEqual(post);
    });

    test("should not add a post with a duplicate title", () => {
        const post = {
            title: "Duplicate Post",
            author: { name: "John Doe", email: "john@example.com" },
            content: "This is a test blog post.",
            datePublished: "2025-03-11",
            likes: 0,
            comments: [],
            tags: ["Test"]
        };

        BlogManager.addBlogPost(post);
        expect(() => BlogManager.addBlogPost(post)).toThrow("Title must be unique");
    });

    test("should return 'Post not found' for a non-existent post", () => {
        expect(BlogManager.readBlogPost("Non-Existent")).toBe("Post not found");
    });

    test("should update an existing blog post", () => {
        const post = {
            title: "Update Test",
            author: { name: "Jane Doe", email: "jane@example.com" },
            content: "Initial content.",
            datePublished: "2025-03-11",
            likes: 5,
            comments: [],
            tags: ["Update"]
        };

        BlogManager.addBlogPost(post);
        BlogManager.updateBlogPost("Update Test", { likes: 10 });

        expect(BlogManager.readBlogPost("Update Test").likes).toBe(10);
    });

    test("should return 'Post not found' when updating a non-existent post", () => {
        expect(BlogManager.updateBlogPost("Non-Existent", { likes: 5 })).toBe("Post not found");
    });

    test("should delete a blog post", () => {
        const post = {
            title: "Delete Test",
            author: { name: "John Smith", email: "johnsmith@example.com" },
            content: "Content to be deleted.",
            datePublished: "2025-03-11",
            likes: 3,
            comments: [],
            tags: ["Delete"]
        };

        BlogManager.addBlogPost(post);
        BlogManager.deleteBlogPost("Delete Test");

        expect(BlogManager.readBlogPost("Delete Test")).toBe("Post not found");
    });

    test("should return 'Post not found' when deleting a non-existent post", () => {
        expect(BlogManager.deleteBlogPost("Non-Existent")).toBe("Post not found");
    });
});
