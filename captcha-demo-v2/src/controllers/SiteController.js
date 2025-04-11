class SiteController {
  async welcome(req, res, next) {
    res.render("welcome");
  }

  async index(req, res, next) {
    res.render("home");
  }
}

module.exports = new SiteController();
