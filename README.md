# North Idaho Marriage Signing

This project is a Next.js landing page for `North Idaho Marriage Signing`.

## Open In Visual Studio Code

1. Open Visual Studio Code.
2. Choose `File` -> `Open Folder...`.
3. Select `/Users/cajetanhughes/Downloads/wedding site`.
4. If you use `nvm`, switch to the project Node version first:

```bash
nvm use
```

5. Open the built-in terminal in VS Code and run:

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000`.

## Build For GitHub Pages

This project is configured for a static export, which works well for GitHub Pages.

```bash
nvm use
npm run build
```

The static site will be generated in the `out/` folder.

## Publish With GitHub Pages

1. Create a GitHub repository for this project.
2. Push the project files to the repository.
3. In GitHub, open `Settings` -> `Pages`.
4. Set the source to deploy from GitHub Actions or from the built site you publish from `out/`.
5. When you buy your domain, add the custom domain in the GitHub Pages settings.

## Notes

- Third-party generator branding has been removed from the app code.
- The site title and branding now use `North Idaho Marriage Signing`.
- This project expects Node `20.20.2` via `.nvmrc`.
