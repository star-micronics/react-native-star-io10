import { BlackMarkPosition } from './BlackMarkPosition';
export declare class BlackMarkParameter {
    private _enable;
    private _position;
    get enable(): boolean;
    get position(): BlackMarkPosition;
    setEnable(enable: boolean): BlackMarkParameter;
    setPosition(position: BlackMarkPosition): BlackMarkParameter;
}
