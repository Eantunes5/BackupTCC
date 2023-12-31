import Rating from '../models/Rating.js';

const createService = (body) => Rating.create(body);

const findAllService = () => Rating.find();

const findByIdService = (id) => Rating.find({Locals_id: id});

const deleteService = (id) => Rating.deleteOne({_id: id});

export default {
  createService,
  findAllService,
  findByIdService,
  deleteService,
};