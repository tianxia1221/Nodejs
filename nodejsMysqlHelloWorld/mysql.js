// //连接数据库
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'db address:localhost',
//     user: 'db user name',
//     password: 'password',
//     database:'db'
// });

// connection.connect();
// //查询
// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//     if (err) throw err;
//     console.log('The solution is: ', rows[0].solution);
// });
// //关闭连接
// connection.end();
var mysql = require('mysql');  
      
// var TEST_DATABASE = 'mysql';  
// var TEST_TABLE = 'user';  
var TEST_DATABASE = 'tx';  
var TEST_TABLE = 'product';    
//创建连接  
var client = mysql.createConnection({  
  user: 'root',  
  password: '111111',  
});  

client.connect();
client.query("use " + TEST_DATABASE);
//var sql = 'INSERT INTO product(uuid, name, price)';
client.query(  
  'SELECT * FROM '+TEST_TABLE,  
  function selectCb(err, results, fields) {  
    if (err) {  
      throw err; 
    }  
      
      if(results)
      {
          for(var i = 0; i < results.length; i++)
          {
             // console.log("%s\t%s\t%s", results[i].Host, results[i].User, results[i].Select_priv);
             console.log("%s\t%s\t%s", results[i].name, results[i].price);
          }
      }    
    client.end();  
  }  
);