import { useEffect, useRef, useState } from "react";
import { connectorLocalStorageKey, ConnectorNames } from "..";

export function useVisionweb() {
  const [visionWeb, setVisionWeb] = useState<any>(null);
  const [account, setAccount] = useState<string>('');
  const [chainId, setChainId] = useState<string>('');

  const timerRef = useRef<any>(null);
  const countRef = useRef<number>(0);

  useEffect(() => {
    if (!timerRef.current)
      timerRef.current = setInterval(() => {
        if (countRef.current > 30) {
          countRef.current = 0;
          timerRef.current = null;
          clearInterval(timerRef.current);
        } 
        const visionWeb = (window as any).visionWeb;
        if (visionWeb && visionWeb.defaultAddress.base58) {
          setVisionWeb(visionWeb);
          setAccount(visionWeb.defaultAddress.base58);

          let fullId = '';
          if (visionWeb.fullNode.host.indexOf('vtest') > -1) {
            fullId = '20211012';
          } else if (visionWeb.fullNode.host.indexOf('vpioneer') > -1) {
            fullId = '666666';
          } else {
            fullId = '888888';
          }
          setChainId(fullId);
          countRef.current = 0;
          clearInterval(timerRef.current);
        }
        countRef.current += 1;
      }, 100)
      let addressChange: any
      window.addEventListener('message', addressChange = function change (e: any) {
        if (e.data.message && e.data.message.action === "setAccount") {
          setTimeout(() => {
            const visionWeb = (window as any).visionWeb;
            if (visionWeb && visionWeb.defaultAddress.base58) {
              setVisionWeb(visionWeb);
              setAccount(visionWeb.defaultAddress.base58);
              let fullId = '';
              if (visionWeb.fullNode.host.indexOf('vtest') > -1) {
                fullId = '20211012';
              } else if (visionWeb.fullNode.host.indexOf('vpioneer') > -1) {
                fullId = '666666';
              } else {
                fullId = '888888';
              }
              setChainId(fullId);
            }
          }, 500)
          
        }
      })  
    return () => {
      countRef.current = 0;
      timerRef.current = null;
      clearInterval(timerRef.current)
      window.removeEventListener('message', addressChange)
    }
  }, [])

  return {
    visionWeb,
    account,
    chainId
  } 
}

export default useVisionweb