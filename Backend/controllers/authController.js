

const bcrypt = require('bcrypt');
const User = require('../models/User');

// Register a user
const registerUser = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

    // Validate input
    if (!name || !email || !mobile || !password) {
      return res.status(400).json({ 
        error: "All fields are required" 
      });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        error: "User already exists with this email" 
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      name,
      email,
      mobile,
      password: hashedPassword,
    });

    // Save user to the database
    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        mobile: newUser.mobile,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ 
      error: "An error occurred during registration",
      details: error.message 
    });
  }
};

// Login a user
const loginUser = async (req, res) => {
  try {
    console.log('Login attempt for:', {
      email: req.body.email,
      hasPassword: !!req.body.password
    });

    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ 
        error: 'Please provide both email and password' 
      });
    }

    // Find user by email
    const user = await User.findOne({ email });
    console.log('User found:', !!user);

    if (!user) {
      return res.status(401).json({ 
        error: 'Invalid email or password' 
      });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Password validation:', isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json({ 
        error: 'Invalid email or password' 
      });
    }

    // Create user data to send back (excluding password)
    const userData = {
      id: user._id,
      email: user.email,
      role: user.role
    };

    res.status(200).json({
      message: 'Login successful',
      user: userData
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      error: 'An error occurred during login',
      details: error.message 
    });
  }
};

module.exports = { registerUser, loginUser };