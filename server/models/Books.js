export default (sequelize, DataTypes) => {
  const Books = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: DataTypes.FALSE,
    },
    isbn: {
      type: DataTypes.STRING,
      unique: true,
      required: true
    },
    total: {
      type: DataTypes.INTEGER,
      required: true
    },
    productionYear: DataTypes.STRING,
    catId: DataTypes.INTEGER,
    cover: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Books.hasMany(models.RentedBook, {
          onDelete: 'CASCADE',
          foreignKey: 'bookId'
        });
        Books.hasOne(models.Category, {
          foreignKey: 'catId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return Books;
};
