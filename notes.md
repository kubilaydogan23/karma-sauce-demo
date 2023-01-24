### Global options

- `username` your BS username, you can also use `BROWSER_STACK_USERNAME` env variable.
- `accessKey` your BS access key, you can also use `BROWSER_STACK_ACCESS_KEY` env variable.
- `startTunnel` do you wanna establish the BrowserStack tunnel ? (defaults to `true`)
- `tunnelIdentifier` in case you want to start the BrowserStack tunnel outside `karma` by setting `startTunnel` to `false`, set the identifier passed to the `-localIdentifier` option here (optional)
- `retryLimit` how many times do you want to retry to capture the browser ? (defaults to `3`)
- `captureTimeout` the browser capture timeout (defaults to `120`)
- `timeout` the BS worker timeout (defaults to `300`
- `build` the BS worker build name (optional)
- `name` the BS worker name (optional)
- `project` the BS worker project name (optional)
- `binaryBasePath` the BS binary base bath, you can also use `BROWSER_STACK_BINARY_BASE_PATH` env variable. This will override the default and set the base path to the BS local binary (optional)
- `proxyHost` the host of your proxy for communicating with BrowserStack REST API and BrowserStackLocal (optional)
- `proxyPort` the port of your proxy (optional)
- `proxyUser` the username used for authentication with your proxy (optional)
- `proxyPass` the password used for authentication with your proxy (optional)
- `proxyProtocol` the protocol of your proxy (optional. default: `http`. valid: `http` or `https`)

### Per browser options

- `device` name of the device
- `real_mobile ` allow browserstack to use a simulator
- `browser` name of the browser
- `browser_version` version of the browser
- `os` which platform ?
- `os_version` version of the platform

