
function calculatePow(num, pow){
    // declaring calculatePow function with two parameters num and pow
   if(pow === 0) {
    // checking the pow is above zero other wise return 1
    return 1
   }
   else{
    return num * calculatePow(num, pow-1)
    // if pow is greater than zero then using recursion it call the function until the pow become zero then return num
   }
}

document.getElementById("btn").addEventListener("click", function(){
    // add eventlistner at the calculate button

    let number = Number(document.getElementById("num").value)
    // accessing value of num from user and store it into  a variable number

    let power = Number(document.getElementById("inpow").value)
    // accessing value of inpow from user and store it into a variable power

    let container = document.getElementById("container")
    // accessing container element

    let result =  calculatePow(number, power)
    //  here calling the above declared calculatPow function , number and power as arguments and store the return value to result

    container.textContent = result
    // displaying the result

})