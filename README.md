<p align="center">
  <img src="./assets/Logo.png" width="80">
</p>
<h3 align="center">Time Machine Inspector</h3>
<p align="center">
  Find out what's hogging up your backups
  <br/>
  <a href="https://github.com/probablykasper/time-machine-inspector/releases"><b>Download for Mac</b></a>
</p>
<br/>

![Screenshot](assets/Screenshot.webp)

## Dev instructions

### Get started

1. Install Node.js
2. Install Rust
3. Follow the [Tauri setup guide](https://tauri.studio/en/docs/getting-started/intro)
4. Run `npm install`

### Commands
- `npm run dev`: Start app in dev mode
- `npm run build`: Build
- `npm run lint`: Lint
- `npm run format`: Format

### Release new version
1. Update `CHANGELOG.md`
2. Bump the version number in `src-tauri/Cargo.toml`
3. Run `cargo check --manifest-path ./src-tauri/Cargo.toml` to update `Cargo.lock`
4. Create a git tag in the format `v#.#.#`
5. Add release notes to the generated GitHub release and publish it
