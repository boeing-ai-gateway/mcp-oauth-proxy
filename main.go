package main

import (
	"fmt"
	"os"

	"github.com/boeing-ai-gateway/mcp-oauth-proxy/cmd"
)

func main() {
	if err := cmd.Execute(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}
