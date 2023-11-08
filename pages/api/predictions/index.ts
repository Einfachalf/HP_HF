export default async function handler(
  req: { query: { chat: string } },
  res: { statusCode: number; end: (arg0: string) => void }
) {
  const response = await fetch(
    'https://api.replicate.com/v1/predictions/' + req.query.chat,
    {
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }
  )
  if (response.status !== 200) {
    const error = await response.json()
    res.statusCode = 500
    res.end(JSON.stringify({ detail: error.detail }))
    return
  }

  const prediction = await response.json()
  res.end(JSON.stringify(prediction))
}
