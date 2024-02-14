"use server";

import { postWish } from "@/lib/datafromdb";
import { revalidatePath } from "next/cache";

export async function create(formData) {
  const name = formData.get("name");
  const message = formData.get("message");

  await postWish(name, message);

  revalidatePath("/");
}
