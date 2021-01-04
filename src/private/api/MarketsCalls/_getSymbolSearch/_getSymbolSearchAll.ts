import {
  AxiosProxyHandler,
  Credentials,
  ISymbolSearchResult,
  ISymbolSearchResults,
} from '../../../../typescript';
import { void0 } from '../../../../utils';
import { _axiosGetApi } from '../../../routes';
// + _getSymbolSearchAll
/** _getSymbolSearch */
export const _getSymbolSearchAll = (
  credentials: Credentials,
  proxy?: AxiosProxyHandler,
) => async (
  prefix: string,
  offset: number = 0,
): Promise<ISymbolSearchResult[]> => {
  try {
    const results = await _axiosGetApi(
      credentials,
      proxy,
    )<ISymbolSearchResults>(
      `/symbols/search?prefix=${prefix.toUpperCase()}&offset=${offset}`,
    )();
    if (results && results.symbols) {
      return results.symbols.map(result => {
        result.count = results.symbols.length || 0;
        return result;
      });
    }
    return results.symbols;
  } catch (error) {
    console.error(error); // TODO: List the side effects

    return [];
  }
};
void0(void0);
