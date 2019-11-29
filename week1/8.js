let a = 22;
let b = 'abdo';
let c = 16.5;
let d = true;

console.log(a+' '+b+" "+c+" "+d);

switch (a,b,c) {
    case typeof(a) == typeof(b):
        
        console.log('a is in b type');
        break;

    case typeof(a) == typeof(c):

        console.log('a is in c type');
        break;
    
    case typeof(a) == typeof(d):

        console.log('a is in d type');
        break;

    case typeof(b) == typeof(c):

        console.log('b is in c type');
        break;

    case typeof(b) == typeof(d):

        console.log('b is in d type');
        break;

    case typeof(c) == typeof(d):

        console.log('c is in d type');
        break;

    default:
        console.log('none is in each type!')
        break;
}
