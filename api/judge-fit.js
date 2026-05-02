export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Missing OPENAI_API_KEY in Vercel environment variables" });
    return;
  }

  const payload = req.body || {};
  payload.model = payload.model || process.env.OPENAI_MODEL || "gpt-4.1-mini";

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify(payload)
    });

    const text = await response.text();
    res.status(response.status).setHeader("Content-Type", "application/json").send(text);
  } catch (error) {
    res.status(502).json({ error: "OpenAI request failed" });
  }
}
