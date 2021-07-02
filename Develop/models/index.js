// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
  as: 'category_product'
})

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'category_product'
})

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: "tags"
})

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: "products"
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};