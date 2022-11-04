const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const getCategory = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(getCategory);
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
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }
    res.status(200).json(getCategoryId);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
