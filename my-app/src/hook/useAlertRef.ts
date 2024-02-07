import { useEffect, useRef } from "react";
// NOTE 組件
import useAlert from "@/components/Alert/useAlert";
import { type AlertEvent } from "@/components/Alert/context";

/** - 用ref儲存避免function重複執行 */
export default function useAlertRef() {
  const Alert = useAlert();
  const alertRef = useRef<AlertEvent>(Alert);
  useEffect(() => {
    alertRef.current = Alert;
  }, [Alert]);
  return alertRef.current;
}
