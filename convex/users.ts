import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Functions related to users
export const syncUsers = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        clerkId: v.string(),
        image: v.optional(v.string()),
    },
    handler: async (ctx, args) => {

        const existingUser = await ctx.db
        .query("users")
        .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
        .first();

        // Save the user to the db

        if(existingUser) return; 
        return await ctx.db.insert("users", args)
    }
})