# Run Guide

These ports avoid conflicts with Lab 27.

## Lab 4

Lab 4 files are simple JavaScript programs and do not use localhost.

```bash
npm run lab4:q1
npm run lab4:q2
npm run lab4:q3
npm run lab4:q4
npm run lab4:q5
```

## Lab 7

Run one server per terminal, or stop one before starting the next.

```bash
npm run lab7:q1
```

- URL: `http://localhost:3001`

```bash
npm run lab7:q2
```

- `http://localhost:3002/one`
- `http://localhost:3002/one/a/b`
- `http://localhost:3002/two`
- `http://localhost:3002/two/a`

```bash
npm run lab7:q3
```

- Route: `http://localhost:3003/hello`
- Methods: GET, POST, PUT, DELETE

```bash
npm run lab7:q4
```

- URL param: `http://localhost:3004/user/Shivansh`
- Query param: `http://localhost:3004/search?q=node`
- JSON response: `http://localhost:3004/data`
- POST JSON body to `http://localhost:3004/login`

## Lab 10

Lab 10 uses local MongoDB:

```text
mongodb://127.0.0.1:27017/employeeDB
```

Start MongoDB locally, then run:

```bash
npm run lab10
```

Open:

```text
http://localhost:3010
```

## Lab 27

Lab 27 uses Docker Compose.

```bash
npm run lab27
```

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8000`
- MongoDB container host port: `27018`

Stop Lab 27:

```bash
npm run lab27:down
```

## Port Summary

- Lab 7 Q1: `3001`
- Lab 7 Q2: `3002`
- Lab 7 Q3: `3003`
- Lab 7 Q4: `3004`
- Lab 10: `3010`
- Lab 27 frontend: `3000`
- Lab 27 backend: `8000`
- Lab 27 MongoDB host port: `27018`
