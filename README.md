## Introduction

Websocket-quick-start it's a simple example of working with aws websockets and [serverless](https://github.com/serverless/serverless)

## <a name="quick-start"></a>Quick Start
1. **Set-up your provider credentials.** [Watch the video on setting up credentials](https://www.youtube.com/watch?v=HSd9uYj2LJA)
2. **Install serverless via npm:**

```bash
npm install -g serverless
```

3. **Install dependencies via npm:**
```bash
npm install
```
4. **Deploy a Service:**
```bash
sls deploy --stage dev
```
or 
```bash
sls deploy --stage dev --aws-profile yourProfile
```

## Test websocket

1. To test the WebSocket API, you can use [wscat](https://www.npmjs.com/package/wscat), an open-source, command line tool.
```bash
npm install -g wscat
```

2. On the console, connect to your published API endpoint by executing the following command:
```bash
wscat -c wss://{YOUR-API-ID}.execute-api.{YOUR-REGION}.amazonaws.com/{STAGE}
```

3. To test the ping function, send a JSON message:
```bash
{"action": "ping"}
```
4. You will receive the `pong`.
