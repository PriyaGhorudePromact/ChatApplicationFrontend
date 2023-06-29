export class messageData{
    id: string;
    senderId: string;
    receiverId: string;
    content: string;
    timestamp: Date;

    constructor(model:any = null){
        this.id = model ? model.id : null;
        this.senderId = model ? model.username : null;
        this.receiverId = model ? model.email : null;
        this.content = model ? model.password : null;
        this.timestamp = model ? model.password : null;
    }
}