# bunsploration

A set of example apps that explore the some of the latest app building patterns.

**Examples:**

- [x] `remix-basic`: Remix + bun's built in http server
- [x] `remix-elysia`: Remix + elysia driving the http server
- [ ] `remix-elysia-query`: Remix + elysia driving the http server + react-query
- [ ] `vite-elysia-tanstack`: Vite + elysia + tanstack-router + react-query
- [ ] `vinxi-*`: we'll see...

## Prereq

Install https://bun.sh. Must be at least `v1.0.3`.

## Development

From your terminal:

```sh
bun {example-app-folder-name} dev

# For example...
bun remix-basic dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
bun {example-app-folder-name} build

# For example...
bun remix-basic build
```

Then run the app in production mode:

```sh
bun {example-app-folder-name} start

# For example...
bun remix-basic start
```
