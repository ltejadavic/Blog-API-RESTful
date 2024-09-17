const { Post } = require('../models');

// Obtener todas las publicaciones
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las publicaciones' });
  }
};

// Obtener una publicación por ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: 'Publicación no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener la publicación' });
  }
};

// Crear una nueva publicación
exports.createPost = async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear la publicación' });
  }
};

// Actualizar una publicación
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (post) {
      post.title = req.body.title;
      post.content = req.body.content;
      await post.save();
      res.json(post);
    } else {
      res.status(404).json({ error: 'Publicación no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar la publicación' });
  }
};

// Eliminar una publicación
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (post) {
      await post.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Publicación no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar la publicación' });
  }
};