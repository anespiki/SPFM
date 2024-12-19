const username = "tarik";
const password = "admin";


exports.login = async (req, res) => {

    const { inputedUsername, inputedPassword } = req.body;

    if(inputedUsername == null && inputedPassword == null){
        console.error("Input password and input username is missing!");
    }


    try {
        if (inputedUsername === username && inputedPassword === password) {
            console.log("Credentials are right");
            return res.status(200).json({ message: "success" });
        } else {
            return res.status(200).json({ message: "fail" });
        }
    }
    catch (e) {
        console.error("There was errror login user in: " + e);
    }
}

