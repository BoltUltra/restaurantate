import { client } from "../../lib/client";

export async function fetchChefs() {
  const query = '*[_type == "chefs"]';

  const chefsData = await client.fetch(query);
  return chefsData;
}
