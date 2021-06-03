const Card = require('../models/card');
const BadRequestError = require('../middlewares/errors/BadRequestError');
const NotFoundError = require('../middlewares/errors/NotFoundError');
const ForbiddenError = require('../middlewares/errors/ForbiddenError');

function getCards(req, res, next) {
  return Card.find({})
    .then((cards) => {
      res.send(cards);
    })
    .catch(next);
}

function createCard(req, res, next) {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => {
      if (!card) {
        throw new BadRequestError('Card validation failed');
      }
      res.send(card);
    })
    .catch(next);
}

function deleteCard(req, res, next) {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('The requested card was not found');
      }
      if (card.owner !== req.user._id) {
        throw new ForbiddenError('You are not authorized to delete this card');
      }
      res.send(card);
    })
    .catch(next);
}

function addCardLike(req, res, next) {
  const user = req.user._id;
  Card.findById(req.params.cardId)
    .then((card) => {
      if (card.likes.includes(user)) {
        throw new BadRequestError('You already like this card');
      }
      Card.findByIdAndUpdate(req.params.cardId, { $addToSet: { likes: user } }, { new: true })
        // eslint-disable-next-line no-shadow
        .then((card) => res.send(card));
    })
    .catch(next);
}

function removeCardLike(req, res, next) {
  const user = req.user._id;
  Card.findById(req.params.cardId)
    .then((card) => {
      if (!card.likes.includes(user)) {
        throw new BadRequestError('You already do not like this card');
      }
      Card.findByIdAndUpdate(card._id, { $pull: { likes: user } }, { new: true })
        // eslint-disable-next-line no-shadow
        .then((card) => res.send(card));
    })
    .catch(next);
}

module.exports = {
  getCards,
  createCard,
  deleteCard,
  addCardLike,
  removeCardLike,
};
