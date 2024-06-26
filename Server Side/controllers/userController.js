import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import {jwtDecode} from "jwt-decode";
import bcrypt from "bcrypt";
import auth from "../middleware/auth.js";
import axios from 'axios';

config();

export const signup = async (req, res) => {
  try {
    const saltRounds = 10;
    const exists = await User.find({ email: req.body.email });
    if (exists.length > 0) res.status(401).json({ error: 'User already exists' });
    else {
      return bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
        if (err) {
          console.log(err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          const user = new User({
            email: req.body.email,
            password: hash,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username
          });
          
          const dob = new Date(req.body.dob);
          const birthYear = dob.getFullYear();
          const currentYear = new Date().getFullYear();
          const age = currentYear - birthYear - (new Date().getMonth() > dob.getMonth() ? 0 : 1) - (new Date().getDate() > dob.getDate() ? 0 : 1);
          user.age = age;
          const saved = await user.save();
          if (saved) {
            const token = jwt.sign(
              { userId: user._id },
              process.env.JWT_SECRET,
              { expiresIn: "1h" }
            );
            res.status(200).json({user:saved, token});
          } else {
            res.status(500).json({ error: 'Internal server error' });
          }
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const signin = async (req, res) => {
  try {
    console.log("Sign in request received")
    const exists = await User.find({ email: req.body.email });
    if (!exists[0]) res.status(401).json({ error: 'No account exists' });
    else {
      const user = await User.findOne({ email: req.body.email });
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
          );
          res.status(200).json({user:user, token});
        } else {
          res.status(401).json({ error: 'Invalid email or password' });
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.json("");
  }
};

export const googleSignIn = async (req, res) => {
  try {
    const token = req.body.cred;
    const decoded = jwtDecode(token);
    console.log("Google signin requested")

    // Extract the user's email address from the response
    const email = decoded.email;
    console.log(email)

    // Check if the user exists in the database
    const exists = await User.findOne({ email });

    if (exists) {
      // Authenticate the user and return a response with the user's information
      const token = jwt.sign(
        { userId: exists._id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.status(200).json({user:exists, token });
    } else {
       //Redirect the user to the signup page
       res.status(200).json({ user:null });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const googleSignup = async (req, res) => {
  try {
    const token = req.body.cred;
    const decoded = jwtDecode(token);
    console.log("Google signup requested")

    // Extract the user's email address from the response
    const email = decoded.email;
    console.log(email)

    // Check if the user exists in the database
    const exists = await User.findOne({ email });

    if (!exists) {
      // If the user does not exist, create a new user
      const saltRounds = 10;
      bcrypt.hash(decoded.sub, saltRounds, async (err, hash) => {
        if (err) console.log(err);
        else {
          const user = new User({
            email: email,
            password: hash,
            firstName: decoded.given_name,
            lastName: decoded.family_name,
            username: decoded.name
          });
        
          const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
          );
          const saved = await user.save();
          res.status(200).json({user:saved, token});
        }
      });
    } else {
      // If the user already exists, redirect to the dashboard
      const token = jwt.sign(
        { userId: exists._id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      console.log(token)
      res.status(200).json({user:exists, token:token});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
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