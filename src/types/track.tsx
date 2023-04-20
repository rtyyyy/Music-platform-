import React from "react";
export interface IComment{               //interface for tracks and comments 
    _id:string;
    username: string;
    text: string;
}
export interface ITrack{
    _id:string;
    name: string;
    artist:string;
    text: string;
    listens:number;
    audio:string;
    img: string;
    comments:IComment[]
}