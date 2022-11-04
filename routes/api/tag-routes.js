const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const getTag = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }] 
    });
    res.status(200).json(getTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const getTagId = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }] 
    });
    if(!getTagId){
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }
    res.status(200).json(getTagId);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const postTag = await Tag.create(req.body);
    res.status(200).json(postTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
