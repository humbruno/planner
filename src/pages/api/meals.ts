import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "~/lib/auth";
import { supabase } from "~/lib/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const session = await getServerSession(req, res, authOptions);
    const { data } = await supabase
      .from("meal")
      .select("id, name, ingredients")
      .eq("user_id", session?.user.id);
    return res.status(200).json({ data });
  } else {
    return res.status(405).json({ message: "Method not allowed." });
  }
}
