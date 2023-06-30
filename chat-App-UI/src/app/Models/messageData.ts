export class messageData{
    id: string;
    senderId: string;
    receiverId: string;
    content: string;
    timestamp: Date;

    constructor(model:any = null){
        this.id = model ? model.id : null;
        this.senderId = model ? model.senderId : null;
        this.receiverId = model ? model.receiverId : null;
        this.content = model ? model.content : null;
        this.timestamp = model ? model.timestamp : null;
    }
}