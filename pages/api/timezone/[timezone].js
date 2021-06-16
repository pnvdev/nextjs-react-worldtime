

export default async (req, res) => {
  const {
    query: { timezone },
  } = req;
  const result = await fetch(`http://worldtimeapi.org/api/timezone/${timezone.replace(/&/g, "/")}`);
  const jsonResponse = await result.json()
  res.status(200).json(jsonResponse)
};
