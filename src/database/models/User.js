module.exports = (sequelize, dataTypes) => {
    let alias = 'User'; 
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        remember_token: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        role: {
            type: dataTypes.BIGINT(10).UNSIGNED,
        }
    };
    let config = {
//        tableName : 'users',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
    const User = sequelize.define(alias,cols,config);
    return User
};