module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define('Burger', {
        id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        burger_name: {
         type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: "Personal"
        }
    });
    return Post;
};