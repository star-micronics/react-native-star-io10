export enum StarIO10ErrorCode {
    None = 0,
    DeviceHasError = 1000,
    PrinterHoldingPaper = 1001,
    PrintingTimeout = 1002,
    BluetoothUnavailable = 2000,
    NetworkUnavailable = 2001,
    SpoolerIsDisabled = 3000,
    SpoolerBufferIsNotEnough = 3001,
    SpoolerJobIdNotExists = 3002,
    InvalidPassword = 4000,
    NeedToChangePassword = 4001,
    JsonFormatError = 5000,
    StarConfigurationFormatError = 6000,
    StarConfigurationParameterError = 6001,
    StarConfigurationSpecifiedFileError = 6002
}