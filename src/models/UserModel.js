import {atom, AtomOptions} from "recoil";

// interface User {
//     createdAt: number;
//     email: string;
//     firstName: string;
//     lastName: string;
//     userName: string;
// }
//
// interface UserState {
//     key: string,
//     user: User,
// }
//
// const user: User = {
//     createdAt: Date.now(),
//     email: "",
//     firstName: "",
//     lastName: "",
//     userName: "",
// }
//
// const userState: UserState = {
//     key: 'User',
//     default: user,
// }
// const options: AtomOptions<User> = {
//     key: 'User',
//     user,
// }
// const state: options = {
//     key: 'User',
//     default: {
//         token: "",
//         user: {
//             createdAt: Date.now(),
//             email: "",
//             firstName: "",
//             lastName: "",
//             userName: ""
//         },
//
//     },
// }
export const userState = atom({
    key: 'User',
    default: {
        token: "",
        user: {
            createdAt: Date.now(),
            email: "",
            firstName: "",
            lastName: "",
            userName: ""
        },

    },
});
