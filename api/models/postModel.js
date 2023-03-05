module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define("post", {
        postContent: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
    
    })

    return Post

}