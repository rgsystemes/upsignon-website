"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

const openPopups = new Set<string>();
const queryParamName = "modal";
function useModalLinkOpener(modalLinkValue: string | null, setIsOpen: (isOpen: boolean) => void) {
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

function ModalLinkOpenerFragment(p: { modalLinkValue: string | null; setIsOpen: (isOpen: boolean) => void }) {
  useModalLinkOpener(p.modalLinkValue, p.setIsOpen);
  return null;
}

export function ModalLinkOpener(p: { modalLinkValue: string | null; setIsOpen: (isOpen: boolean) => void }) {
  return (
    <Suspense>
      <ModalLinkOpenerFragment modalLinkValue={p.modalLinkValue} setIsOpen={p.setIsOpen} />
    </Suspense>
  );
}
