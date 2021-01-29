import { access, constants, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { ApiOptions } from '../../../typescript';
import { sync } from '../../../utils';
import { _buildCredentialsFromToken } from './_buildCredentialsFromToken';

const { dirname } = path;

export const validateToken = (options: ApiOptions) => {
  const credentials = _buildCredentialsFromToken(options);
  let refreshToken: string = credentials.seedToken;

  try {
    if (!!credentials.keyFile) {
      sync(dirname(credentials.keyFile));
    } else {
      sync(credentials.keyDir);
    }
    credentials.keyFile =
      credentials.keyFile || `${credentials.keyDir}/${credentials.seedToken}`;
    refreshToken = readFileSync(credentials.keyFile, 'utf8');
  } catch {
    credentials.keyFile =
      credentials.keyFile || `${credentials.keyDir}/${credentials.seedToken}`;
    access(credentials.keyFile, constants.F_OK, async none => {
      if (none) {
        writeFileSync(credentials.keyFile, credentials.seedToken, {
          encoding: 'utf8',
        });
      }
    });
  }
  return { credentials, refreshToken };
};

// export function (
//   options: QuestradeAPIOptions,
// ): {
//   refreshToken: string;
//   credentials: Credentials;
// } {
//   return _validateToken(options);
// }