FROM oven/bun:1.0 AS runtime
WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install

COPY . .

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["bun", "run", "dev"]