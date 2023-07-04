import { draftMode } from "next/headers";
import { redirectToPreviewURL } from "@prismicio/next";
import { createClient } from "../../../prismicio"
import { NextRequestLike } from "@prismicio/next/dist/types"

export async function GET(request:NextRequestLike) {
  const client = createClient();

  draftMode().enable();

  await redirectToPreviewURL({ client, request });
}