// custom error
// @author Pluto <huarse@gmail.com>
// @create 2020/06/01 13:12

export default class CustomError extends Error {
  code: string | number = null;

  constructor(message: string, code: string | number) {
    super(message);
    this.code = code;
  }
}
