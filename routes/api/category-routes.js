const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const getCategories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(getCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const getCategoryId = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!getCategoryId) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(getCategoryId);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const postCategory = await Category.create(req.body);
    res.status(200).json(postCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const putCategoryId = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!putCategoryId[0]) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(putCategoryId);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteCategoryId = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteCategoryId) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(deleteCategoryId);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
