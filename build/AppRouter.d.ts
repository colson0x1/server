import express from 'express';
export declare class AppRouter {
    private static instance;
    static getInstance(): express.Router;
}
