#! /bin/bash

npm i -g @nestjs/cli
nest new backend
cd backend
yarn run start      
yarn test
yarn test:2e2
yarn add dataloader graphql graphql-tools type-graphql typeorm graphql apollo-server-express voyager @types/graphql @nestjs/graphql sqlite3 @nestjs/typeorm
mkdir -p src/db/models 
mkdir -p src/db/models 
mkdir -p data

yarn typeorm migration:create -m create-users     
yarn typeorm migration:run
yarn add type-graphql graphql dataloader @nestjs/graphql apollo-server-express


mkdir -p src/resolvers/input