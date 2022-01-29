var comps_are_up = true;
var rank_is_up = true;

express = require('express');
const fs = require('fs');
const readline = require('readline');
app = express();
app.disable('x-powered-by');
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
app.get('/scramble',(req, res)=>{
	var move_list = ["F " ,"F' ", "U " , "U' ","R ","R' ", "L " ,"L' ",]
	function rand_array(items){
		var ret_array = "";
		for(var c=0; c<20 ; c++){
			var item = items[Math.floor(Math.random()*items.length)];
			ret_array += (item)
		}
		return ret_array;
	}


	res.write(` 1. ${rand_array(move_list)} \n 2. ${rand_array(move_list)} \n 3. ${rand_array(move_list)} \n 4. ${rand_array(move_list)} \n 5. ${rand_array(move_list)}`)
	res.end();
})
app.listen(PORT);
  console.log("go on http://localhost:"+PORT)

