# Docker usage

## Build the image

```bash
cd mcp-server
# Skills are sourced from ../skills/ — copy them into the build context first
rm -rf skills && cp -R ../skills ./skills
docker build -t cleo-labs/skills-mcp:local .
```

## Run interactively

MCP servers communicate on stdio. To smoke-test the image, pipe a single `initialize` request and read the first response line:

```bash
echo '{"jsonrpc":"2.0","method":"initialize","id":1,"params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"1.0"}}}' \
  | docker run --rm -i cleo-labs/skills-mcp:local
```

## Wire into Claude Desktop via Docker

```json
{
  "mcpServers": {
    "cleo-skills": {
      "command": "docker",
      "args": ["run", "--rm", "-i", "cleo-labs/skills-mcp:local"]
    }
  }
}
```
