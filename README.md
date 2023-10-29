# My learnings

1. Extracting code into a generic component that can be reused

- 'CodeSnippet' vs. 'Revealable': former is specific and latter generic
- Using a component with a genetic name (often an adjective) to wrap around server-only components: could be a common and good practice

# Next 13 + Bright

This repo is for an exercise in my React course, [The Joy of React](https://joyofreact.com/).

## Running a development server

First, install the dependencies:

```bash
$ npm install
```

Then, start a local development server:

```bash
$ npm run dev
```

**Note:** Unlike create-react-app, we need to run the `dev` command, not `start`. The `start` command is used to run a _production_ server; we'll learn more about that later in the course.
