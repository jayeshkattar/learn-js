function* sayHiGenerator(){
    yield 'hey';
    yield 'hello';
    return 'hi generator';
}

const resultgenerator = sayHiGenerator();
console.log(resultgenerator);   //Iterator 
//From a generator, we can return multiple values which unable from function

console.log(resultgenerator.next());  

const resultgeneratorForOf = sayHiGenerator()
for(const iterator of resultgeneratorForOf) {
    console.log(iterator);
}

//yield also allows to putin value from outside. 
function* newgenerator() {
    yield 'something'
    const final = yield 'get a value'
    yield final
    return 'returned all'
}

const generatorIt = newgenerator()
console.log(generatorIt.next())
console.log(generatorIt.next())
console.log(generatorIt.next('hello'))
console.log(generatorIt.next())


