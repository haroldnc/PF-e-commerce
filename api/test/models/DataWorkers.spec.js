try{
   var DataWorkers = require('../../src/models/DataWorkers');
} catch(error) {
   console.log('DataWorkers not found');
}
const assert = require('assert');

describe('Model DataWorkers  (ningún campo es requerido)', () => {
   const {
      title,
      aboutMe,
      textInfo,
      languages,
      skills,
      pricePerHour,
      workExperience,
      certifications,
      user
   } = DataWorkers?.schema?.obj;

   beforeEach(async () => {
      await DataWorkers?.deleteMany({});
   });

   it('Modelo DataWorkers tiene un campo "title" de tipo String', () => {
      assert(title, 'No existe el campo "title"');
      assert(title?.type?.name === 'String', '"title" debe ser de tipo String');
   });

   it('Modelo DataWorkers tiene un campo "aboutMe" de tipo String', () => {
      assert(aboutMe, 'No existe el campo "aboutMe"');
      assert(aboutMe?.type?.name === 'String', '"aboutMe" debe ser de tipo String');
   });

   it('Modelo DataWorkers tiene un campo "textInfo" de tipo String', () => {
      assert(textInfo, 'No existe el campo "textInfo"');
      assert(textInfo?.type?.name === 'String', '"textInfo" debe ser de tipo String');
   });

   it('Modelo DataWorkers tiene un campo "languages" de tipo ARRAY de Strings', () => {
      assert(languages, 'No existe el campo "languages"');
      assert(Array.isArray(languages), '"languages" debe ser un array');
      assert(languages[0]?.type?.name === 'String', '"languages" debe ser de tipo String');
   });

   it('Modelo DataWorkers tiene un campo "skills" de tipo ARRAY de Strings', () => {
      assert(skills, 'No existe el campo "skills"');
      assert(Array.isArray(skills), '"skills" debe ser un array');
      assert(skills[0]?.type?.name === 'String', '"skills" debe ser de tipo String');
   });

   it('Modelo DataWorkers tiene un campo "pricePerHour" de tipo Double', () => {
      assert(pricePerHour, 'No existe el campo "pricePerHour"');
      assert(pricePerHour?.type?.name === 'Double', '"pricePerHour" debe ser de tipo Double');
   });

   it('Modelo DataWorkers tiene un campo "workExperience" es un ARRAY', () => {
      assert(workExperience, 'No existe el campo "workExperience"');
      assert(Array.isArray(workExperience), '"workExperience" debe ser un array');
   });

   it('Modelo DataWorkers tiene un campo "workExperience" con un subcampo "company" de tipo String', () => {
      assert(workExperience[0]?.company, 'No existe el subcampo "company"');
      assert(workExperience[0]?.company?.type?.name === 'String', '"company" debe ser de tipo String');
   });

   it('Modelo DataWorkers tiene un campo "workExperience" con un subcampo "position" de tipo String', () => {
      assert(workExperience[0]?.position, 'No existe el subcampo "position"');
      assert(workExperience[0]?.position?.type?.name === 'String', '"position" debe ser de tipo String');
   });

   it('Modelo DataWorkers tiene un campo "workExperience" con un subcampo "description" de tipo String', () => {
      assert(workExperience[0]?.description, 'No existe el subcampo "description"');
      assert(workExperience[0]?.description?.type?.name === 'String', '"description" debe ser de tipo String');
   });

   it('Modelo DataWorkers tiene un campo "certifications" es un ARRAY', () => {
      assert(certifications, 'No existe el campo "certifications"');
      assert(Array.isArray(certifications), '"certifications" debe ser un array');
   });

   it('Modelo DataWorkers tiene un campo "certifications" con un subcampo "title" de tipo String', () => {
      assert(certifications[0]?.title, 'No existe el subcampo "title"');
      assert(certifications[0]?.title?.type?.name === 'String', '"title" debe ser de tipo String');
   });

   it('Modelo DataWorkers tiene un campo "certifications" con un subcampo "img" de tipo String', () => {
      assert(certifications[0]?.img, 'No existe el subcampo "img"');
      assert(certifications[0]?.img?.type?.name === 'String', '"img" debe ser de tipo String');
   });

   it('Modelo DataWorkers tiene un campo "user" de tipo ObjectId', () => {
      assert(user, 'No existe el campo "user"');
      assert(user?.type?.name === 'ObjectId', '"user" debe ser de tipo ObjectId');
   });

   it('Modelo DataWorkers tiene un campo "user" que hace referencia al modelo User', () => {
      assert(user?.ref === 'User', '"user" debe referenciar a el modelo User');
   });

   it('"user" es requerido', (done) => {
      DataWorkers?.create({ user: ''})
         .then(() => done(new Error('"user" debe ser requerido')))
         .catch(error => done());
   });
});