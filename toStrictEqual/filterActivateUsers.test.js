const {filterActivateUsers} = require('./filterActivateUsers');

describe('Filtrar Usuarios Activos', ()=>{
    test('Happy path: Usuarios Filtrados Correctamente', () => {
        const users = [
            {id: 1, username: "higueraf", activate: true},
            {id: 2, username: "lopezp", activate: false},
            {id: 3, username: "hernandezt", activate: true}
        ]
        const response = filterActivateUsers(users);
        const expectedUsers = [
            {id: 1, username: "higueraf", activate: true},
            {id: 3, username: "hernandezt", activate: true}
        ] 
        expect(response).toStrictEqual(expectedUsers)
    });
    test('Sad path: Diferencia tipos en objetos', () => {
        const users = [
            {id: 1, username: "higueraf", activate: true},
            {id: 2, username: "lopezp", activate: false},
        ]
        const response = filterActivateUsers(users);
        const expectedUsers = [
            {id: 1, username: "higuera", activate: true}
        ] 
        expect(response).toStrictEqual(expectedUsers)
    });
});
