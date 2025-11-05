import { StarIO10Error } from './StarIO10Error';

export class StarIO10InvalidOperationError extends StarIO10Error {
    protected get typeName(): string {
        return "StarIO10InvalidOperationError";
    }
}