const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Replace 'your_mongodb_connection_string' with your actual MongoDB URI later
// For now, this connects to a local database named 'citytech'
mongoose.connect('mongodb://127.0.0.1:27017/citytech')
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ Connection Error:", err));

const InquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  interest: String,
  message: String,
});

const Inquiry = mongoose.model('Inquiry', InquirySchema);

app.post('/api/contact', async (req, res) => {
  try {
    const data = new Inquiry(req.body);
    await data.save();
    res.status(200).send({ message: "Success" });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(5000, () => console.log("🚀 Backend running on http://localhost:5000"));