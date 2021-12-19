function main(){
var comps_are_up = true;
var rank_is_up = true;



express = require('express');
const fs = require('fs');
const readline = require('readline');
app = express();
app.set('veiw-engine', 'ejs')
const PORT = 5000
app.use(express.urlencoded({ extended: false }))
var u = [ ];
app.get('/',(req,res)=>{
	res.render("../home.ejs");
	res.end();
})
app.get('/reg', (req, res)=>{
res.render('../reg.ejs')});
app.get("/reg1",(req, res)=>{
	n = req.query.name;
	g = Number(req.query.group);
	u.push({name:n,group:g})
	console.log(u)
fs.appendFile('users.txt', `name=${n} group=${g} \n`, function (err) {
  if (err){ throw err; console.log(err)}
  console.log('Saved!');
});
res.render("../logedin.ejs" ,{name:n});
	res.end();
}
);
app.get('/rank', (req, res)=>{
	if(rank_is_up)
	{
	res.render("../rank.ejs")
	res.end("")
	}
	else
	{
		res.end("<h1>competetions not complete </h1>")
	}
});
app.get("/comps", (req,res)=>{
	if(comps_are_up){
	 res.render("../getcomp.ejs")
	 res.end("")
	}
	else{
		res.end("competetions not ready, come back later")
	}
});
app.listen(PORT);
  console.log("go on port "+PORT)
 
 return true
}
const args = process.argv.slice(2)
if(args[0] == "go"){
	main();
}
exports.main = main;
