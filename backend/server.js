let express = require("express");
let app = express();
let multer = require("multer");
let upload = multer();
let ObjectID = require("mongodb").ObjectID;
let cors = require("cors");
let MongoClient = require("mongodb").MongoClient;
let url =
  "mongodb+srv://pauljeambrun:Hormadi64@paul-database-pvljy.mongodb.net/test?retryWrites=true";
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use("/images", express.static(__dirname + "/images"));

let passwords = {}; //associates a username with a password
let sessions = {}; //associates a session id to a username
let usersItems = {}; //associates an username to a list of item ids
let itemDescriptions = {}; // associates an item id to its descriptions

let genID = function() {
  return Math.floor(Math.random() * 1000000000000);
};

app.get("/items", (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    console.log(url, err);
    let dbi = db.db("ItemsAlibay"); //calling our database variable dbi (database Items)
    dbi
      .collection("everythingyouneedtoknow")
      .find({})
      .toArray((err, result) => {
        if (err) throw err;
        let itemDetails = result;
        db.close();
        res.send(JSON.stringify({ status: true, itemDetails }));
      });
  });
});

app.post("/ItemDetails", upload.none(), (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbi = db.db("ItemsAlibay");
    let result = dbi
      .collection("everythingyouneedtoknow")
      .findOne({ _id: ObjectID(req.body.id) });
    {
      console.log(result);
      // let results = function() {
      //   if (item._id === undefined) throw err;
      //   item._id = req.body._id;
      //   return item[_id];
      // };
      db.close();
      res.send(JSON.stringify({ status: true, result }));
    }
  });
});

app.post("/category", (req, res) => {
  let categorySearch = req.query.category;
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbi = db.db("ItemsAlibay");
    let query = {
      category: categorySearch
    };
    dbi
      .collection("details")
      .find(query)
      .toArray((err, result) => {
        if (err) throw err;
        let itemDetails = result;
        console.log(result);
        db.close();
        res.send(JSON.stringify({ status: true, itemDetails }));
      });
  });
});
app.post("/newItem", upload.none(), (req, res) => {
  // let { name, price, description, category } = req.body;
  // console.log(req.body);
  // let newItem = {};
  // newItem.name = name;
  // newItem[price] = body.price;
  // newItem[description] = body.description;
  // newItem[category] = body.category;
  let newItem = req.body;
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("ItemsAlibay");
    dbo
      .collection("everythingyouneedtoknow")
      .insertOne(newItem, (err, result) => {
        if (err) throw err;
        console.log("success");
        db.close;
        res.send(JSON.stringify({ status: true, message: "new item created" }));
      });
  });
});

app.post("/signup", upload.none(), function(req, res) {
  console.log("/signup", req.body);
  let username = req.body.username;
  let password = req.body.password;
  passwords[username] = password;
  console.log("signup successful" + username + password);
  res.send("signup successful");
});
app.post("/login", upload.none(), function(req, res) {
  console.log("hello");
  let username = req.body.username;
  let passwordGiven = req.body.password;
  let expectedPassword = passwords[username];

  if (expectedPassword !== passwordGiven) {
    console.log("wrong password");
    res.send(JSON.stringify({ success: false }));
    return;
  }
  console.log("correct password");
  let sessionID = genID();
  sessions[sessionID] = username;
  res.cookie("id", sessionID);
  res.send(
    JSON.stringify({
      success: true
    })
  );
});

app.post("logout", upload.none(), function(res, req) {
  let sessionID = req.cookies.sessionID;
  delete sessions[sessionID];
  res.send("success!");
});

app.post("/addItem", upload.none(), function(req, res) {
  let sessionID = req.body.sessionID;
  let itemPrice = req.body.price;
  let description = req.body.description;
  let itemID = genID();
  itemDescriptions[itemID] = {
    description: description,
    price: itemPrice
  };
  let username = sessions[sessionID];
  if (usersItems[username] === undefined) {
    usersItems[username] = [];
  }
  usersItems[username] = usersItems[username].concat(itemID);
  res.send({ success: true });
});

app.listen(4000, function() {
  console.log("listening on port 4000");
});
