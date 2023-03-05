module.exports = (sequelize, DataTypes) => {

    const Comment = sequelize.define("comment", {
        commentText: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Comment

}