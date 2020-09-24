const User = require("../models/user.model");
const _ = require("lodash");

const Counter = require("../models/Counter.model");

class UserCtrl {
  create(req, res) {
    const user = req.body;

    Counter.findOne({ type: "user" }).then(result => {
      user.id = result.count + 1;

      const staff = new User(user);
      staff
        .save()
        .then(result => {
          Counter.update(
            { type: "user" },
            { $inc: { count: 1 } },
            (err, ress) => {
              console.log("counter updated", ress); //to update counter and print in console
            }
          ); //to increament counter
          res.status(200).send(result);
        })
        .catch(err => {
          res
            .status(500)
            .send({ message: "could not create user", error: err });
        });
    });
  }

  getAll(req, res) {
    User.find()

      .then(result => {
        res.status(200).send(
          _.map(result, user => {
            return _.pick(user, ["id", "name", "message", "email"]);
          })
        );
      })
      .catch(err => {
        res.status(400).send({ message: "records not found", error: err });
      });
  }
}
module.exports = UserCtrl;
