import LanPortScanner from 'react-native-lan-port-scanner';

async function lanScanner(maxRetries = 5, delay = 1000) {
  let localServerIP = null;

  const retry = async (retriesLeft) => {
    if (retriesLeft <= 0) {
      return null
    }

    return new Promise(async (resolve, reject) => {
      try {
        console.log("iniciando escaneo");
        const networkInfo = await LanPortScanner.getNetworkInfo();
        console.log("se obtuvo el info de la network");

        const networkConfig = {
          networkInfo: networkInfo,
          ports: [3000, 3005],
          timeout: 5000,
          threads: 150,
        };

        LanPortScanner.startScan(
          networkConfig,
          (totalHosts, hostScanned) => {
            // Opcionalmente puede añadir lógica aquí si es necesario
          },
          (result) => {
            if (result.port === 3000) {
              console.log("ip del server encontrada", result.ip);
              localServerIP = result.ip;
              resolve(localServerIP);  // Resuelve la promesa cuando se encuentra la IP
            }
          },
          async (results) => {
            if (!localServerIP) {
              console.log(`no se encontro el servidor local, reiniciando la busqueda. Intentos restantes: ${retriesLeft - 1}`);
              setTimeout(() => {
                retry(retriesLeft - 1).then(resolve).catch(reject);
              }, delay);
            }
          }
        );
      } catch (e) {
        console.log(`error buscando el servidor local: ${e}. Intentos restantes: ${retriesLeft - 1}`);
        setTimeout(() => {
          retry(retriesLeft - 1).then(resolve).catch(reject);
        }, delay);
      }
    });
  };

  return retry(maxRetries);
}

export default lanScanner