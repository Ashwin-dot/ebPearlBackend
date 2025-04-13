import winston from 'winston'
import { CONFIG } from './'

const logger = winston.createLogger({
  level: 'info',
  defaultMeta: {
    serviceName: 'project-template',
  },
  transports: [
    new winston.transports.File({
      dirname: 'logs',
      filename: 'combined.log',
      level: 'info',
      silent: CONFIG.NODE_ENV === 'test',
    }),
    new winston.transports.File({
      dirname: 'logs',
      filename: 'error.log',
      level: 'error',
      silent: CONFIG.NODE_ENV === 'test',
    }),
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      silent: CONFIG.NODE_ENV === 'test',
    }),
  ],
})

export default logger
