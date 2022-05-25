import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export const useAppData = () => useContext(AppContext);