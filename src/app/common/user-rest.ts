import { UserType } from 'src/app/common/user-type';

export class UserRest {

    name: string;
	userId: string;
	email: string;
	dob: Date;
	userType: UserType;
	encryptedPassword: string;

}
