const express = require ( 'express' );

const app = express ()
const  PORT = 8000

app.get ( '/' , ( req, res ) => {   res. send ( ' Hello World' ) });
app.get ( '/ about ' , ( req, res ) => {   res. send ( 'О маршруте 🎉' ) });
app.listen ( PORT , () => { console.log ( `✅ Сервер работает на порту $ { PORT } ` ) ; })





