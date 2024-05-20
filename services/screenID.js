import * as SecureStore from 'expo-secure-store';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'SCREEN_ID';

const getScreenId = async () => {
  try {
    // Verificar si la clave ya existe en Secure Storage
    let storedId = await SecureStore.getItemAsync(STORAGE_KEY);

    if (storedId) {
      // Si la clave existe, retornar el ID almacenado
      console.log('ID encontrado en Secure Storage:', storedId);
      return storedId;
    } else {
      // Si la clave no existe, crear un nuevo ID único
      const newId = uuidv4();
      await SecureStore.setItemAsync(STORAGE_KEY, newId);
      console.log('Nuevo ID generado y almacenado en Secure Storage:', newId);
      return newId;
    }
  } catch (error) {
    console.error('Error accediendo a Secure Storage:', error);
    throw error;
  }
};