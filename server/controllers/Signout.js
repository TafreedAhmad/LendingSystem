const Signout = async (req, res) => {
  res.clearCookie("jwt");
  res.json({"message": "You are logged out successfully!"})
}

module.exports = Signout;