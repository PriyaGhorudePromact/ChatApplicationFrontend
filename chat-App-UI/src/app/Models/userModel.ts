export class userModel{
    id: string;
    userName: string;
    email: string;
    password: string;

    constructor(model:any = null){
        this.id = model ? model.id : null;
        this.userName = model ? model.userName : null;
        this.email = model ? model.email : null;
        this.password = model ? model.password : null;
    }
}