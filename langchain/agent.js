//--Import Langchain Tooling--//
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser, StructuredOutputParser } from '@langchain/core/output_parsers';


import { createStuffDocumentsChain } from 'langchain/chains/combine_documents';
import { createRetrievalChain } from 'langchain/chains/retrieval';

import { contextRetriever } from './embeddings.js';

import "../config.js";

// GPT start
import dotenv from "dotenv";
dotenv.config();

// Load MongoDB Client
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
await client.connect(); // make sure you're top-level await enabled (like in ES module)
const db = client.db(process.env.MONGODB_DATABASE_NAME);

// Safe fallback
const collectionName = process.env.MONGODB_COLLECTION_NAME || 'Vector_Store';
if (!collectionName) throw new Error("Missing MongoDB collection name");


console.log("langchain/agent.js -- vector store collection used:", collectionName);

const vectorStore = db.collection(collectionName); // finally works now ✅
// GPT end


/*************************************
 * Will search environment variables *
 * !!!1,000,000 TOKEN LIMIT!!!       *
 ************************************/
//--Initialize Gemeni API Access--//
const geminiModel = new ChatGoogleGenerativeAI({
    model: 'gemini-2.0-flash',
    apiKey: process.env.GEMENI_API_KEY,
    temperature: 0.7,
});

//--context template--//
const queryTemplate = ChatPromptTemplate.fromTemplate(
    `System: {system}
     Context: {context}
     Current Order: {currentOrder}
     User: {input}`
    
);

//--output parser--//
/****************************************
 * Model output is not clean and has /n *
 * characters. 
 ****************************************/
const queryParser = new StringOutputParser();



//--chain--//
/*****************************************
 * The chain is returned with the output *
 * parsers, so that a different parser   *
 * can be used for ordering and          *
 * finalizing                            *
 *****************************************/
const logicChain = await createStuffDocumentsChain( {
    llm: geminiModel,
    prompt: queryTemplate,
    outputParser: queryParser
});

const customerServiceAgent = await createRetrievalChain( {
    combineDocsChain: logicChain,
    retriever: contextRetriever
})


export { customerServiceAgent };