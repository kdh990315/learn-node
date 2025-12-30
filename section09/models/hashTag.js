const Sequelize = require("sequelize");

class hashTag extends Sequelize.Model {
  static initiate(sequelize) {
    hashTag.init(
      {
        title: {
          type: Sequelize.STRING(15),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        paranoid: false,
        modelName: "Post",
        tableName: "posts",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {
    db.hashTag.belongsToMany(db.Post, { through: "PostHashtag" });
  }
}

module.exports = hashTag;
