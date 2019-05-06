let express = require("express");
let app = express();
let multer = require("multer");
let upload = multer();
let cors = require("cors");
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use("/", express.static(__dirname + "/public"));

let passwords = {}; //associates a username with a password
let sessions = {}; //associates a session id to a username
let usersItems = {}; //associates an username to a list of item ids
let itemDescriptions = {}; // associates an item id to its descriptions

let genID = function() {
  return Math.floor(Math.random() * 1000000000000);
};
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
    res.send("<html><body> invalid username or password</body></html>");
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
