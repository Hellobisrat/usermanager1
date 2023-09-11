const express = require('express');
const exphbs = require('express-handlebars')
const app = express();
const port = process.env.PORT || 5000;
const hbs = exphbs.create({});
const router = require('./routes/index.js')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
;
app.use('/',router)





app.listen(port,()=>{
  console.log(`server start listening http://localhost:${port}`)
})