
const LanScannerDummy = async () => {
    function ScanLan(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
        await ScanLan(5000)
    localServerIP ="192.168.18.21"
    
    return localServerIP
}
export default LanScannerDummy