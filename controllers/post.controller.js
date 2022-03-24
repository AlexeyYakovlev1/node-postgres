const db = require("../db");

class Post {
    async createPost(req, res) {
        const { title, content, userId } = req.body;
        const newPost = await db.query(`INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`, [title, content, userId]);
    
        return res.status(201).json(newPost.rows[0]);
    }

    async getPostsByUser(req, res) {
        const id = req.query.id;
        const posts = await db.query(`SELECT * FROM post WHERE user_id = $1`, [id]);
        
        return res.status(200).json(posts.rows);
    }
}

module.exports = Post;