
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
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


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

var array=['Read the task as many times you can.','Understand the steps.','Congrats you are a programmer.'];
function onDataReceived(text) {
  var lenght = text.length;
  //console.log(lenght)
  if (text.trim().slice(0,4)  === 'help'){
    help();
  }
  else if(text === 'list\n') {
    list();
  }
  else if(text.trim().slice(0,3)=== 'add'){
    add(text,lenght);
  }
  else if (text.trim().slice(0,6) === 'remove') {
    remove(text);
  }
  else if (text === 'quit\n') {
    quit();
  }
  else if(text === 'exit\n'){
    quit();
  }
  else if(text.trim().slice(0,5) === 'hello'){
    hello(text,lenght);
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
function hello(h,l){
  //console.log(l)
  console.log('hello'+h.trim().substring(5,l)+'!')
  //console.log(h.lenght)
}

/**
 * help function
 * Show all the possible commands in the application
 *
 * @returns {void}
 */
function help(){
  console.log('You have three commads as follow:\nhello\nquit\nexit')
}
/**
 * list function
 * Show all the tasks that you should be done!!!
 *
 * @returns {void}
 */
function list(t){
  for (var i=0 ;i<array.length;i++){
    console.log((i+1)*1+'-'+array[i])
  }}
  /**
 * add function
 * You add tasks by using this function to your task list 
 * 
 *
 * @returns {void}
 */
function add(a,l){
  if (l>5){
    array.push(a.trim().substring(4,l))
  }
  else{
    console.log('error')
  }
  
}

/**
 * remove function
 * you can remove the last or seconed or first task
 *
 * @returns {void}
 */
function remove(r){
  if(r=='remove\n'){
    array.splice(array.length-1,1)
  }
  else if (r.charAt(7)==1){
    array.splice(0,1)
  }
  else if (r.charAt(7)==2){
    array.splice(1,1)
  }
  else{
    unknownCommand(r)
  }
}
/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Basel")
