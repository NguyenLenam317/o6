/**
 * Utility for managing device-specific identifiers
 * Used to isolate data between different devices accessing the website
 */

const DEVICE_ID_KEY = 'app_device_id';

/**
 * Generates a random UUID v4
 */
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * Gets the current device ID or generates a new one if none exists
 */
export function getDeviceId(): string {
  let deviceId = localStorage.getItem(DEVICE_ID_KEY);
  
  if (!deviceId) {
    deviceId = generateUUID();
    localStorage.setItem(DEVICE_ID_KEY, deviceId);
  }
  
  return deviceId;
}

/**
 * Clears the device ID from storage (useful for testing)
 */
export function clearDeviceId(): void {
  localStorage.removeItem(DEVICE_ID_KEY);
}
