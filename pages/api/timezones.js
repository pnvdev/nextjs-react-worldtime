// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const timezones = await fetch("http://worldtimeapi.org/api/timezone");
  const jsonResponse = await timezones.json()  
  res.status(200).json(jsonResponse)
}
