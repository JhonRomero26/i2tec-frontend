FROM docker.io/node:20-alpine AS runtime
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN npm install -g sharp

WORKDIR /app
COPY package.json ./

FROM runtime AS build
RUN apk update && apk add --no-cache vips-dev
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
COPY . .
RUN pnpm run build

FROM runtime AS prod
RUN apk update && apk add --no-cache vips-dev
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod
COPY --from=build /app/dist /app/dist

ARG BACKEND_URL
ARG BACKEND_IMAGES
ENV BACKEND_URL=${BACKEND_URL}
ENV VITE_BACKEND_URL=${BACKEND_URL}
ENV BACKEND_IMAGES=${BACKEND_IMAGES}
ENV VITE_BACKEND_IMAGES=${BACKEND_IMAGES}

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]
