window.addEventListener("load", function(){
    let myFirstNumber = 3;
    const mySecondNumber = 10.25;
    console.log(myFirstNumber, mySecondNumber);

    myFirstNumber++;
    console.log(myFirstNumber);

    myThirdNumber = myFirstNumber + 7;
    myFourthNumber = mySecondNumber - myFirstNumber;
    console.log(myThirdNumber, myFourthNumber);

    //Exercise Three
    const strHello = "Hello";
    const strWorld = "World";
    const name = "Ben";
    const age = 21;
    const favoriteFood = "Lasagne";
    const helloWorld = strHello + " " + strWorld;
    console.log(helloWorld);

    const sentence = `Welcome and ${strHello} everyone, my name is ${name} and my favorite food is ${favoriteFood}`;
    console.log(sentence);

    


});