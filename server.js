// server.js
const express = require('express');
const app = express();
const port = 3000;

// 메모를 저장할 배열
let memos = [];

// POST /memo - 메모 추가
app.use(express.json()); // JSON 요청 받기 위함

app.post('/memo', (req, res) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ message: '내용을 입력하세요.' });
  }

  const memo = {
    id: memos.length + 1,
    content: content,
    createdAt: new Date()
  };

  memos.push(memo);
  res.status(201).json(memo);
});

// GET /memos - 메모 전체 조회
app.get('/memos', (req, res) => {
  res.json(memos);
});

// 서버 시작
app.listen(port, () => {
  console.log(`메모장 서버가 http://localhost:${port} 에서 실행중`);
});