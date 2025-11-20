/*
 * @author Marko Skorupan
 * @version 1.0.0
 * @date 2025-11-12
 * @fileoverview "Convert user entered cents into dollars plus remaining cents."
 */

package main

import "fmt"

func main() {
	var cents int
	fmt.Print("Input the cents: ")
	fmt.Scan(&cents)

	dollars := cents / 100
	leftover := cents % 100

	fmt.Printf("That is %d dollars and %d cents\n", dollars, leftover)
}
