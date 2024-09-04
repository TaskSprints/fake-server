# express-fake-server

![Version](https://img.shields.io/badge/version-0.0.3-brightgreen)

## 0. 소개

해당 cli 유틸 서비스는 보다 간단하게 server 를 만들어서 테스트를 할 수 있도록 최소한의 경량 형태로 프로젝트를 구성하였습니다.

## 1.사용법

### 1-1. 패키지 설치

```
npm i -g express-fake-server
```

### 1-2. fake endpoint 구성

json 파일로 endpoint 를 구성한다.

### example

```json
[
    {
        "method": "get",
        "url": "/",
        "responseStatus": 200,
        "response": {
            "b": "b"
        }
    },
    {
        "method": "get",
        "url": "/api1",
        "responseStatus": 400,
        "response": {
            "a": "a"
        }
    },
    {
        "method": "get",
        "url": "/api2",
        "responseStatus": 200,
        "response": {
            "a": "b"
        }
    },
    {
        "method": "get",
        "url": "/api3",
        "responseStatus": 200,
        "response": {}
    }
]
```

### 2. 커맨드 실행

#### 2-1. 일반적인 실행

```
express-server start --load <파일명.json> -p <포트>
```

###

## 3. 대시보드 ( localhost:port/fake-server/ui )

![alt text](./docs/dashboard-image.png)

위와 같이 `fake-api` 에 대한 명세를 간단하게 대시보드화하여 볼 수 있다.

## 4. 사용 기술

-   express.js
-   pug engine
-   commander
