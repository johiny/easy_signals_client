import LanPortScanner from 'react-native-lan-port-scanner';

const lanScanner = async () => {
    const networkInfo = await LanPortScanner.getNetworkInfo();
    let localServerIP = null
    const networkConfig = {
        networkInfo: networkInfo,
        ports: [3000, 3005], //Specify port here
        timeout: 5000, //Timeout for each thread in ms
        threads: 150, //Number of threads
      };
    function ScanLan() {
        LanPortScanner.startScan(
            networkConfig, //or config2
            (totalHosts, hostScanned) => {
                return
            },
            (result) => {
              if(result.port == 3000){
                console.log("ip del server encontrada", result.ip)
                localServerIP = result.ip
              }
            },
            (results) => {
              if(!localServerIP){
                ScanLan()
              }
            }
          );
    }
    ScanLan()
    return localServerIP
}
export default lanScanner