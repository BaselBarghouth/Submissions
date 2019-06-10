/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */


/* define the path if it exist or not */
var path;
    if(process.argv[2]){
         path = process.argv[2];
    }
    else{
         path = 'database.json';
    }

var fs=require('fs');
// task = JSON.parse(loading('database.json'));
  


function startApp(name){
    if(!fs.existsSync(path)){
        storeData(array,path);
        }
   array= JSON.parse(loading(path));
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")

  
   
   
}
 //  load data from  database.json
 const loading = (path) => {
    try {
      return fs.readFileSync(path, 'utf8')
    }
     catch (err) {
      console.error(err)
      return false
    }
  }

//  save data in database.json when i type exit or quit.
const storeData = (data, path) => {
    try {
      fs.writeFileSync(path, JSON.stringify(data))
    } catch (err) {
      console.error(err)
    }
  }
// function startApp(name){
//   process.stdin.resume();
//   process.stdin.setEncoding('utf8');
//   process.stdin.on('data', onDataReceived);
//   console.log(`Welcome to ${name}'s application!`)
//   console.log("--------------------")
// }


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
// var array = ['task','task','task']
var array = [{task:'task',done:'false'},{task:'task',done:'false'},{task:'task',done:'false'}]
array[0].done == true ?  "do something"  :  "do nothing"

function onDataReceived(text) {
  var input=text.trim().split(' ')
  if (text === 'quit\n'|| text === 'exit\n') {
    quit();
  }
  else if(input[0] === 'hello'){
    hello(input);
  }
  else if(input[0] === 'list'){
    list(input);
  }
  else if(input[0] === 'help'){
    help(input);
  }
  else if(input[0] === 'remove'){
    remove(input);
  }
  else if(input[0] === 'edit'){
    edit(input);
  }
  else if(input[0] === 'add'){
    add(input);
  }
  else if(input[0] === 'check'){
    check(input);
  }
  else if(input[0] === 'uncheck'){
    uncheck(input);
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(h){
  //console.log(h.length)
  if (h.length==1){
    console.log('hello!')
  }
  else if(h.length>1){
    console.log('hello'+' '+ h.slice(1).join(' ')+'!')
  }
  
}
/**
 * Gives you the commends that you have
 *
 * @returns {void}
 */
function help(h){
  console.log("That is the command:")
  if (h.length==1){
    console.log('hello\nexit\nquit\nhelp\nremove\nadd\n')
  }
  else if(h.length>1){
    console.log('hello\nexit\nquit\nhelp\nremove\nadd\n')
  }
  //console.log('hello\nexit\nquit\nhelp')
}
/**
 * Gives you the commends that you have
 *
 * @returns {void}
 */
function list(){
  for(var i = 0;i<array.length;i++){
    if(array[i].done=='true'){
    console.log((i+1)+'-'+" [✓] " +array[i].task);
 }
 else{
     console.log((i+1)+'-'+" "+ "[ ]" +array[i].task);
 }
    
  }
}
/**
 * Gives you the commends that you have
 *
 * @returns {void}
 */
function add(a){
  if(a.length==1){
    console.log('error')
  }
  else{
    array.push({task:a.slice(1).join(' ').trim(),done:'false'})
  }
}
/**
 * Gives you the commends that you have
 *
 * @returns {void}
 */
function remove(r){
  var number = r[1];
  if(r.length==1){
    array.pop()
  }
  else if(number<=array.length){
 
   array.splice(number-1,1)
   
 }
 else {
   console.log('enter the right number of task')
 }
}
/**
 * Gives you the commends that you have
 *
 * @returns {void}
 */
function edit(e){
  var number=e[1];
  if(e.length==1){
    console.log('error')
  }
  else if (number<=array.length){ 
      array[number-1].task = e[2]
  }
  else{
    console.log('enter the right number of task')
  }
}
/**
 * Gives you the commends that you have
 *
 * @returns {void}
 */
function check(c){
  var number=c[1];
  if(c.length==1){
    console.log('error')
  }
  else if (number<=array.length){
    array[number-1].done='true'
    //array[number-1].task= array[number-1].task.replace('[]','[✓]')
  }
  else{
    console.log('enter the right number')
  }
}
function uncheck(c){
  var number=c[1];
  if(c.length==1){
    console.log('error')
  }
  else if (number<=array.length){
    array[number-1].done='false'
    //array[number-1].task= array[number-1].task.replace('[✓]','[]')
  }
  else{
    console.log('enter the right number')
  }
}
/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  storeData(array, path) ;
  process.exit();
}

// The following line starts the application
startApp("Basel")
