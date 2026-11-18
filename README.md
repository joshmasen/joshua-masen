# JoshuaMasen.com

My personal website, built with Nuxt 4 and hosted on Netlify.

## Setup

Use Node.js 22.23.4 (see `.nvmrc`) and Yarn Classic 1.22.22. Set the Netlify
build environment to the same Node version.

```bash
nvm use
yarn install --frozen-lockfile
```

## Development

```bash
yarn dev
```

The development server runs at http://localhost:3001. The site contains a single
homepage with a biography, job history, and contact links.

## Production

```bash
yarn build
yarn preview
```

For a static export, run `yarn generate`.

## Dependencies

Commit `package.json` and `yarn.lock` together when updating packages. Run
`yarn audit` and verify both `yarn build` and `yarn generate` after updates.

Tailwind CSS 4 uses the Vite plugin; theme colors and base styles are configured
in `assets/css/tailwind.css`. The homepage imports its job history directly from
`content/jobs.json`. Nuxt Fonts supplies the Work Sans font.

See the [Nuxt documentation](https://nuxt.com/docs/4.x/getting-started/introduction).

The `resolutions` entry selects a patched version of Minimatch used by Nitro's
archive tooling. Rolldown stays on 1.2.x because Nuxt 4.6.4 requires `~1.2.1`.

As of November 18, 2026, `yarn audit` reports one distinct remaining advisory
(10 dependency paths, high severity; no critical findings):
[Picomatch ReDoS](https://github.com/advisories/GHSA-fc5q-39xc-vjpf).
No patched version is published. It is used by build and development tools;
this project uses repository-controlled glob patterns. Recheck it when updating
the build tooling.
