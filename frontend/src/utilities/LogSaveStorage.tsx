import * as SecureStore from "expo-secure-store";

type LogSaveProps = {
    key: string;
    value: string
}

export async function saveToExpoSec(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

export async function getLogSave(key: string) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    // alert("🔐 Here's your value 🔐 \n" + result);
    return {key: result}
  } else {
    // alert("No values stored under that key.");
    return {key: 'not_found'}

  }
}
