Monitor System Resources Using Netdata
Project Overview

This project demonstrates real-time system and application monitoring using Netdata. It includes:

A Node.js sample application (nodejs-demo-app) running in Docker

Netdata monitoring container

Optional CPU stress testing for metrics visualization

Goal: Understand lightweight monitoring of servers, Docker containers, and applications.

Project Structure
netdata-monitoring-app/
│── docker-compose.yml
│── app/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js

Dependencies
System

Docker (Engine ≥19.x) or Docker Desktop (Windows/Mac)

Minimum 1 GB RAM

Free port 3000 (Node.js app)

Free port 19999 (Netdata dashboard)

Software

Node.js (installed in Docker image)

Express.js (Node.js dependency)

Optional: stress or stress-ng for CPU load testing

Setup Instructions
1. Clone the Repository
git clone <repo-url>
cd netdata-monitoring-app

2. Run the Project
docker-compose up --build -d


Node.js app → http://localhost:3000

Netdata dashboard → http://localhost:19999

Node.js App
Routes

/ → Returns Hello from Node.js App monitored by Netdata!

/load → Simulates CPU-intensive load

Example:

curl http://localhost:3000/load

CPU Stress Testing (Optional)

You can generate additional CPU load:

Using Node.js /load route

for i in {1..5}; do curl http://localhost:3000/load & done


Using stress container

docker run --rm -it progrium/stress --cpu 4 --timeout 60s

Netdata Monitoring
Metrics Monitored

CPU: usage %, per core

Memory: used, free, cache, swap

Disk: I/O, space usage

Network: bandwidth, packets

Docker containers: CPU, memory, health

Logs Location

Inside Netdata container:

docker exec -it netdata bash
cd /var/log/netdata
ls

Stopping Monitoring
Stop Netdata only
docker stop netdata

Stop all containers
docker-compose down

Remove Netdata container and volumes (optional)
docker rm -f netdata
docker volume rm netdata_config netdata_lib netdata_cache
