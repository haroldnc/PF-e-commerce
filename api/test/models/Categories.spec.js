try{
   var Categories = require('../../src/models/Categories');
} catch(error) {
   console.log('Categories not found');
}
const assert = require('assert');

describe('Model Categories', () => {
   const {
      name,
      img,
      phrase
   } = Categories?.schema?.obj;

   beforeEach(async () => {
      await Categories?.deleteMany({});
   });

   it('Modelo Categories tiene un campo "name" de tipo String', () => {
      assert(name);
      assert(name?.type?.name === 'String');
   });

   it('Modelo Categories tiene un campo "img" de tipo String', () => {
      assert(img);
      assert(img?.type?.name === 'String');
   });

   it('Modelo Categories tiene un campo "phrase" de tipo String', () => {
      assert(phrase);
      assert(phrase?.type?.name === 'String');
   });

   it('"name" es requerido', (done) => {
      Categories?.create({ name: ''})
         .then(() => done(new Error('"name" debe ser requerido')))
         .catch(error => done());
   });
   
   it('Name solo debe permitir letras y espacios', async () => {
      const arr = ['Rol0', 'Rol1', 'Rol2', 'Rol3', 'Rol4', 'Rol5', 'Rol6', 'Rol7', 'Rol8', 'Rol9', 'Rol"','ro$','ro%','ro&','ro#','ro@','ro/',
      'ro(','ro)','ro=','ro?','ro¿','ro¡','ro!'];

      await Promise.all([
         Categories?.create({ name: 'abcdefghijklmnopqrstuvwxyzáéíóúñ ' }),
         Categories?.create({ name: 'ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÑ ' })
      ])

      try{
         await Promise.all(arr.map(e => Categories?.create({ name: e })))
         
         throw new Error('"name" no debe aceptar caracteres que no sean letras');
      } catch(error) {
         assert(true);
      }
   });

   it('"name" debe permitir como mínimo 3 caracteres', async () => {
      try{
         await Promise.all([
            Categories?.create({ name: 'a' }),
            Categories?.create({ name: 'aa' })
         ]);
         assert(false)
      } catch(error){
         assert(true)
      }
   });

   it('"img" debe ser una url de tipo imagen', async () => {
      await Promise.all([
         Categories?.create({ name: 'aaa', img: 'http://algo.com/imagen.jpg' }),
         Categories?.create({ name: 'aab', img: 'http://algo.com/imagen.png' }),
         Categories?.create({ name: 'aac', img: 'http://algo.com/imagen.jpeg' }),
         Categories?.create({ name: 'aad', img: 'http://algo.com/imagen.gif' }),
         Categories?.create({ name: 'aae', img: 'http://algo.com/imagen.svg' })
      ])

      try{
         await Promise.all([
            Categories?.create({ name: 'aaf', img: 'http://algo.com/imagen' }),
            Categories?.create({ name: 'aag', img: 'http://algo.com/imagen.html' }),
            Categories?.create({ name: 'aah', img: 'http://algo.com' })
         ]);

         throw new Error('"img" debe ser del tipo url image');
      } catch(error) {
         assert(true);
      }
   });
});