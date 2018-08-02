# Standupin.nyc

Scrapes comedy show listings from NYC comedy clubs and displays them in a centralized manner.

Built using typescript, next.js, react, prisma, and graphql-apollo.

## Current venues
- ComedyCellar
- StandupNY
- Comedy cellar - village underground
- Gotham Comedy Club

## Sources
- stubsites
- comedycellar
- ticketmaster (wip)


## Architecture

The project consists of 3 services.

1. A react application built using `next.js` located in the client/ folder and deployed via now.sh
2. A graphql server built using `graphql-yoga` located in the server folder and deployed on aws lambda
3. A postgres database and prisma graphql layer deployed using cloudformation and located in `server/database`



