const TheatreService = require("../services/theatre.service");
const {
  createTheatreValidationSchema,
} = require("../lib/validators/theatre.validators");
async function getAllTheatres(req, res) {
  const theatres = await TheatreService.getAll();
  return res.json({ data: theatres });
}

async function createTheatre(req, res) {
  const validationStatus = await createTheatreValidationSchema.safeParse(
    req.body
  );

  if (validationStatus.error)
    return res.status(400).json({ error: validationStatus.error });

  const theatre = await TheatreService.create(validationStatus.data);

  return res.status(201).json({ status: "success", data: theatre });
}

module.exports = { getAllTheatres, createTheatre };
