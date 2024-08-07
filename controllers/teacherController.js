const user = [];

const getAllTeachers = (req, res) => {
  try {
    return res.send({
      response: user,
    });
  } catch (error) {
    return res.send({ error: error });
  }
};

const getTeacher = (req, res) => {
  const { username, password } = req.query;

  for (let i = 0; i < user.length; i++) {
    if (user[i].username === username && user[i].password === password) {
      return res.send({ "Teacher exists": user[i] });
    }
  }
  return res.send("No Teacher exists against such credentials");
};

/*const createTeacher = (req, res) => {
  try {
    const { username, password } = req.body;
    user.push({ username: username, password: password });
    return res.send({
      response: `Teacher created with username: ${req.body.username}`,
    });
  } catch (error) {
    return res.send({ error: error });
  }
};*/

const createTeacher = (req, res) => {
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
        response: `Teacher created with username: ${req.body.username}`,
      });
    }
    return res.send("Teacher already exists with such username");
  } catch (error) {
    return res.send({ error: error });
  }
};

/*const deleteTeacher = (req, res) => {
  try {
    const { username, password } = req.query;
    user.forEach((element, index) => {
      if (element.username == username && element.password == password) {
        user.splice(index, 1);
      }
    });
    return res.send({
      response: `Teacher deleted with username: ${req.query.username}`,
    });
  } catch (error) {
    return res.send({ error: error });
  }
};*/

const deleteTeacher = (req, res) => {
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
        response: `Teacher deleted with username: ${req.query.username}`,
      });
    }
    return res.send("Teacher does not exist");
  } catch (error) {
    return res.send({ error: error });
  }
};

module.exports = { getAllTeachers, getTeacher, createTeacher, deleteTeacher };
