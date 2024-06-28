import { StarIO10Error } from './StarIO10Error';

export class StarIO10BadResponseError extends StarIO10Error {
    protected get typeName(): string {
        return "StarIO10BadResponseError";
    }
}