import {z} from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const contactSchema = z.object({
    firstName: z.string().nonempty(),
    lastName: z.string().nonempty(),
    email: z.string().email(),
    lesson: z.string().optional().nullable(),
    // phoneNumber: z.string().refine((value) => {
    //     const phoneNumber = parsePhoneNumberFromString(value);
    //     return phoneNumber !== undefined && phoneNumber.isValid();
    // },
    // { message: "Invalid phone number" }).optional().nullable(),
    phoneNumber: z.string().optional().nullable(),


    message: z.string().optional().nullable(),
    privacyPolicy: z.boolean().refine((value) => value === true, { message: "You must accept the privacy policy" }),
    // grecaptcha: z.string().nonempty(),
    recaptchaToken: z.string().optional().nullable(),
    ip: z.string().optional().nullable(),

})

export type ContactSchema = z.infer<typeof contactSchema>;
