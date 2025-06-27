import bcrypt from "bcrypt";
import { User } from '../entities/user.entity';
import { AppDataSource } from '../data-source';
import jwt from "jsonwebtoken";
import config from '../config/config'

const userRepository = AppDataSource.getRepository(User);

const signUpService = async (name: string, email: string, password: string) => {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User();
    user.name = name;
    user.email = email;
    user.passwordHash = passwordHash;

    return await userRepository.save(user);
}

const signInService = async (email: string, password: string) => {
    const user = await userRepository.findOne({ where: { email } })

    if (!user) {
        throw { status: 401, message: "Invalid email or password" }
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isMatch) {
        throw { status: 401, message: "Invalid email or password" }
    }

    const token = jwt.sign(
        {userId: user.id},
        config.jwtSecret,
        {
            expiresIn: "1h"
        }
    );

    return token;
}

export { signUpService, signInService };