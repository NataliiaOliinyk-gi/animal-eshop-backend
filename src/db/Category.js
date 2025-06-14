import { DataTypes } from "sequelize";
import sequelize from "./sequelize.js";

const Category = sequelize.define(
    "category",
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: "Category with name already exist"
            },
            validate: {
                len: [3]
            },
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: "https://example.com/1.png",
            allowNull: false,
        },
    }
);

// Category.associate = models => {
//     Category.hasMany(models.Product, {
//         foreignKey: "categoryId",
//         as: "products",
//     })
// };

// Category.sync();
// Category.sync({alter: true}); // обновляет таблицу, если она уже существует
// Category.sync({force: true}); // удаляет таблицу и создает заново пустую с новыми полями

// Category.create({
//     title: "Dry & Wet Food",
//     image: "/category_img/1.jpeg"
// });

export default Category;