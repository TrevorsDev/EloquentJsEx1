console.log("using a while loop");
let call = "#";

while (call.length <= 7) {
  call = call + "#";
  console.log(call);
}


console.log('Using a for loop to solve this problem. I need to be careful not to prepend the "#" to the calling variable as this will create an infinite loop. Im not sure why though.');
for (let calling = "#"; calling.length <= 7; calling = calling + "#") {
  console.log(calling);
}