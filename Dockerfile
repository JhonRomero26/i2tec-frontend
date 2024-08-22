FROM oven/bun:alpine AS runtime
RUN apk update && apk add --no-cache vips-dev
WORKDIR /app
COPY package.json .
COPY bun.lockb .


FROM runtime AS build
RUN bun install
COPY . .
RUN bun run build


FROM runtime AS prod
RUN bun install --production
COPY --from=build /app/dist /app/dist


ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD bun ./dist/server/entry.mjs