import { homepage, saveStudent, updateStudent, removeUser, removeAllUser, searchUser, showAllUser } from './controller.js';

const router = (app) => {
    app.get('/', homepage);
    app.post('/save-student', saveStudent);
    app.post('/update', updateStudent);
    app.post('/remove-user', removeUser);
    app.post('/remove-all-user', removeAllUser);
    app.get('/user', searchUser);
    app.get('/members', showAllUser);
};

export default router;