import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "@/components/HomePage";
import Reasons from "@/components/Reasons";
import HowDoesItWork from "@/components/HowDoesItWork";
import BeforeFAQ from "@/components/BeforeFAQ";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import modalReducer from "../features/modal";
const inter = Inter({ subsets: ["latin"] });

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default function Home() {
  return (
    <Provider store={store}>
      <div className="w-full ">
        <HomePage />
        <Reasons />
        <HowDoesItWork />
        <BeforeFAQ />
      </div>
    </Provider>
  );
}
