// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query.q;
  console.log(query);

  // const searchTerm = req.body.term;
  // console.log(req.body.term, 'from api');

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=11316024a2d8685bd72864cd19d53d2e&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const data = await response.json();
    // console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).send(error);
  }
}
