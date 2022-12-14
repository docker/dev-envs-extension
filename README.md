<h1 align="center">Dev Environments Extension <sup><img width="40" height="28" src="./docs/beta_badge.png" /></sup></h1>

[![CI](https://github.com/docker/dev-envs-extension/actions/workflows/ci.yml/badge.svg)](https://github.com/docker/dev-envs-extension/actions/workflows/ci.yml)

<div align="center">
  <img width="100" height="100" src="https://github.com/docker/awesome-compose/raw/master/icon_devenvs.svg" />
</div>

<div align="center">
  <strong>Quickly run pre-configured, containerized development environments</strong>
</div>

---

### Looking to install the extension?

- [**Chrome/Edge**](https://chrome.google.com/webstore/detail/docker-dev-environments/gnagpachnalcofcblcgdbofnfakdbeka)
- [**Firefox**](https://addons.mozilla.org/en-US/firefox/addon/docker-dev-environments/)

---

Allows you to quickly jump from a Git repo, branch or PR to a local development environment with the tools you need to test and run your workload — using [Dev Environments](https://docs.docker.com/desktop/dev-environments/) — by adding a button to Github, Bitbucket and Gitlab, in your browser.

<img src="./docs/button_github_example.png" />

### Supported Pages

| Provider  |        Repo        |       Branch       |         PR         |
| :-------- | :----------------: | :----------------: | :----------------: |
| Github    | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Bitbucket | :white_check_mark: | :white_check_mark: |        :x:         |
| Gitlab    | :white_check_mark: | :white_check_mark: |        :x:         |

## Contributing

### Testing

Unit tests can be ran with `yarn test`. Please remember to add/update tests when adding/updating features/handlers/etc.

### Local Development

The extension can be built with `yarn build`. You can find instructions on installing an extension temporarily for Firefox [here](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/). For Chrome, check out this [guide](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked).

## Publishing

The extension can be packaged with `yarn package`. Running this will output `dev-envs.xpi` and `dev-envs-source.zip`, which are the extension and source bundle respectively which can be uploaded to the [Chrome Web Store](https://chrome.google.com/webstore/category/extensions) and [Firefox Addons](https://addons.mozilla.org/en-US/firefox/).

Don't forget to update the version in `manifest.json` before building a new version.

<br>

---

_You are free to copy, modify, and distribute **Dev Environments Extension** with attribution under the terms of the Apache-2.0 license. See the LICENSE file for details._
