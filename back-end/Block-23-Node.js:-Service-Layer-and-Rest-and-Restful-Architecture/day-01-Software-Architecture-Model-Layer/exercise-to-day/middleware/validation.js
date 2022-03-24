const isValidName = (req, res, next) => {
  const { firstName, lastName } = req.body;
  if (!firstName || typeof firstName !== "string") {
    return res
      .status(400)
      .json({ error: true, message: "O campo 'first_name' inválido." });
  }

  if (!lastName || typeof lastName !== "string") {
    return res
      .status(400)
      .json({ error: true, message: "O campo 'last_name' inválido." });
  }

  next();
};

const isValidEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email || typeof email !== "string") {
    return res
      .status(400)
      .json({ error: true, message: "O campo 'email' inválido." });
  }

  next();
};

const isValidPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password || typeof password !== "string" || password.length < 6) {
    return res
      .status(400)
      .json({ error: true, message: "O campo 'password' inválido." });
  }

  next();
};

module.exports = {
  isValidName,
  isValidEmail,
  isValidPassword,
};
