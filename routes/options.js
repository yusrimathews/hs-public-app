module.exports = (req, res) => {
  res.json({
    options: [
      {
        label: "Big Widget",
        description: "Big Widget",
        value: "10"
      },
      {
        label: "Small Widget",
        description: "Small Widget",
        value: "1"
      }
    ],
    searchable: true
  });
}
