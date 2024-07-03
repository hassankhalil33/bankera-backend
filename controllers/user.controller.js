const Account = require("../models/account.model");
const User = require("../models/user.model");

const getUser = async (req, res) => {
  const username = req.params.username;

  const user = await User.findOne({
    username: username
  })
  .populate("accounts")
  .exec();

  if(user) {
    res.json(user);
  } else {
    res.status(400).send({ message: "User Doesnt Exist" });
  };
};

const createUser = async (req, res) => {
  const { username, password, email } = req.body;

  const user = new User;
  user.username = username;
  user.password = password;
  user.email = email;

  await user.save()
    .catch((err) => {
      console.log(err);
      res.send(400, "Bad Request");
    });

  const account = new Account;
  account.user_id = user._id;

  await account.save()
    .catch((err) => {
      console.log(err);
      res.send(400, "Bad Request");
  });

  user.account_count = user.account_count + 1;
  user.accounts = [...user.accounts, account._id];

  await user.save()
    .catch((err) => {
      console.log(err);
      res.send(400, "Bad Request");
  });

  res.json({message: "user created successfully"});
};

module.exports = {
  getUser,
  createUser
};
