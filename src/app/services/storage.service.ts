import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  async setUnit(unit: string): Promise<void> {
    await Preferences.set({
      key: 'unit',
      value: unit
    });
  }

  async getUnit(): Promise<string> {
    const { value } = await Preferences.get({ key: 'unit' });
    return value || 'metric'; // Default to metric if no value is set
  }
} 