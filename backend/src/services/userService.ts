import bcrypt from "bcrypt";
import { User } from '../entities/user.entity';
import { AppDataSource } from '../data-source';

const userRepository = AppDataSource.getRepository(User);

const signUpService = async (name:string, email:string, password:string) => {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User();
    user.name = name;
    user.email = email;
    user.passwordHash = passwordHash;

    return await userRepository.save(user);
}

export {signUpService};