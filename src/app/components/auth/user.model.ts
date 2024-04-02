export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpairationDate: Date
  ) {}

  get token(){
    if(!this._tokenExpairationDate || new Date() > this._tokenExpairationDate){
        return null
    }
    else{
    return this._token
  }
}
}
