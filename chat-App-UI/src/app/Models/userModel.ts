export class userModel{
    id: string;
    username: string;
    email: string;
    password: string;

    constructor(model:any = null){
        this.id = model ? model.id : null;
        this.username = model ? model.username : null;
        this.email = model ? model.email : null;
        this.password = model ? model.password : null;
    }
}