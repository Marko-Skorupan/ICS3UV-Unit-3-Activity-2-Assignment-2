/**
 * @author Marko Skorupan
 * @version 1.0.0
 * @date 2025-11-20
 * @fileoverview " Convert user entered cents into dollars plus remaining cents."
 */

//INPUT
//Ask user for amount of cents
let cents = Number(prompt("Input the cents: "));

//PROCESS
//Convert cents to dollars and cents
let dollars = Math.floor(cents/100);
let leftover = cents % 100;

//OUTPUT
//Display new results
console.log(`That is ${dollars} dollars and ${leftover} cents`);

console.log("\nDone.")