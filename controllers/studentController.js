const user = [];

const getAllStudents = (req, res) => {
  try {
    return res.send({
      response: user,
    });
  } catch (error) {
    return res.send({ error: error });
  }
};

const getStudent = (req, res) => {
  const { username, password } = req.query;

  for (let i = 0; i < user.length; i++) {
    if (user[i].username === username && user[i].password === password) {
      return res.send({ "Student exists": user[i] });
    }
  }
  return res.send("No Student exists with such credentials");
};

const createStudent = (req, res) => {
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
        response: `Student created with username: ${req.body.username}`,
      });
    }
    return res.send("Student already exists with such username");
  } catch (error) {
    return res.send({ error: error });
  }
};

const deleteStudent = (req, res) => {
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
        response: `Student deleted with username: ${req.query.username}`,
      });
    }
    return res.send("Student does not exist");
  } catch (error) {
    return res.send({ error: error });
  }
};

module.exports = { getAllStudents, getStudent, createStudent, deleteStudent };
