import { Logger } from 'jsr:@deno-library/logger';
import { COLORS } from "../../helpers/colors.ts";

// TODO: Implementar el LoggerAdapter

// const logger = new Logger()

// logger.info('')
// logger.warn('')
// logger.error('')

interface ILoggerAdapter {
  file:string;
  writeLog: (msg:string)=>void;
  writeWarning: (msg:string)=>void;
  writeError: (msg:string)=>void;
}

export class DenoLoggerAdapter implements ILoggerAdapter {

  file: string;
  
  private Logger =new Logger();

  constructor(file:string){
    this.file=file;
  }


  writeLog(msg: string){
    this.Logger.info(`[${this.file} Log] ${msg}`)
  }
  
  writeWarning(msg: string){
    this.Logger.warn(`[${this.file} warning] %c${msg}`, COLORS.yellow)
  }
  
  writeError(msg: string) {
    this.Logger.error(`${this.file} error] %c${msg}`, COLORS.red)
  };

}