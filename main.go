// built in func approach 
package main

import (
	"fmt"
	"regexp"
	"strings"
)

func countWordByBuiltIn(text string) map[string]int {
	text = strings.ToLower(text)
	re := regexp.MustCompile(`[^\w\s]`)
	text = re.ReplaceAllString(text, "")

	words := strings.Fields(text)

	frequency := make(map[string]int)
	for _, word := range words {
		frequency[word]++
	}

	return frequency
}

func main() {
	text := "Four, One two two three Three three four  four   four"
	frequency := countWordByBuiltIn(text)

	for word, count := range frequency {
		fmt.Printf("%s => %d\n", word, count)
	}
}
