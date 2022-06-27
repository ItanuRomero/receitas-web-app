const Rating = require("../repositories/database/model/Rating");

module.exports = {
  async listAll(request, response) {
    try {
      const id = request.params.recipe_id;
      const ratings = await Rating.findAll({ where: { recipe_id: id } });

      response.status(200).json(ratings);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async add(request, response) {
    try {
      await Rating.create(request.body);
      
      response.status(202).json("Nota adicionada com sucesso");
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async update(request, response) {
    try {
      const { rating, user_id, recipe_id } = request.body;
      const id = request.params.recipe_id;
      const recipe = await Rating.findOne({ where: { recipe_id: id } });

      if (!recipe) {
        return response.status(404).json("Nota não encontrada");
      }

      recipe.rating = rating;
      recipe.user_id = user_id;
      recipe.recipe_id = recipe_id;

      await recipe.save();
      response.status(202).json("Nota atualizada com sucesso");
    } catch (error) {
      response.status(400).send(error);
    }
  },
};
