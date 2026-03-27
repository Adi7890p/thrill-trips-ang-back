const User = require('../models/user.model');
const Admin = require('../models/admin.model');
const jwt = require('jsonwebtoken');
const firebaseConfig = require('../config/firebase');
const firebase = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');

const firebaseApp = firebase.initializeApp(firebaseConfig);
const fireauth = getAuth(firebaseApp);

exports.signup = async (data) => {
    const { email, password } = data;
    const existingEmail = await User.findOne({ email: email });

    if (existingEmail) {
        throw new Error('Email already exists');
    }

    const firebaseUser = await createUserWithEmailAndPassword(fireauth, email, password);
    const uid = firebaseUser.user.uid;

    const user = await User.create({
        email,
        uid
    });

    return user;
};

exports.login_email = async (data) => {
    const { email, password } = data;
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');

    await signInWithEmailAndPassword(fireauth, email, password).catch((err) => {
        throw new Error('Invalid Credentials');
    });

    const payload = {
        id: user._id,
        email: user.email,
        uid: user.uid
    }
    return jwt.sign(
        payload, process.env.JWT_SECRET, { expiresIn: '3h' }
    );
}

exports.login_google = async (email) => {
    let user = await User.findOne({ email });
    if (!user) {
        user = await User.create({ email });
    }
    const payload = {
        id: user._id,
        email: user.email,
        uid: user.uid
    }
    return jwt.sign(
        payload, process.env.JWT_SECRET, { expiresIn: '3h' }
    );
}

exports.login_admin = async (data) => {
    const { unm, password } = data;
    const admin = await Admin.findOne({ unm, password });
    if (!admin) throw new Error('Invalid Credentials');

    return { success: true };
}