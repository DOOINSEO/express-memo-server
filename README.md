📒 Memo Server (메모장 서버)

간단한 Node.js + Express 기반 메모장 API 서버입니다.  
REST API를 통해 메모를 추가하고 조회할 수 있습니다.

📋 목표

- Node.js + Express 사용

- 메모를 작성하고 조회할 수 있는 서버 만들기

- (파일이나 DB 없이) 메모는 메모리에 저장

🚀 프로젝트 실행 방법

1. 레포지토리 클론 & 폴더 이동
---bash
git clone https://github.com/your-username/memo-server.git
cd memo-server

2. 의존성 설치
---bash
npm install

3. 서버 실행
---bash
node server.js
서버가 http://localhost:3000에서 실행됩니다.

🛠️ API 사용 방법 (터미널에서 curl 사용)
✅ 메모 추가 (POST /memo)
---bash
curl -X POST http://localhost:3000/memo -H "Content-Type: application/json" -d "{\"content\":\"첫 번째 메모입니다\"}"

✅ 메모 전체 조회 (GET /memos)
---bash
curl http://localhost:3000/memos

응답 예시
---json
{
  "id": 1,
  "content": "첫 번째 메모입니다",
  "createdAt": "2025-04-30T05:23:35.409Z
}
