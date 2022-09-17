function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    res.status(201).json({ result: { email, name, message } });
  } else {
    res.status(200).json({ result: "This Works!!" });
  }
}

export default handler;
