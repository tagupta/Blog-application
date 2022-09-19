import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    //Validation
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Something wrong with user" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://tanu:tanu@cluster0.4cri9ti.mongodb.net/?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "Connection failed" });
      return;
    }

    try {
      const db = client.db();
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed" });
      return;
    }

    client.close();
    res.status(201).json({ message: newMessage });
  }
}

export default handler;
