const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Підключення до бази даних MongoDB
mongoose.connect('mongodb://198.16.66.100:27017/test-results', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Структура моделі для зберігання результатів тестів
const testResultSchema = new mongoose.Schema({
  testName: String,
  result: String,
});

const TestResult = mongoose.model('TestResult', testResultSchema);

// Мідлвар для обробки JSON
app.use(express.json());

// Роут для отримання результатів тестів
app.get('/api/test-results', async (req, res) => {
  try {
    const results = await TestResult.find();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Помилка отримання результатів тестів' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});