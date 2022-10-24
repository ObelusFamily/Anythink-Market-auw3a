# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

- Git clone this repo: `git clone https://github.com/ObelusFamily/Anythink-Market-auw3a.git`
- Install Docker `brew install docker` on Mac or you can download from [the Docker website](https://docs.docker.com/get-docker/)
- Follow install instructions
- Check that install is complete by verifying that `docker -v` and `docker-compose -v` work
- `cd` into the project directory
- Run `docker-compose up`
- pointing your browser to [http://localhost:3000/api/ping](http://localhost:3000/api/ping) should give you an encouraging message!
