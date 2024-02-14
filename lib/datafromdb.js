import { dbConnect } from "@/lib/db";
import Wish from "@/lib/models/Wish";

export const getWishes = async () => {
  try {
    await dbConnect();
    const wishes = await Wish.find();
    return wishes;
  } catch (error) {
    return "Error in fetching data" + error;
  }
};

export const postWish = async (name, message) => {
  try {
    await dbConnect();
    const wish = new Wish({ name, message });
    await wish.save();
    return wish;
  } catch (error) {
    return "Error in posting data" + error;
  }
};
