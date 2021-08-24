import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { MongoClient } from 'mongodb';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await MongoClient.connect(
    'mongodb+srv://agatonsax:development87@cluster0.1xjw6.mongodb.net/BorderInfo?retryWrites=true&w=majority'
  );

  if (req.method === 'POST') {
    const userData = req.body.state;
    console.log(userData);

    const db = client.db();

    const {
      countryEntered,
      countryFrom,
      passengerPapersStatus,
      zoneColor,
      borderName,
      hadCovid,
      vaccinationStatus,
      vaccineName,
      covidPassport,
      pcrStatus,
      antiGenStatus,
      quarantineStatus,
      quarantineDays,
      waitingTime,
      comment,
      feedbackPostedTime,
      timeStamp,
      currentQuestionDisplayed,
    } = userData;

    await db.collection('userData').insertOne({
      currentQuestionDisplayed,
      countryEntered,
      countryFrom,
      passengerPapersStatus,
      zoneColor,
      borderName,
      hadCovid,
      vaccinationStatus,
      vaccineName,
      covidPassport,
      pcrStatus,
      antiGenStatus,
      quarantineStatus,
      quarantineDays,
      waitingTime,
      comment,
      feedbackPostedTime,
      timeStamp,
    });

    res.status(201).json({ message: 'Data sent to the database' });
  }

  if (req.method === 'GET') {
    const db = client.db();

    const query = req.query;
    console.log(query);

    const documents = await db.collection('userData').find().toArray();

    res.status(200).json({ borderInfo: documents });
  }

  // if (req.method === 'GET' && req.query.q) {
  //   const db = client.db();

  //   const query = req.query;
  //   console.log(query);

  //   const documents = await db
  //     .collection('userData')
  //     .find({ countryEntered: `${query}` })
  //     .toArray();

  //   console.log('proslo d');

  //   res.status(200).json({ borderInfo: documents });
  // }

  client.close();
}
export default handler;
