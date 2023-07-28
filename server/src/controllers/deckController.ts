import {Request,Response} from 'express'
import DeckModel from "../models/deck";


export const addDeckController= async(req:Request,res:Response)=>{
    try{
        const {title} = req.body; 
        const data = await new DeckModel({title}).save();
        console.log(data)
        res.status(201).send({
            succes:true,
            message:'Successfully added',
            title
        })

    }catch(error){
        res.status(500).send({
            status:false,
            message:'Failed to enter the title',
            error
        })
    }
}

export const getAllDeckController=async(req:Request,res:Response)=>{
    try{
        const decks = await DeckModel.find()
        res.json(decks)
    }catch(error){
        res.status(500).send({
            success:false,
            message:"Error while getting the decks data",
            error
        })
    }
}

export const deleteDeckController = async(req:Request,res:Response)=>{
    try{
        const {id} = req.params;
        await DeckModel.findByIdAndDelete(id);
        res.status(200).send({
            status:true,
            message:"Deck is deleted"
        })
    }catch(error){
        res.status(500).send({
            status:false,
            message:'deck not found to be deleted',
            error
        })
    }
}