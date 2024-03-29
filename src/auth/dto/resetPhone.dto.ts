import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator"
import { Match } from '../decorator';

export class ResetPhoneDto {
    @IsEmail()
    @IsNotEmpty()
    email:              string

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @IsNotEmpty()
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    password:           string

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @IsNotEmpty()
    @Match('password')
    passwordConfirm:    string;

    @IsString()
    @IsNotEmpty()
    otp:                string;
}