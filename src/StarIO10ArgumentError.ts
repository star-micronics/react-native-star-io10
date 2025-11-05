import { StarIO10Error } from './StarIO10Error';

export class StarIO10ArgumentError extends StarIO10Error {
    protected get typeName(): string {
        return "StarIO10ArgumentError";
    }
}