import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM users";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO users(`username`, `fullname`, `email`, `telefone`) VALUES(?)";

  const values = [
    req.body.username,
    req.body.fullname,
    req.body.email,
    req.body.telefone,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com Sucesso!");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE users SET `username` = ?, `fullname` = ?, `email` = ?, `telefone` = ? WHERE `id` = ?";

  const values = [
    req.body.username,
    req.body.fullname,
    req.body.email,
    req.body.telefone,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso!");
  });
};
export const deleteUser = (req, res) => {
  const q =
    "DELETE FROM users WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso!");
  });
};