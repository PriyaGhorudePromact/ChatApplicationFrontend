export class userRegistration{
    username: string;
    email: string;
    password: string;

    constructor(model:any = null){
        this.username = model ? model.username : null;
        this.email = model ? model.email : null;
        this.password = model ? model.password : null;
    }
}