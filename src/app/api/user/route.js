import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

const Users = require("../../../../models/usersModel");
// const Admins = require("../../../models/adminsModel");
// import Users from "../../../models/usersModel"
// import dbConnect from '../../../db/db';
// dbConnect();

export const GET = async (request) => {
  const user = await Users.findOne(
    {where: { user_id: 3 },}
  );

  const users = {
    test:user,
  };

  return new Response(JSON.stringify(users), { status: 200 });
};
export const POST = async (request) => {
  return new Response.json({ status: 200 });
};

// export default async function handler(req: NextApiRequest,
//   res: NextApiResponse<ResponseData>) {
//     if (req.method === 'GET') {
//       try {

//         // const users = await Users.findAll();
//         const users = {
//           'test' : 'test',
//         }
//         res.status(200).json(users);
//       } catch (error) {
//         res.status(500).json({ message: 'Internal Server Error' });
//       }
//     } else if (req.method === 'POST') {
//       const { name, email } = req.body;

//       try {
//         const user = await Users.create({ name, email });
//         res.status(201).json(user);
//       } catch (error) {
//         res.status(500).json({ message: 'Internal Server Error' });
//       }
//     } else if (req.method === 'DELETE') {
//       const { id } = req.query;
//       try {
//         await Users.destroy({ where: { id } });
//         res.status(200).json({ message: 'User deleted successfully' });
//       } catch (error) {
//         res.status(500).json({ message: 'Internal Server Error' });
//       }
//     }
//   }
