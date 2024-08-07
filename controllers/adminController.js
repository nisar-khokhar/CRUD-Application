const user = [];

const getAllAdmins = (req, res) => {
  try {
    return res.send({
      response: user,
    });
  } catch (error) {
    return res.send({ error: error });
  }
};

const createAdmin = (req, res) => {
  try {
    const { username, password } = req.body;
    let isUserExist = false;

    for (let i = 0; i < user.length; i++) {
      if (user[i].username === username) {
        isUserExist = true;
        break;
      }
    }

    if (!isUserExist) {
      user.push({ username: username, password: password });
      return res.send({
        response: `Admin created with username: ${req.body.username}`,
      });
    }
    return res.send("Admin already exists with such username");
  } catch (error) {
    return res.send({ error: error });
  }
};

const getAdmin = (req, res) => {
  const { username, password } = req.query;

  for (let i = 0; i < user.length; i++) {
    if (user[i].username === username && user[i].password === password) {
      return res.send({ "Admin exists": user[i] });
    }
  }

  //   user.forEach((element) => {
  //     if (element.username === username && element.password === password) {
  //       return res.send(element);
  //     }
  //   });
  return res.send("No admin exists with such credentials");
};

const deleteAdmin = (req, res) => {
  try {
    const { username, password } = req.query;
    let isValid = false;

    for (let i = 0; i < user.length; i++) {
      if (user[i].username === username && user[i].password === password) {
        isValid = true;
        break;
      }
    }

    if (isValid) {
      user.forEach((element, index) => {
        if (element.username == username && element.password == password) {
          user.splice(index, 1);
        }
      });
      return res.send({
        response: `Admin deleted with username: ${req.query.username}`,
      });
    }
    return res.send("Admin does not exist");
  } catch (error) {
    return res.send({ error: error });
  }
};

module.exports = { getAllAdmins, getAdmin, createAdmin, deleteAdmin };
