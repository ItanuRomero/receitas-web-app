const Favourite = require("../repositories/database/model/Favourite");

module.exports = {
  async listAll(request, response) {
    try {
      const id = request.params.recipe_id;
      const favourites = await Favourite.findAll({ where: { recipe_id: id } });

      response.status(200).json(favourites);
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async add(request, response) {
    try {
      await Favourite.create(request.body);
      response.status(200).json("product inserted!!");
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
};
