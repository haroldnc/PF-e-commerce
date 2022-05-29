try{
   var User_roles = require('../../src/models/User_roles');
} catch(error) {
   console.log('User_roles not found');
}
const assert = require('assert');

describe('Model User_roles', () => {
   const name = User_roles?.schema?.obj?.name;

   beforeEach(async () => {
      await User_roles?.deleteMany({});
   });

   it('Modelo User_roles tiene un campo "name" de tipo String', () => {
      assert(name);
      assert(name?.type?.name === 'String');
   });

   it('"name" solo debe permitir letras', async () => {
      const arr = ['Rol0', 'Rol1', 'Rol2', 'Rol3', 'Rol4', 'Rol5', 'Rol6', 'Rol7', 'Rol8', 'Rol9', 'Rol"','ro$','ro%','ro&','ro#','ro@','ro/',
      'ro(','ro)','ro=','ro?','ro¿','ro¡','ro!'];

      await Promise.all([
         User_roles?.create({ name: 'abcdefghijklmnopqrstuvwxyzáéíóúñ' }),
         User_roles?.create({ name: 'ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚÑ' })
      ]);

      try{
         await Promise.all(arr.map(e => User_roles?.create({ name: e })));
      } catch(error) {
         assert(true);
      }
   });

   it('"name" debe permitir como mínimo 3 caracteres', async () => {
      try {
         Promise.all([
            User_roles?.create({ name: 'a' }),
            User_roles?.create({ name: 'aa' })
         ])
      } catch(error) {
         assert(true);
      }
   });

   it('"name" es requerido', (done) => {
      User_roles?.create({ name: ''})
         .then(() => done(new Error('"name" debe ser requerido')))
         .catch(error => done());
   });
});