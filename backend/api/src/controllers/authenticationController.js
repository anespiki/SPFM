const username = "tarik";
const password = "admin";


exports.login = async (req, res) => {

    const { inputedUsername, inputedPassword } = req.body;

    try {
        if (inputedUsername === username && inputedPassword === password) {
            return res.status(200).json({ message: "Login successful!" });
        } else {
            return res.status(401).json({ message: "Invalid username or password." });
        }
    }
    catch (e) {
        console.error("There was errror login user in: " + e);
    }

}