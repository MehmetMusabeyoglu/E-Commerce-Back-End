# E-Commerce Back End


## Table of Contents
* [Description](#description)
* [Usage Demonstration Link](#usage-demonstration-link)
* [User Story](#user-story)
* [Screenshot](#screenshot)
* [Code Snippet](#code-snippet)
* [Technologies Used](#technologies-used)
* [Credits](#credits)
* [Author Links](#author-links)
* [License](#license)


## Description

 This application has a back-end server for e-commerce site. Back-end part created with Express.js, sequelize, and MySQL database. It allows to user to get all datas by categories, tags and products. Also get single item by it's id. User can delete, update, or create new item for each routes. 


## Usage Demonstration Link

Usage demonstration link is [here](https://drive.google.com/file/d/1ZlGHAnPZYmyk5xa76CV4LDpxoVmilkeB/view)


## User Story

| As a                                          | I want to                                                              | So that   
| --------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------- |
| `manager at an internet retail company`       | a back end for my e-commerce website that uses the latest technologies | `my company can compete with other e-commerce companies` |


## Screenshot

### *Usage demonstration in Insomnia*

!["Insomnia"](./assets/Walkthrough%20Gif.gif)


## Code Snippet

### GET:
####  Function for getting single product based on it's id.
```

router.get('/:id', async (req, res) => {
  try {
    const getProductId = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });
    if (getProductId) {
      res.status(200).json(getProductId);
      return;
    }
    res.status(404).json({ message: 'No product found with that id!'});
  } catch (err) {
    res.status(500).json(err);
  }
});

```

####  Function for getting all tags.
```

router.get('/', async (req, res) => {
  try {
    const getTags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(getTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

```

### DELETE:
####  Function for deleting single category based on it's id.
```

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

```


## Technologies Used

- JavaScript
- Node.js
- Insomnia
- Npm sequelize
- Npm dotenv
- Npm mysql2 
- Npm express 
- Gitbash
- GitHub    
- Screencastify


## Credits

[Npm Sequelize](https://sequelize.org/)

[ Npm Mysql2](https://www.npmjs.com/package/mysql2)

[Npm Dotenv](https://www.npmjs.com/package/dotenv)

[Npm Express](https://www.npmjs.com/package/express)


## Author Links

[LinkedIn Profile](https://www.linkedin.com/in/mehmet-musabeyoglu)

[GitHub Profile](https://github.com/MehmetMusabeyoglu)

[E-mail Address](mailto:mehmetmusabeyoglu@gmail.com) 


## License 

 This project is licensed under the MIT License 
 <br>
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)