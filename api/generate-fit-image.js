// Generates a styled image for a saved outfit.
//
// Proxies OpenAI's image API using the same OPENAI_API_KEY already configured
// in the Vercel project for the fit judge, so there is nothing extra to set up.
// The key never reaches the browser.

const DEFAULT_MODEL = "gpt-image-1";
const MAX_PROMPT = 3000;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Missing OPENAI_API_KEY in the project environment variables" });
    return;
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
  const prompt = String(body.prompt || "").trim();
  if (!prompt) {
    res.status(400).json({ error: "Missing prompt" });
    return;
  }

  try {
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: process.env.OPENAI_IMAGE_MODEL || DEFAULT_MODEL,
        prompt: prompt.slice(0, MAX_PROMPT),
        n: 1,
        size: body.size === "square" ? "1024x1024" : "1024x1536"
      })
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const message = (data && data.error && data.error.message) || `Image request failed (${response.status})`;
      res.status(response.status).json({ error: message });
      return;
    }

    const first = (data.data && data.data[0]) || {};
    // gpt-image-1 returns base64; older models may return a hosted url instead.
    if (first.b64_json) {
      res.status(200).json({ image: `data:image/png;base64,${first.b64_json}` });
      return;
    }
    if (first.url) {
      res.status(200).json({ imageUrl: first.url });
      return;
    }
    res.status(502).json({ error: "Image API returned no image" });
  } catch (error) {
    res.status(502).json({ error: String((error && error.message) || error) });
  }
}
