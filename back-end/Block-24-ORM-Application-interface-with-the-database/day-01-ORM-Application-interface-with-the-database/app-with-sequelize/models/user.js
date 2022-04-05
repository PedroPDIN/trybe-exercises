const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    // New Colum
    phone_num: DataTypes.STRING,
  });

  return User;
};

module.exports = User;