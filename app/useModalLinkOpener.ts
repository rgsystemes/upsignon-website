import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const openPopups = new Set<string>();
const queryParamName = "modal";
export function useModalLinkOpener(modalLinkValue: string | null, setIsOpen: (isOpen: boolean) => void) {
  // open this popup when url has query ?popup=contact-us
  const popupQuery = useSearchParams().get(queryParamName);
  useEffect(() => {
    if (modalLinkValue != null && !openPopups.has(queryParamName) && popupQuery === modalLinkValue) {
      openPopups.add(queryParamName);
      setIsOpen(true);
    }
    return () => {};
  }, [popupQuery, modalLinkValue, setIsOpen]);
}
