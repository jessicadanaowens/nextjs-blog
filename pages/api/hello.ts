// an api endpoint
// can be deployed as serverless functions (also known as Lambdas)
// don't fetch an API Route from getStaticProps or getStaticPaths
// a good use case is handling form input. create a form that posts to API Route.  the api route handles saving to the database

// req = HTTP incoming message, res = HTTP server response
import {NextApiRequest, NextApiResponse} from "next";

export default (_: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ text: 'Hello' });
}