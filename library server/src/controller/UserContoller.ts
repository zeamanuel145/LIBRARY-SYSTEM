import { Request,Response } from "express";
import {findAllUsers,findUserById,removeUser,modifyUser} from "../services/UserService";
import { UserDoesNotExistError } from "../utils/LibraryErrors";

async function getAllUsers(req:Request,res:Response){
    try{
        let users=await findAllUsers();
        res.status(200).json({message:"Users retrieved successfully", users});
    }catch(error:any){
        res.status(500).json({message:"Error retrieving users", error: error.message});
    }
}

async function getUserById(req:Request,res:Response){
    const userId=req.params.id;
    try{
        let user=await findUserById(userId);
        res.status(200).json({message:"User retrieved successfully", user});
    }catch(error:any){
        if(error instanceof UserDoesNotExistError){
            res.status(404).json({message:"User not found", error: error.message});
        }else{
            res.status(500).json({message:"Could not find user", error: error.message});
        }
    }
}

async function deleteUser(req:Request,res:Response){
    const userId:string=req.params.userId;
    try{
        await removeUser(userId);
        res.status(200).json({message:"User deleted successfully"});
    }catch(error:any){
        if(error instanceof UserDoesNotExistError){
            res.status(404).json({message:"User not found", error: error.message});
            return;
        }
        else{
            res.status(500).json({message:"Error deleting user", error: error.message});
        }
    }
}

async function updateUser(req:Request,res:Response){
    const user=req.body;
    try{
        let updatedUser=await modifyUser(user);
        res.status(202).json({message:"User updated successfully", user: updatedUser});
    }catch(error:any){
        if(error instanceof UserDoesNotExistError){
            res.status(404).json({message:"User not found", error: error.message});
            return;
        }
        else{
            res.status(500).json({message:"Error updating user", error: error.message});
        }
    }
}

export default{
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser
}