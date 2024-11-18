FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install

FROM node:18-alpine AS runner
WORKDIR /app
COPY . .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3301
CMD [ "yarn", "start" ]
