module.exports = (app) => {
  app.get("mohamed-test", (req, res) => {
    res.send("Hello world,This is an excellent route written by the Mo!");
  });
};