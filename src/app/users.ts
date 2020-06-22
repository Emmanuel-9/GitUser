export class Users {
    constructor(
        public name: string,
        public avatar_url: string,
        public public_repos: number,
        public bio: string,
        public location: string,
        public memberSince: Date
    ){}
}

