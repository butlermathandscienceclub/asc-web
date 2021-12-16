//server

express = require('express');
var fs = require('fs');

app = express();
app.set('veiw-engine', 'ejs')
bcrypt = require('bcrypt')
const PORT = 5000
app.use(express.urlencoded({ extended: false }))
var u = [ ];
app.get('/reg', (req, res)=>{
res.render('../login.ejs')});

app.get("/reg1",(req, res)=>{
	n = req.query.name;
	g = Number(req.query.group);
	u.push({name:n,group:g})
	console.log(u)
	

fs.appendFile('users.txt', `name=${n} group=${g}`, function (err) {
  if (err) throw err;
  console.log('Saved!');
});

	res.end();

}
);



app.get('/h', (req, res)=>{
res.end("")
});


	
app.listen(PORT);
  console.log("go on port "+PORT)
