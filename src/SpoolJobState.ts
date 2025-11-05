export enum SpoolJobState {
    Unknown = 'Unknown',
    Accepted = 'Accepted',
    PrintFailedByTimeoutBeforePrinting = 'PrintFailedByTimeoutBeforePrinting',
    Printing = 'Printing',
    WaitingPaperTaken = 'WaitingPaperTaken',
    WaitingPrinterReady = 'WaitingPrinterReady',
    PrintSucceeded = 'PrintSucceeded',
    PrintFailedByPrinterError = 'PrintFailedByPrinterError',
    PrintFailedByTimeout = 'PrintFailedByTimeout',
    PrintFailedByPowerOff = 'PrintFailedByPowerOff'
}