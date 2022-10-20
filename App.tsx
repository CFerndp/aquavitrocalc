import { StatusBar } from "expo-status-bar";
import {  ThemeProvider } from '@rneui/themed';
import Entry from "./Entry";


export default function App() {
  return (
    <ThemeProvider>    
      <Entry />
      <StatusBar style="auto" />    
    </ThemeProvider>
  );
}
