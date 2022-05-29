try{
   var Publications = require('../../src/models/Publications');
} catch(error) {
   console.log('Publications not found');
}
const assert = require('assert');

describe('Model Publications', () => {
   const {
      title,
      img,
      description,
      price,
      score,
      user,
      service
   } = Publications?.schema?.obj;

   beforeEach(async () => {
      await Publications?.deleteMany({});
   });

   it('Modelo Publications tiene un campo "title" de tipo String', () => {
      assert(title, 'No existe el campo "title"');
      assert(title?.type?.name === 'String', '"title" debe ser de tipo String');
   });

   it('Modelo Publications tiene un campo "img" de tipo String', () => {
      assert(img, 'No existe el campo "img"');
      assert(img?.type?.name === 'String', '"img" debe ser de tipo String');
   });

   it('Modelo Publications tiene un campo "description" de tipo String', () => {
      assert(description, 'No existe el campo "description"');
      assert(description?.type?.name === 'String', '"description" debe ser de tipo String');
   });

   it('Modelo Publications tiene un campo "price" de tipo Double', () => {
      assert(price, 'No existe el campo "price"');
      assert(price?.type?.name === 'Double', '"price" debe ser de tipo Double');
   });

   it('Modelo Publications tiene un campo "score" de tipo Double', () => {
      assert(score, 'No existe el campo "score"');
      assert(score?.type?.name === 'Double', '"score" debe ser de tipo Double');
   });

   it('Modelo Publications tiene un campo "user" de tipo ObjectId', () => {
      assert(user, 'No existe el campo "user"');
      assert(user?.type?.name === 'ObjectId', '"user" debe ser de tipo ObjectId');
   });

   it('Modelo Publications tiene un campo "user" que hace referencia al modelo User', () => {
      assert(user?.ref === 'User', '"user" debe referenciar a el modelo User');
   });

   it('"user" es requerido', (done) => {
      Publications?.create({ user: '', service: '62926fb4a8415ffb1bf2a4bc'})
         .then(() => done(new Error('"user" debe ser requerido')))
         .catch(error => done());
   });

   it('Modelo Publications tiene un campo "service" de tipo ObjectId', () => {
      assert(service, 'No existe el campo "service"');
      assert(service?.type?.name === 'ObjectId', '"service" debe ser de tipo ObjectId');
   });

   it('Modelo Publications tiene un campo "service" que hace referencia al modelo Services', () => {
      assert(service?.ref === 'Services', '"service" debe referenciar a el modelo Services');
   });

   it('"service" es requerido', (done) => {
      Publications?.create({ user:'62926fb4a8415ffb1bf2a4bc', service: ''})
         .then(() => done(new Error('"service" debe ser requerido')))
         .catch(error => done());
   });
});