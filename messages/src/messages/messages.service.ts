import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

//marking the class for DI
@Injectable() 
export class MessagesService{
    constructor(public messagesRepo:MessagesRepository){
        //service is creating its own dependency. service cant work without repo..used dependency injection.
        
    }

    async findOne(id:string){
        return this.messagesRepo.findOne(id);
    }

    async findAll(){
        return this.messagesRepo.findAll()
    }

    async create(content:string){
        return this.messagesRepo.create(content);
    }
}