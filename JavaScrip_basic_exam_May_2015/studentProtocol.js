function solve(array) {

    for (var i = 0; i < array.length; i++) {
        var line = array[i];
        line = line.replace(/\s\s+/g, ' ');
        var check  = line.match(/(\w*\s*\w*\s*)-\s*(\w+)\s*:\s*(\d*)/g);
        console.log(check);
    }
}

solve([ 'Peter Jackson - Java : 350',
    'Jane - JavaScript : 200',
    'Jane     -    JavaScript :     400',
    'Simon Cowell - PHP : 100',
    'Simon Cowell-PHP: 500',
    'Simon Cowell - PHP : 200' ]);
