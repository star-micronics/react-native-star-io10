import { StarIO10Error } from './StarIO10Error';

export class StarIO10UnsupportedModelError extends StarIO10Error {
    protected get typeName(): string {
        return "StarIO10UnsupportedModelError";
    }
}
