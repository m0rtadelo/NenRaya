export interface Emitter {
  id: string ;
  data:
    string | // general data type
    {PRO: string; NUM: string; DIG: string} | // SSO data type
    {TIP: string; NUM: string; LET: string} ; // NIF data type
}
