import mongoose from 'mongoose';

const botSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  codename: String,
  description: String,
  version: String,
  theme: { type: String, enum: ['green', 'orange', 'purple', 'blue'], default: 'green' },
  featured: { type: Boolean, default: false },
  comingSoon: { type: Boolean, default: false },
  status: { type: String, default: 'Coming soon' },
  uptime: String,
  ramUsed: Number,
  ramLimit: Number,
  cpu: Number,
  queue: Number,
  repo: String,
  pairUrl: String,
  deployCommand: String,
  env: { type: mongoose.Schema.Types.Mixed, default: {} },
}, { timestamps: true });

export const Bot = mongoose.models.Bot || mongoose.model('Bot', botSchema);
