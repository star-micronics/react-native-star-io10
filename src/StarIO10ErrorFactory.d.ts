import { StarIO10Error } from './StarIO10Error';
export declare class StarIO10ErrorFactory {
    static create(identifier: String): Promise<StarIO10Error>;
    private static _buildObject;
}
