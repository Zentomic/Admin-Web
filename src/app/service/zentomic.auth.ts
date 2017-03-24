import {Injectable} from '@angular/core';

/**
 * Internal User Login Data 
 *
 * this is the return data come form node service. Use this data between components
 */
export type Zentomic_Auth_Data = {
  error: string,
  data: any
};

/**
 * App service
 */
@Injectable()
export class ZentomicAuthService {

  // Set your states default value.
  private state: Zentomic_Auth_Data={
    error: '',
    data: {}
  };

  /**
   * Get entire states.
   *
   * @return  {Zentomic_Auth_Data} State do not respond to changes.
   */
  public cloneState(): Zentomic_Auth_Data {
    return JSON.parse(JSON.stringify(this.state));
  }
  
  /**
   * Get data by key.
   *
   *
   */
  public getState(prop?: any): Zentomic_Auth_Data {
    const state = this.state;
    return state.data.hasOwnProperty(prop) ? state.data[prop] : state;
  }

  /**
   * Set state by key and value.
   *
   * @param prop State key name.
   * @param value State value.
   * @return {any} State value.
   */
  public setState(prop: string, value: any) {

    return this.state[prop] = value;
  }
}


