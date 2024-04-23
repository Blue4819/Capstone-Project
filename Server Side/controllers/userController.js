import User from "../models/userModel.js";
// import bcrypt from "bcrypt";
import auth from "../middleware/auth.js";

export const signup = async (req, res) => {
  try {
    // const saltRounds = 10;
    const exists = await User.find({ email: req.body.email });
    if (exists[0]) res.status(401).json({ error: 'User already exists' });
    else {
      // bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
        if (/*err*/ false) console.log(err);
        else {
          const user = new User({
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username
            // hash,
          });
          const saved = await user.save();
          res.status(200).json(saved);
        }
      // });
    }
  } catch (error) {
    console.log(error);
    res.json("");
  }
};

export const signin = async (req, res) => {
  try {
    console.log("Sign In request received")
    const exists = await User.find({ email: req.body.email });
    if (!exists[0]) res.status(401).json({ error: 'No account exists' });
    else {
      const user = await User.findOne({ email: req.body.email });
      if (user.password === req.body.password) {
        res.status(200).json(user);
      } else {
        res.status(401).json({ error: 'Invalid email or password' });
      }
    }
  } catch (error) {
    console.log(error);
    res.json("");
  }
};

export const saveInfo = async (req, res) => {
  try {
    const saved = await User.updateOne(
      { _id: req.body.id },
      {
        $set: {
          firstName: req.body.info.firstName,
          lastName: req.body.info.lastName,
          email: req.body.info.email,
          picturePath: req.body.info.picturePath,
          location: req.body.info.location,
          bio: req.body.info.bio,
          gender: req.body.info.gender,
          dob: req.body.info.dob,
        },
      }
    );
    res.status(200).json(saved);
  } catch (error) {
    res.json({ error });
  }
};

export const profileInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    res.json(user);
  } catch (error) {
    res.json({ error });
  }
};

export const ownProfileInfo = async (req, res) => {
  try {
    const { id } = req.params;

    if (req.currentUser._id.toString() !== id) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = await User.findOne({ _id: id });

    res.json(user);
  } catch (error) {
    res.json({ error });
  }
};

profileInfo.middleware = [auth];

export const updateLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const { location } = req.body;
    await User.findByIdAndUpdate(id, { location });
    res.status(200).json({ message: "Location updated successfully." });
  } catch (error) {
    res.json({ error });
  }
};

export const updateDOB = async (req, res) => {
  try {
    const { id } = req.params;
    const { dob } = req.dob;
    await User.findByIdAndUpdate(id, { dob });
    res.status(200).json({ message: "Location updated successfully." });
  } catch (error) {
    res.json({ error });
  }
};