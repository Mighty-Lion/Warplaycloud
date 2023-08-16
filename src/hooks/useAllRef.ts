import { useContext } from "react";
import { AllRefContext } from "@/providers/AllRefProvider";

export function useAllRef() {
  const value = useContext(AllRefContext);

  return value;
}
