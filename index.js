
const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");




const db = mysql.createConnection(
    {
      host: 'localhost',
      port:3306,
      // MySQL username,
      user: 'root',
      password: 'joel1723',
      database: 'employee_db'
    },
  
    console.log(`Connected to the inventory_db database.`)
  );


  db.connect(function(err){
      if (err) throw err ;
      console.log("connected to db")
  })


  function start (){
      inquirer.prompt(
          [
              {
                 type:"list",
                 name:'choice',
                 message:"what would you like to do?" ,
                 choices:["add department","delete dpartment","view department"
                ]
              }
          ]
      ).then(data=>{
          if(data.choice==="add department"){
              //call add department function
          }
          if(data.choice)
      })
  }