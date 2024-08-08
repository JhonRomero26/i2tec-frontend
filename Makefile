dev:
	docker compose up --build

start:
	docker compose up -d --build

img-build:
	docker compose -f docker-compose.yaml build

deploy:
	docker compose -f docker-compose.yaml down
	docker compose -f docker-compose.yaml pull
	docker compose -f docker-compose.yaml up -d