dev:
	docker compose up --build

start:
	docker compose up -d --build

img-build:
	docker compose -f docker-compose.prod.yaml build

deploy:
	docker compose -f docker-compose.prod.yaml stop
	docker compose -f docker-compose.prod.yaml pull
	docker compose -f docker-compose.prod.yaml up -d