# @scores

Scores tracking application built to be cross platform with React Native.

### UI:

Desktop                    |  Mobile
:-------------------------:|:-------------------------:
![Scores page on desktop.](./docs/images/scores-page--light-desktop.png) | ![Scores page on mobile.](./docs/images/scores-page--light-mobile.png)

Desktop (Dark)             |  Mobile (Dark)
:-------------------------:|:-------------------------:
![Score page on desktop.](./docs/images/scores-page--dark-desktop.png) | ![Scores page on mobile.](./docs/images/scores-page--dark-mobile.png)

## Setup:

```
yarn
```

Then setup the monorepo:

```
lerna bootstrap
```

### Services:

To run an individual service use:

```
yarn run api:start:dev
yarn run web:start:dev
```

### Assistance

To add a new package, from the root directory:

```
lerna add <package> --scope=<service/package> [--scope=c --scope=d]
```

E.g.

```
lerna add @scores/ui --scope=@scores/web --dev
```

Or try:

```
yarn workspace @scores/expo add react-devtools@4.22.0 --dev
```

To remove an existing package:

1. Remove it from the local package/service
2. Run the below

```
lerna bootstrap --scope=<service/package> --no-ci --force-local
```

## Documentation

To generate the dependency graph seen above, run:

```
npx graph
```
