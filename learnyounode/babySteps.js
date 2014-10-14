var length = process.argv.length;
var index = 2;

var sum = 0;
while(index<length){
    var element = process.argv[index]*1;
    sum += element;
    index++;
}

console.log(sum);

