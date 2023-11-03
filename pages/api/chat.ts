// pages/api/chat.ts
import { HfInference } from '@huggingface/inference';
const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Extrahieren Sie die Nachrichten aus dem Request-Body
      const { messages } = req.body;
// pages/api/chat.ts
const { messages } = req.body;
const response = await hf.textGeneration({
model: 'OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5',
inputs: messages,
parameters: { ... },
});
// pages/api/chat.ts
res.status(200).json({ answer: response.data });
